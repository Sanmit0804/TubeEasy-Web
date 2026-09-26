import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — TubeEasy",
  description: "Privacy Policy and Google AdSense cookie disclosure for TubeEasy online video downloader.",
};

export default function PrivacyPage() {
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
            <div className="flex items-center gap-2 text-[#34D399]">
              <Shield className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Privacy & Transparency</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="text-xs text-[#717B8C]">Last Updated: September 2026</p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#8A94A6]">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">1. Introduction</h2>
              <p>
                At TubeEasy ("we", "our", or "us"), your privacy is our top priority. This Privacy Policy outlines the types of information we collect, how it is used, and the steps we take to protect your data when using the TubeEasy online media analysis and conversion service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">2. Information We Do Not Collect</h2>
              <p>
                TubeEasy is designed as a privacy-friendly service. We do not require user account registration, credit cards, or personal identifiers to download videos. We do not store or inspect your search queries or video download URLs on persistent storage.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">3. Third-Party Advertisements & Google AdSense</h2>
              <p>
                We use Google AdSense and third-party advertising vendors to serve ads when you visit our website.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#CBD5E1]">
                <li>
                  Google, as a third-party vendor, uses cookies to serve ads on TubeEasy.
                </li>
                <li>
                  Google's use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites on the Internet.
                </li>
                <li>
                  Users may opt out of personalized advertising by visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] underline hover:text-[#7DD3FC]"
                  >
                    Google Ads Settings
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] underline hover:text-[#7DD3FC]"
                  >
                    AboutAds.info
                  </a>.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">4. Log Files & Analytics</h2>
              <p>
                Like many websites, TubeEasy may collect standard server logs including IP addresses, browser user-agents, referral pages, and timestamps strictly for DDoS prevention, rate limiting, and server uptime monitoring.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">5. Cookies and Web Beacons</h2>
              <p>
                TubeEasy does not use first-party tracking cookies. However, third-party advertising networks (such as Google AdSense) may place cookies on your browser to measure advertisement effectiveness.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-white">6. Contact Information</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please reach out via our{" "}
                <Link href="/contact" className="text-[#38BDF8] underline hover:text-[#7DD3FC]">
                  Contact Page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
