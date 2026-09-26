import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#20242E] bg-[#0A0C0F] text-[#8A94A6]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden rounded-xl border border-[#20242E] bg-[#12151C]">
                <Image
                  src="/logo.png"
                  alt="TubeEasy Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">TubeEasy</span>
            </Link>
            <p className="max-w-md text-xs leading-relaxed text-[#717B8C]">
              TubeEasy is a fast, lightweight, and modern online YouTube downloader. Convert and download YouTube videos, shorts, and audio in 4K, 1080p MP4 and 320kbps MP3 without limits.
            </p>
          </div>

          {/* Quick Tools */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F1F5F9]">Features</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="#downloader" className="transition-colors hover:text-white">
                  YouTube to MP4 (1080p & 4K)
                </Link>
              </li>
              <li>
                <Link href="#downloader" className="transition-colors hover:text-white">
                  YouTube to MP3 (320 kbps)
                </Link>
              </li>
              <li>
                <Link href="#downloader" className="transition-colors hover:text-white">
                  YouTube Shorts Downloader
                </Link>
              </li>
              <li>
                <Link href="#downloader" className="transition-colors hover:text-white">
                  Playlist Downloader
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & AdSense Compliance */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F1F5F9]">Legal & Info</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terms of Service & DMCA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact & Support
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 border-t border-[#1C202A] pt-6 text-center text-[11px] text-[#5A6478]">
          <p className="mb-2">
            Disclaimer: TubeEasy does not host any copyrighted videos on its servers. All downloads are fetched directly from third-party media sources. Please respect copyright laws and download only authorized content.
          </p>
          <p>© {currentYear} TubeEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}