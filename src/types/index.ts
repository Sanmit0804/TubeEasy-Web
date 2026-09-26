export interface FormatOption {
  format_id: string;
  resolution: string;      // e.g. "1080p", "720p", "320 kbps"
  ext: string;             // e.g. "mp4", "webm", "mp3", "m4a", "wav"
  format_type: "video_audio" | "audio_only" | "video_only";
  filesize_approx: number | null; // In bytes
  filesize_formatted: string;
  fps: number | null;
  vcodec: string;
  acodec: string;
  has_audio: boolean;
  has_video: boolean;
  is_direct: boolean;
  download_url?: string;
  height?: number;
  width?: number;
  tbr?: number;            // Total bitrate in kbps
}

export interface VideoMetadata {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: number;        // In seconds
  duration_formatted: string;
  uploader: string;
  uploader_url?: string;
  view_count: number;
  view_count_formatted: string;
  upload_date?: string;
  webpage_url: string;
  formats: FormatOption[];
  is_playlist?: boolean;
  playlist_count?: number;
}

export interface AnalyzeResponse {
  success: boolean;
  data?: VideoMetadata;
  error?: string;
}

export type AdSlotType = 
  | "top-leaderboard"
  | "post-analysis"
  | "in-content-banner"
  | "sidebar-sticky"
  | "bottom-banner";

export interface AdSlotConfig {
  slotId: string;
  format: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
}