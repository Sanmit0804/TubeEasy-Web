"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Is TubeEasy completely free to use?",
    answer:
      "Yes, TubeEasy is 100% free to use. You can download unlimited YouTube videos in 4K, 1080p, 720p, and convert unlimited audio tracks to 320kbps MP3 without subscriptions, limits, or hidden fees.",
  },
  {
    question: "How do I download a YouTube video with audio in 1080p or 4K?",
    answer:
      "Simply paste the YouTube video link in the search bar above and click Download. TubeEasy automatically uses bundled high-efficiency FFmpeg stream merging to pair the high-resolution video stream with the highest-bitrate audio track, producing a standard MP4 file ready for playback.",
  },
  {
    question: "Can I convert YouTube videos to MP3 audio on mobile (iPhone / Android)?",
    answer:
      "Yes! TubeEasy works directly in Safari on iOS and Chrome on Android. Paste your YouTube link, select the 'MP3 (High 320 kbps)' or 'M4A' option, and tap Download to save the audio file directly into your mobile device's Downloads folder.",
  },
  {
    question: "Do I need to install any browser extensions or software?",
    answer:
      "No software or browser extension installation is needed for the web version. Everything runs directly in your browser. (If you prefer an offline standalone Windows desktop app, you can also download our single-file TubeEasy.exe from GitHub).",
  },
  {
    question: "What video and audio formats are supported?",
    answer:
      "TubeEasy supports MP4, MKV, and WebM video containers from 360p up to 8K (4320p), as well as audio extraction to MP3 (320 kbps and 192 kbps), Apple M4A (AAC), and Lossless WAV.",
  },
  {
    question: "Is it safe and legal to download YouTube videos?",
    answer:
      "TubeEasy is safe, clean, and free of spyware or intrusive ads. Regarding legality, you are allowed to download videos that you own, have created, are in the public domain, or have express permission/license from the copyright holder to download.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured FAQ Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="w-full border-t border-[#20242E] bg-[#0A0C0F] py-16 text-[#8A94A6]">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 px-3 py-1 text-xs font-semibold text-[#F43F5E]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[#8A94A6]">
            Everything you need to know about downloading videos and converting audio with TubeEasy.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#20242E] bg-[#15181F] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-white hover:text-[#E11D48] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#8A94A6] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#E11D48]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 pt-0 text-xs sm:text-sm leading-relaxed text-[#717B8C] border-t border-[#1C202A]">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
