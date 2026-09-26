"use client";

import React, { useState } from "react";
import { Download, Music, Video, Sparkles, CheckCircle2 } from "lucide-react";
import { FormatOption } from "@/types";

interface FormatTableProps {
  formats: FormatOption[];
  videoTitle: string;
  videoUrl: string;
}

export function FormatTable({ formats, videoTitle, videoUrl }: FormatTableProps) {
  const [activeTab, setActiveTab] = useState<"all" | "video_audio" | "audio_only">("all");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const filtered = formats.filter((f) => {
    if (activeTab === "all") return true;
    return f.format_type === activeTab;
  });

  const handleDownload = (format: FormatOption) => {
    setDownloadingId(format.format_id);

    // Build direct streaming download URL
    const query = new URLSearchParams({
      url: videoUrl,
      format_id: format.format_id,
      ext: format.ext,
      title: videoTitle,
    });

    const downloadUrl = `/api/download?${query.toString()}`;

    // Trigger browser download via invisible iframe/anchor
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = `${videoTitle}.${format.ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      setDownloadingId(null);
    }, 4000);
  };

  return (
    <div className="rounded-xl border border-[#20242E] bg-[#15181F] p-5 shadow-sm">
      {/* Table Header & Category Tabs */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#20242E] pb-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Available Formats & Resolutions
          </h3>
          <p className="text-xs text-[#8A94A6]">
            Select your preferred quality or audio format to download directly.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 rounded-lg border border-[#20242E] bg-[#0F1115] p-1">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "all"
                ? "bg-[#20242E] text-white shadow-sm"
                : "text-[#8A94A6] hover:text-white"
            }`}
          >
            All Formats
          </button>
          <button
            onClick={() => setActiveTab("video_audio")}
            className={`flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "video_audio"
                ? "bg-[#20242E] text-white shadow-sm"
                : "text-[#8A94A6] hover:text-white"
            }`}
          >
            <Video className="h-3 w-3" />
            <span>Video (MP4)</span>
          </button>
          <button
            onClick={() => setActiveTab("audio_only")}
            className={`flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "audio_only"
                ? "bg-[#20242E] text-white shadow-sm"
                : "text-[#8A94A6] hover:text-white"
            }`}
          >
            <Music className="h-3 w-3" />
            <span>Audio (MP3)</span>
          </button>
        </div>
      </div>

      {/* Formats Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[#20242E] text-[11px] font-semibold uppercase tracking-wider text-[#717B8C]">
              <th className="pb-3 pl-2">Quality / Preset</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Format</th>
              <th className="pb-3">File Size</th>
              <th className="pb-3 text-right pr-2">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1A1D25]">
            {filtered.map((fmt) => {
              const isBest =
                fmt.resolution.includes("1080p") ||
                fmt.resolution.includes("4K") ||
                fmt.resolution.includes("320 kbps");
              const isDownloading = downloadingId === fmt.format_id;

              return (
                <tr
                  key={fmt.format_id}
                  className="transition-colors hover:bg-[#1A1E26]/60"
                >
                  {/* Resolution & Badge */}
                  <td className="py-3 pl-2 font-medium text-white">
                    <div className="flex items-center gap-2">
                      <span>{fmt.resolution}</span>
                      {isBest && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-[#E11D48]/15 px-2 py-0.5 text-[10px] font-semibold text-[#F43F5E]">
                          <Sparkles className="h-2.5 w-2.5" />
                          Popular
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-3 text-[#8A94A6]">
                    {fmt.format_type === "video_audio" ? (
                      <span className="inline-flex items-center gap-1 text-[#CBD5E1]">
                        <Video className="h-3 w-3 text-[#38BDF8]" /> Video + Audio
                      </span>
                    ) : fmt.format_type === "audio_only" ? (
                      <span className="inline-flex items-center gap-1 text-[#CBD5E1]">
                        <Music className="h-3 w-3 text-[#F43F5E]" /> Audio Only
                      </span>
                    ) : (
                      "Video Only"
                    )}
                  </td>

                  {/* Format / Extension */}
                  <td className="py-3 uppercase font-mono text-[11px] text-[#8A94A6]">
                    {fmt.ext}
                  </td>

                  {/* Size */}
                  <td className="py-3 font-mono text-[#8A94A6]">
                    {fmt.filesize_formatted}
                  </td>

                  {/* Download Action */}
                  <td className="py-3 text-right pr-2">
                    <button
                      onClick={() => handleDownload(fmt)}
                      disabled={isDownloading}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                        isDownloading
                          ? "bg-[#20242E] text-[#34D399]"
                          : isBest
                          ? "bg-[#E11D48] text-white hover:bg-[#BE123C] shadow-sm shadow-[#E11D48]/20"
                          : "border border-[#20242E] bg-[#161920] text-[#CBD5E1] hover:border-[#303644] hover:bg-[#1E232D] hover:text-white"
                      }`}
                    >
                      {isDownloading ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5 animate-bounce" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-3.5 w-3.5" />
                          <span>Download</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
