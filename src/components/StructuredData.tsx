import React from "react";
import { siteConfig } from "@/config/site";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows, macOS, Linux, Android, iOS",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "YouTube Video Downloader in 4K, 1080p, 720p",
      "YouTube to MP3 320kbps Audio Converter",
      "YouTube Shorts Downloader",
      "Playlist Batch Downloader",
      "Zero Software Installation Required",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
