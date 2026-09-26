export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { isValidYouTubeUrl, cleanYouTubeUrl } from "@/lib/urlValidator";
import { extractVideoInfo } from "@/lib/ytdlp";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, error: "Please provide a valid YouTube video or playlist URL." },
        { status: 400 }
      );
    }

    if (!isValidYouTubeUrl(url)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid YouTube URL. Please enter a valid link (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...)",
        },
        { status: 400 }
      );
    }

    const cleanedUrl = cleanYouTubeUrl(url);
    const videoInfo = await extractVideoInfo(cleanedUrl);

    return NextResponse.json({ success: true, data: videoInfo });
  } catch (error: any) {
    console.error("API Analyze Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to analyze video. Please verify the URL is public and try again.",
      },
      { status: 500 }
    );
  }
}