import { spawn } from "child_process";
import { FormatOption, VideoMetadata } from "@/types";
import { formatBytes, formatDuration, formatViews } from "./formatting";

const PYTHON_PATHS = [
  process.env.PYTHON_PATH,
  "C:\\Users\\sanmi\\AppData\\Local\\Programs\\Python\\Python312\\python.exe",
  "python3",
  "python",
].filter(Boolean) as string[];

async function runCommand(args: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    let proc = null;
    let stdout = "";
    let stderr = "";

    // Try finding working python / yt-dlp
    const pythonExe = PYTHON_PATHS[0] || "python";

    // Call yt-dlp via python -m yt_dlp
    const fullArgs = ["-m", "yt_dlp", ...args];
    proc = spawn(/*turbopackIgnore: true*/ pythonExe, fullArgs);

    proc.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    proc.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    proc.on("close", (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(new Error(stderr || `Process exited with code ${code}`));
      }
    });

    proc.on("error", (err) => {
      // Fallback to direct 'yt-dlp' command if python fails
      const fallback = spawn(/*turbopackIgnore: true*/ "yt-dlp", args);
      let fStdout = "";
      let fStderr = "";

      fallback.stdout.on("data", (d) => {
        fStdout += d.toString();
      });
      fallback.stderr.on("data", (d) => {
        fStderr += d.toString();
      });

      fallback.on("close", (fCode) => {
        if (fCode === 0) {
          resolve(fStdout);
        } else {
          reject(new Error(fStderr || err.message));
        }
      });

      fallback.on("error", () => {
        reject(new Error(`Failed to execute yt-dlp: ${err.message}`));
      });
    });
  });
}

export async function extractVideoInfo(url: string): Promise<VideoMetadata> {
  const args = [
    "--dump-single-json",
    "--no-warnings",
    "--no-check-certificates",
    "--prefer-free-formats",
    url,
  ];

  const rawJson = await runCommand(args);
  const data = JSON.parse(rawJson);

  const rawFormats = data.formats || [];
  const parsedFormats: FormatOption[] = [];

  // 1. Audio best stream for estimating combined size
  let bestAudioBytes = 0;
  for (const f of rawFormats) {
    if (f.acodec && f.acodec !== "none" && (!f.vcodec || f.vcodec === "none")) {
      const sz = f.filesize || f.filesize_approx || 0;
      if (sz > bestAudioBytes) bestAudioBytes = sz;
    }
  }

  // Common standard video heights to curate
  const seenHeights = new Set<number>();
  const TARGET_HEIGHTS = [4320, 2160, 1440, 1080, 720, 480, 360];

  // Map highest quality per standard resolution
  for (const targetH of TARGET_HEIGHTS) {
    const matching = rawFormats.filter((f: any) => {
      const h = f.height || 0;
      const hasV = f.vcodec && f.vcodec !== "none";
      return hasV && Math.abs(h - targetH) <= 10;
    });

    if (matching.length > 0) {
      // Sort by bitrate / size descending
      matching.sort((a: any, b: any) => (b.tbr || 0) - (a.tbr || 0));
      const best = matching[0];

      const hasAudio = best.acodec && best.acodec !== "none";
      const formatType = "video_audio"; // We will merge video+audio on download

      const vidSize = best.filesize || best.filesize_approx || 0;
      const combinedSize = hasAudio ? vidSize : vidSize > 0 ? vidSize + bestAudioBytes : null;

      const resLabel =
        targetH >= 2160
          ? `${targetH}p (4K UHD)`
          : targetH >= 1440
          ? "1440p (2K QHD)"
          : targetH === 1080
          ? "1080p (Full HD)"
          : targetH === 720
          ? "720p (HD)"
          : `${targetH}p`;

      parsedFormats.push({
        format_id: best.format_id,
        resolution: resLabel,
        ext: "mp4",
        format_type: formatType,
        filesize_approx: combinedSize,
        filesize_formatted: formatBytes(combinedSize),
        fps: best.fps || 30,
        vcodec: (best.vcodec || "H.264").split(".")[0],
        acodec: (best.acodec && best.acodec !== "none" ? best.acodec : "AAC").split(".")[0],
        has_audio: true,
        has_video: true,
        is_direct: false,
        height: targetH,
      });

      seenHeights.add(targetH);
    }
  }

  // 2. Audio Only options (MP3 320k, 192k, M4A, WAV)
  const audioOptions: { res: string; ext: string; approxRate: number }[] = [
    { res: "MP3 (High 320 kbps)", ext: "mp3", approxRate: 320 },
    { res: "MP3 (Standard 192 kbps)", ext: "mp3", approxRate: 192 },
    { res: "M4A (Apple AAC)", ext: "m4a", approxRate: 160 },
    { res: "WAV (Lossless Audio)", ext: "wav", approxRate: 1411 },
  ];

  const durationSec = data.duration || 0;
  for (const aOpt of audioOptions) {
    const approxBytes =
      durationSec > 0
        ? Math.round((durationSec * aOpt.approxRate * 1000) / 8)
        : bestAudioBytes || null;
    parsedFormats.push({
      format_id: `audio_${aOpt.ext}_${aOpt.approxRate}`,
      resolution: aOpt.res,
      ext: aOpt.ext,
      format_type: "audio_only",
      filesize_approx: approxBytes,
      filesize_formatted: formatBytes(approxBytes),
      fps: null,
      vcodec: "none",
      acodec: aOpt.ext.toUpperCase(),
      has_audio: true,
      has_video: false,
      is_direct: false,
      tbr: aOpt.approxRate,
    });
  }

  return {
    id: data.id,
    title: data.title || "YouTube Video",
    description: data.description ? data.description.slice(0, 300) : "",
    thumbnail: data.thumbnail || `https://i.ytimg.com/vi/${data.id}/maxresdefault.jpg`,
    duration: durationSec,
    duration_formatted: formatDuration(durationSec),
    uploader: data.uploader || data.channel || "Unknown Channel",
    uploader_url: data.uploader_url,
    view_count: data.view_count || 0,
    view_count_formatted: formatViews(data.view_count),
    upload_date: data.upload_date,
    webpage_url: data.webpage_url || url,
    formats: parsedFormats,
    is_playlist: Boolean(data._type === "playlist" || data.entries),
    playlist_count: data.entries ? data.entries.length : undefined,
  };
}