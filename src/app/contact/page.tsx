import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact & Support — TubeEasy",
  description: "Get in touch with the TubeEasy team for support, feedback, and DMCA queries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1115] text-[#CBD5E1]">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8A94A6] hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Downloader</span>
        </Link>

        <div className="space-y-8 rounded-2xl border border-[#20242E] bg-[#15181F] p-6 sm:p-10">
          <div className="space-y-2 border-b border-[#20242E] pb-6">
            <div className="flex items-center gap-2 text-[#E11D48]">
              <MessageSquare className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Get in Touch</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Contact & Support</h1>
            <p className="text-xs text-[#717B8C]">We are here to help and answer any questions.</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#8A94A6]">
            <p>
              Have a suggestion, question, bug report, or DMCA inquiry? You can reach our team directly through the following channels:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#20242E] bg-[#0F1115] p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#E11D48]">
                  <Mail className="h-4 w-4" />
                  <span className="font-semibold text-white text-xs uppercase">Email Support</span>
                </div>
                <p className="text-xs text-[#8A94A6]">
                  support@tubeeasy.com
                </p>
                <p className="text-[11px] text-[#5A6478]">
                  Response time: 24 - 48 hours
                </p>
              </div>

              <div className="rounded-xl border border-[#20242E] bg-[#0F1115] p-5 space-y-2">
                <div className="flex items-center gap-2 text-[#38BDF8]">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-semibold text-white text-xs uppercase">GitHub Issues</span>
                </div>
                <p className="text-xs text-[#8A94A6]">
                  Report bugs and feature requests on GitHub
                </p>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] text-[#38BDF8] underline hover:text-[#7DD3FC]"
                >
                  Visit TubeEasy Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
