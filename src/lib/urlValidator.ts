const YOUTUBE_PATTERNS = [
  /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})(?:&.*)?$/,
  /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/,
  /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/,
  /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/,
  /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/,
  /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/live\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/,
];

const PLAYLIST_PATTERN = /[?&]list=([a-zA-Z0-9_-]+)/;

export function isValidYouTubeUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  return YOUTUBE_PATTERNS.some((p) => p.test(trimmed)) || (trimmed.includes("youtube.com") && PLAYLIST_PATTERN.test(trimmed));
}

export function extractVideoId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();
  for (const pattern of YOUTUBE_PATTERNS) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

export function isPlaylistUrl(url: string): boolean {
  if (!url) return false;
  return PLAYLIST_PATTERN.test(url.trim());
}

export function cleanYouTubeUrl(url: string): string {
  const vid = extractVideoId(url);
  if (vid) {
    return `https://www.youtube.com/watch?v=${vid}`;
  }
  return url.trim();
}