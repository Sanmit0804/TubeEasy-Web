import React from "react";
import {
  Zap,
  ShieldCheck,
  Video,
  Music,
  Laptop,
  Smartphone,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { AdSlot } from "./AdSlot";

export function SeoContent() {
  return (
    <section className="w-full border-t border-[#20242E] bg-[#0C0E12] py-16 text-[#8A94A6]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-16">
        {/* In-Content Banner Ad */}
        <AdSlot type="in-content-banner" />

        {/* Section 1: How it Works (3 Easy Steps) */}
        <div id="how-it-works" className="space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">
              Simple & Fast
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              How to Download YouTube Videos in 3 Steps
            </h2>
            <p className="mx-auto max-w-xl text-sm text-[#8A94A6]">
              No registration, no software installation, and no complex setup required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Step 1 */}
            <div className="rounded-2xl border border-[#20242E] bg-[#15181F] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E11D48]/10 text-[#E11D48] font-bold text-base">
                1
              </div>
              <h3 className="text-base font-semibold text-white">Copy the YouTube URL</h3>
              <p className="text-xs leading-relaxed text-[#717B8C]">
                Open YouTube on your browser or mobile app, find the video or music track you wish to save, and copy its link from the address bar or share menu.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-[#20242E] bg-[#15181F] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E11D48]/10 text-[#E11D48] font-bold text-base">
                2
              </div>
              <h3 className="text-base font-semibold text-white">Paste & Inspect Formats</h3>
              <p className="text-xs leading-relaxed text-[#717B8C]">
                Paste the URL into the search box above. TubeEasy will immediately analyze the stream and list all available resolutions, audio bitrates, and file sizes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-[#20242E] bg-[#15181F] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E11D48]/10 text-[#E11D48] font-bold text-base">
                3
              </div>
              <h3 className="text-base font-semibold text-white">Download Your File</h3>
              <p className="text-xs leading-relaxed text-[#717B8C]">
                Click the Download button next to your desired format (e.g. 1080p MP4 or 320kbps MP3). Your download begins instantly with high-speed server processing.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Formats & Features Grid */}
        <div id="formats" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              High Definition & Lossless Audio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Supported Formats & Resolutions
            </h2>
            <p className="mx-auto max-w-xl text-sm text-[#8A94A6]">
              TubeEasy merges separate video and audio streams into single, compatible media files ready for any media player.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="flex items-start gap-4 rounded-2xl border border-[#20242E] bg-[#15181F] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                <Video className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-white">Ultra HD 4K & 1080p Video</h3>
                <p className="text-xs leading-relaxed text-[#717B8C]">
                  Download videos in original resolution up to 4320p (8K), 2160p (4K UHD), 1440p (2K), and 1080p (Full HD) at 60fps with crystal clear audio.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="flex items-start gap-4 rounded-2xl border border-[#20242E] bg-[#15181F] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F43F5E]/10 text-[#F43F5E]">
                <Music className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-white">320kbps High-Quality MP3</h3>
                <p className="text-xs leading-relaxed text-[#717B8C]">
                  Extract studio-quality audio tracks directly from videos, concerts, and podcasts in MP3 (320 kbps & 192 kbps), Apple M4A (AAC), or lossless WAV.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="flex items-start gap-4 rounded-2xl border border-[#20242E] bg-[#15181F] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#34D399]/10 text-[#34D399]">
                <Smartphone className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-white">Universal Device Compatibility</h3>
                <p className="text-xs leading-relaxed text-[#717B8C]">
                  Works seamlessly across Windows, macOS, Linux, iOS (iPhone/iPad), Android smartphones, tablets, and smart TVs without installing extra apps.
                </p>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="flex items-start gap-4 rounded-2xl border border-[#20242E] bg-[#15181F] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#A855F7]/10 text-[#A855F7]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-white">Safe, Secure & No Tracking</h3>
                <p className="text-xs leading-relaxed text-[#717B8C]">
                  We never store your personal data, logs, or search history. Every conversion is processed ephemerally with zero tracking scripts or popups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
