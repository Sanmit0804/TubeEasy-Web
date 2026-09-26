export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import { isValidYouTubeUrl, cleanYouTubeUrl } from "@/lib/urlValidator";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const formatId = searchParams.get("format_id") || "best";
  const ext = searchParams.get("ext") || "mp4";
  const rawTitle = searchParams.get("title") || "download";

  if (!url || !isValidYouTubeUrl(url)) {
    return NextResponse.json({ error: "Valid YouTube URL required" }, { status: 400 });
  }

  const cleanedUrl = cleanYouTubeUrl(url);
  const safeTitle = rawTitle.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").slice(0, 100);
  const filename = `${safeTitle}.${ext}`;

  // Build yt-dlp arguments for streaming
  const isAudio = formatId.startsWith("audio_");
  const args = ["-m", "yt_dlp", "--no-warnings", "-o", "-"];

  if (isAudio) {
    if (ext === "mp3") {
      args.push("-x", "--audio-format", "mp3", "--audio-quality", "320k");
    } else if (ext === "m4a") {
      args.push("-x", "--audio-format", "m4a");
    } else if (ext === "wav") {
      args.push("-x", "--audio-format", "wav");
    } else {
      args.push("-x", "--audio-format", "mp3");
    }
  } else {
    if (formatId === "best") {
      args.push("-f", "bestvideo+bestaudio/best");
    } else {
      args.push("-f", `${formatId}+bestaudio/best`);
    }
  }

  args.push(cleanedUrl);

  const pythonExe = process.env.PYTHON_PATH || "C:\\Users\\sanmi\\AppData\\Local\\Programs\\Python\\Python312\\python.exe";
  const proc = spawn(/*turbopackIgnore: true*/ pythonExe, args);

  const webStream = new ReadableStream({
    start(controller) {
      proc.stdout.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      proc.stdout.on("end", () => {
        controller.close();
      });
      proc.on("error", (err) => {
        controller.error(err);
      });
    },
    cancel() {
      proc.kill();
    },
  });

  const contentType = isAudio
    ? ext === "mp3"
      ? "audio/mpeg"
      : ext === "m4a"
      ? "audio/mp4"
      : "audio/wav"
    : ext === "webm"
    ? "video/webm"
    : "video/mp4";

  return new Response(webStream, {
    headers: {
      "Content-Disposition": `attachment; filename="${encodeURIComponent(filename)}"`,
      "Content-Type": contentType,
      "Cache-Control": "no-cache",
    },
  });
}