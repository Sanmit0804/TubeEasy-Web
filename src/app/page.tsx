import { DownloaderSection } from "@/components/DownloaderSection";
import { SeoContent } from "@/components/SeoContent";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AdSlot } from "@/components/AdSlot";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Downloader Hero & Search Area */}
      <DownloaderSection />

      {/* 2. SEO Content, How-It-Works & Formats */}
      <SeoContent />

      {/* 3. Interactive FAQ Section */}
      <FaqAccordion />

      {/* 4. Bottom Leaderboard Ad Slot */}
      <div className="w-full max-w-4xl px-4 py-8">
        <AdSlot type="bottom-banner" />
      </div>
    </div>
  );
}
