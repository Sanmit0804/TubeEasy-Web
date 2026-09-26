import { AdSlotType, AdSlotConfig } from "@/types";

export const adsenseConfig = {
  // Replace with your actual Google AdSense publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
  // or set NEXT_PUBLIC_ADSENSE_PUB_ID in your .env.local file
  clientId: process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || "ca-pub-0000000000000000",
  
  // Set to true to show mock preview placeholders in local development
  // or when publisher ID is not yet approved
  enablePlaceholders: process.env.NODE_ENV === "development" || !process.env.NEXT_PUBLIC_ADSENSE_PUB_ID,
  
  // Slot configurations optimized for highest CTR & Google AdSense compliance
  slots: {
    "top-leaderboard": {
      slotId: process.env.NEXT_PUBLIC_AD_SLOT_TOP || "1111111111",
      format: "horizontal",
      responsive: true,
      width: "100%",
      height: 90,
      className: "my-4 max-w-[728px] mx-auto",
    },
    "post-analysis": {
      slotId: process.env.NEXT_PUBLIC_AD_SLOT_POST_ANALYSIS || "2222222222",
      format: "rectangle",
      responsive: true,
      width: "100%",
      height: 250,
      className: "my-6 max-w-[336px] mx-auto sm:max-w-[728px]",
    },
    "in-content-banner": {
      slotId: process.env.NEXT_PUBLIC_AD_SLOT_IN_CONTENT || "3333333333",
      format: "horizontal",
      responsive: true,
      width: "100%",
      height: 90,
      className: "my-10 max-w-[728px] mx-auto",
    },
    "sidebar-sticky": {
      slotId: process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR || "4444444444",
      format: "vertical",
      responsive: true,
      width: 300,
      height: 600,
      className: "hidden xl:block sticky top-24",
    },
    "bottom-banner": {
      slotId: process.env.NEXT_PUBLIC_AD_SLOT_BOTTOM || "5555555555",
      format: "horizontal",
      responsive: true,
      width: "100%",
      height: 90,
      className: "my-8 max-w-[728px] mx-auto",
    },
  } as Record<AdSlotType, AdSlotConfig>,
};