"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Clipboard,
  Sparkles,
  AlertCircle,
  Clock,
  Eye,
  User,
  Loader2,
  Video,
  Music,
  Download,
} from "lucide-react";
import { VideoMetadata, FormatOption } from "@/types";
import { FormatTable } from "./FormatTable";
import { AdSlot } from "./AdSlot";

export function DownloaderSection() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoMetadata | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text.trim());
        analyzeUrl(text.trim());
      }
    } catch (e) {
      console.debug("Clipboard access error:", e);
    }
  };

  const analyzeUrl = async (inputUrl?: string) => {
    const targetUrl = (inputUrl || url).trim();
    if (!targetUrl) {
      setError("Please paste or enter a YouTube video URL.");
      return;
    }

    setLoading(true);
    setError(null);
    setVideoData(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: targetUrl }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to analyze YouTube video.");
      }

      setVideoData(json.data);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching video details.");
    } finally {
      setLoading(false);
    }
  };

  const handlePresetClick = (presetType: string) => {
    if (!videoData) return;

    let match: FormatOption | undefined;
    if (presetType === "best") {
      match = videoData.formats.find((f) => f.format_type === "video_audio");
    } else if (presetType === "1080p") {
      match = videoData.formats.find(
        (f) => f.format_type === "video_audio" && f.resolution.includes("1080p")
      );
    } else if (presetType === "720p") {
      match = videoData.formats.find(
        (f) => f.format_type === "video_audio" && f.resolution.includes("720p")
      );
    } else if (presetType === "mp3") {
      match = videoData.formats.find(
        (f) => f.format_type === "audio_only" && f.ext === "mp3"
      );
    } else if (presetType === "m4a") {
      match = videoData.formats.find(
        (f) => f.format_type === "audio_only" && f.ext === "m4a"
      );
    }

    if (!match && videoData.formats.length > 0) {
      match = videoData.formats[0];
    }

    if (match) {
      const query = new URLSearchParams({
        url: videoData.webpage_url,
        format_id: match.format_id,
        ext: match.ext,
        title: videoData.title,
      });
      window.location.href = `/api/download?${query.toString()}`;
    }
  };

  return (
    <section id="downloader" className="w-full pt-10 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Top Leaderboard Ad Slot */}
        <AdSlot type="top-leaderboard" />

        {/* Hero Header */}
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 px-3 py-1 text-xs font-semibold text-[#F43F5E]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Fast, Free & 100% Unlimited</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Download YouTube Videos <br />
            <span className="bg-gradient-to-r from-white via-[#F1F5F9] to-[#8A94A6] bg-clip-text text-transparent">
              in 4K, 1080p MP4 & 320kbps MP3
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-[#8A94A6]">
            Paste any YouTube URL or playlist link below to instantly inspect formats,
            extract high-bitrate audio, or download Full HD video directly to your device.
          </p>
        </div>

        {/* URL Input Box Card */}
        <div className="relative rounded-2xl border border-[#20242E] bg-[#15181F] p-3 sm:p-4 shadow-xl shadow-black/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              analyzeUrl();
            }}
            className="flex flex-col sm:flex-row items-stretch gap-2.5"
          >
            {/* Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste YouTube link here (e.g. https://www.youtube.com/watch?v=...)"
                className="w-full rounded-xl border border-[#20242E] bg-[#0F1115] px-4 py-3.5 pl-11 text-sm text-white placeholder-[#5A6478] outline-none transition-all focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48]"
              />
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6478]" />
            </div>

            {/* Paste Button */}
            <button
              type="button"
              onClick={handlePaste}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#20242E] bg-[#161920] px-4 py-3 text-xs font-semibold text-[#CBD5E1] transition-all hover:border-[#303644] hover:bg-[#1E232D] hover:text-white sm:w-auto"
            >
              <Clipboard className="h-4 w-4" />
              <span>Paste</span>
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#E11D48]/30 transition-all hover:bg-[#BE123C] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <span>Download</span>
                  <Download className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Preset Pills */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#1C202A] text-xs text-[#717B8C]">
            <span className="font-medium text-[#8A94A6]">Presets:</span>
            <button
              type="button"
              onClick={() => handlePresetClick("best")}
              className="rounded-lg border border-[#20242E] bg-[#0F1115] px-2.5 py-1 text-[11px] font-medium text-[#CBD5E1] hover:border-[#38BDF8] hover:text-white transition-colors"
            >
              ⭐ Best Quality
            </button>
            <button
              type="button"
              onClick={() => handlePresetClick("1080p")}
              className="rounded-lg border border-[#20242E] bg-[#0F1115] px-2.5 py-1 text-[11px] font-medium text-[#CBD5E1] hover:border-[#38BDF8] hover:text-white transition-colors"
            >
              🎥 1080p FHD
            </button>
            <button
              type="button"
              onClick={() => handlePresetClick("720p")}
              className="rounded-lg border border-[#20242E] bg-[#0F1115] px-2.5 py-1 text-[11px] font-medium text-[#CBD5E1] hover:border-[#38BDF8] hover:text-white transition-colors"
            >
              720p HD
            </button>
            <button
              type="button"
              onClick={() => handlePresetClick("mp3")}
              className="rounded-lg border border-[#20242E] bg-[#0F1115] px-2.5 py-1 text-[11px] font-medium text-[#CBD5E1] hover:border-[#F43F5E] hover:text-white transition-colors"
            >
              🎵 MP3 (320 kbps)
            </button>
            <button
              type="button"
              onClick={() => handlePresetClick("m4a")}
              className="rounded-lg border border-[#20242E] bg-[#0F1115] px-2.5 py-1 text-[11px] font-medium text-[#CBD5E1] hover:border-[#F43F5E] hover:text-white transition-colors"
            >
              M4A Audio
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#EF4444]/30 bg-[#EF4444]/10 p-4 text-xs text-[#FCA5A5]">
            <AlertCircle className="h-5 w-5 shrink-0 text-[#EF4444]" />
            <div>
              <p className="font-semibold text-white">Download Analysis Error</p>
              <p className="mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* Video Metadata Card */}
        {videoData && (
          <div className="mt-6 space-y-6">
            <div className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-[#20242E] bg-[#15181F] p-4 sm:p-5">
              {/* Thumbnail with duration badge */}
              <div className="relative aspect-video w-full sm:w-64 shrink-0 overflow-hidden rounded-xl border border-[#20242E] bg-[#0F1115]">
                {videoData.thumbnail ? (
                  <img
                    src={videoData.thumbnail}
                    alt={videoData.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-[#5A6478]">
                    No Preview
                  </div>
                )}
                <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[11px] font-bold text-white backdrop-blur-sm">
                  {videoData.duration_formatted}
                </span>
              </div>

              {/* Info Details */}
              <div className="flex flex-1 flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h2 className="text-base sm:text-lg font-bold text-white line-clamp-2">
                    {videoData.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#8A94A6]">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-[#5A6478]" />
                      {videoData.uploader}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5 text-[#5A6478]" />
                      {videoData.view_count_formatted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#5A6478]" />
                      {videoData.duration_formatted}
                    </span>
                  </div>
                </div>

                {/* Quick 1-Click Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1C202A]">
                  <button
                    onClick={() => handlePresetClick("best")}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#E11D48] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#BE123C] transition-all"
                  >
                    <Video className="h-3.5 w-3.5" />
                    <span>Download Best Video</span>
                  </button>
                  <button
                    onClick={() => handlePresetClick("mp3")}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#20242E] bg-[#161920] px-3.5 py-1.5 text-xs font-semibold text-[#CBD5E1] hover:border-[#303644] hover:bg-[#1E232D] hover:text-white transition-all"
                  >
                    <Music className="h-3.5 w-3.5" />
                    <span>Download MP3</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Post-Analysis Google AdSense Slot (High CTR position) */}
            <AdSlot type="post-analysis" />

            {/* Formats Table */}
            <FormatTable
              formats={videoData.formats}
              videoTitle={videoData.title}
              videoUrl={videoData.webpage_url}
            />
          </div>
        )}
      </div>
    </section>
  );
}
