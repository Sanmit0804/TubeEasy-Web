"use client";

import React, { useEffect, useState } from "react";
import { AdSlotType } from "@/types";
import { adsenseConfig } from "@/config/adsense";

interface AdSlotProps {
  type: AdSlotType;
  className?: string;
}

export function AdSlot({ type, className = "" }: AdSlotProps) {
  const config = adsenseConfig.slots[type];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Push adsbygoogle if AdSense script is active on client
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (e) {
      console.debug("AdSense push error (normal before approval):", e);
    }
  }, []);

  if (!config) return null;

  // Placeholder mode for dev & before approval
  if (adsenseConfig.enablePlaceholders) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-dashed border-[#20242E] dark:border-[#20242E] bg-[#12151C]/60 dark:bg-[#12151C]/60 p-4 text-center text-xs text-[#8A94A6] transition-all hover:border-[#E11D48]/40 ${config.className} ${className}`}
        style={{ minHeight: typeof config.height === "number" ? `${config.height}px` : "90px" }}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-1.5 py-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#181C25] px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase text-[#8A94A6]">
            Advertisement
          </span>
          <p className="font-medium text-[#B4BDCE]">
            Google AdSense Space ({type})
          </p>
          <span className="text-[11px] text-[#5A6478]">
            Slot ID: {config.slotId} • {config.format.toUpperCase()}
          </span>
        </div>
      </div>
    );
  }

  // Live Google AdSense Unit
  return (
    <div className={`overflow-hidden text-center ${config.className} ${className}`}>
      <span className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-[#5A6478]">
        Advertisement
      </span>
      <ins
        className="adsbygoogle block"
        style={{
          display: "block",
          minHeight: typeof config.height === "number" ? `${config.height}px` : "90px",
        }}
        data-ad-client={adsenseConfig.clientId}
        data-ad-slot={config.slotId}
        data-ad-format={config.format}
        data-full-width-responsive={config.responsive ? "true" : "false"}
      />
    </div>
  );
}