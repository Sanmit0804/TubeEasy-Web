import Link from "next/link";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#20242E] bg-[#0F1115]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E11D48] text-white shadow-sm shadow-[#E11D48]/30">
            <Play className="h-4 w-4 fill-white translate-x-0.5" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold tracking-tight text-white">TubeEasy</span>
            <span className="text-xs font-semibold text-[#E11D48]">.online</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#downloader"
            className="text-sm font-medium text-[#8A94A6] transition-colors hover:text-white"
          >
            Downloader
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-[#8A94A6] transition-colors hover:text-white"
          >
            How it Works
          </Link>
          <Link
            href="#formats"
            className="text-sm font-medium text-[#8A94A6] transition-colors hover:text-white"
          >
            4K & MP3
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-[#8A94A6] transition-colors hover:text-white"
          >
            FAQ
          </Link>
        </nav>

        {/* GitHub / Windows Desktop App Link */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#20242E] bg-[#161920] px-3.5 py-1.5 text-xs font-medium text-[#CBD5E1] transition-all hover:border-[#303644] hover:bg-[#1E232D] hover:text-white"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="hidden sm:inline">Windows .exe App</span>
            <span className="sm:hidden">App</span>
          </a>
        </div>
      </div>
    </header>
  );
}