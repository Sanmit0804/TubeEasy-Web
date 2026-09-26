import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service & DMCA — TubeEasy",
  description: "Terms of Service, DMCA disclaimer, and permissible use policy for TubeEasy.",
};

export default function TermsPage() {
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
            <div className="flex items-center gap-2 text-[#38BDF8]">
              <FileText className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Legal Notice</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Terms of Service</h1>
            <p className="text-xs text-[#717B8C]">Last Updated: September 2026</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#8A94A6]">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using TubeEasy, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">2. Permissible Use & Copyright Notice</h2>
              <p>
                TubeEasy is provided strictly for personal, non-commercial use. Users are solely responsible for ensuring they have the legal right, ownership, authorization, or license to download content.
              </p>
              <p>
                You must not use this tool to download copyrighted media without permission or in violation of applicable laws and YouTube's Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">3. DMCA & Copyright Policy</h2>
              <p>
                TubeEasy does not host, store, or duplicate any video or audio files on its web servers. All media is fetched and processed on-the-fly directly from publicly accessible URLs. If you are a copyright owner and wish to block specific content, please contact us with relevant details.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">4. Disclaimer of Warranties</h2>
              <p>
                TubeEasy is provided on an "AS IS" and "AS AVAILABLE" basis without any express or implied warranties. We do not guarantee uninterrupted or error-free operation.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
