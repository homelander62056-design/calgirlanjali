"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SecurityClient() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent dark:from-rose-400 dark:to-pink-400">
              SECURITY &amp; SCAM PREVENTION
            </h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300">
              Updated: August 2026
            </span>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
            Important guidelines on recognizing fraudulent behavior, securing your interactions, and reporting scams.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 leading-relaxed text-zinc-700 dark:text-zinc-300">

          {/* Section: Zero Pre-payment Policy */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <span className="text-xl">⚠️</span>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Zero Pre-payment &amp; Advance Deposit Policy
              </h2>
            </div>
            <p>
              We prioritize transparency and client safety above all. Please be aware that legitimate companions and concierge representatives will <strong>never ask for advance payments</strong>, security deposits, registration fees, or gift cards prior to meeting in person.
            </p>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl p-4 text-sm text-rose-900 dark:text-rose-200">
              <strong>Crucial Rule:</strong> Never send money through UPI, crypto, bank transfer, or gift cards in advance. All settlements should take place directly and safely in person.
            </div>
          </section>

          {/* Section: Common Scam Red Flags */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-rose-600 dark:border-rose-400 pl-3">
              Common Red Flags &amp; Scam Tactics
            </h2>
            <p>Stay vigilant against common scam schemes in the industry, which include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Fake Hotel / Room Booking Fees:</strong> Fraudsters asking you to pay for hotel booking links or room advance fees before meeting.
              </li>
              <li>
                <strong>Fake Travel / Taxi Charges:</strong> Demanding upfront cab or travel allowances before departure.
              </li>
              <li>
                <strong>Impersonation &amp; Cloned Accounts:</strong> Third parties claiming to represent our network using altered phone numbers or unverified messaging profiles.
              </li>
              <li>
                <strong>Pressure or Urgency:</strong> Demanding instant payment under false pretexts of booking slots being cancelled.
              </li>
            </ul>
          </section>

          {/* Section: How to Report a Scam */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-rose-600 dark:border-rose-400 pl-3">
              How to Report Suspicious Activity
            </h2>
            <p>
              If you suspect that someone is misusing our platform or attempting to commit fraud, please report it to our team immediately with relevant screenshots, phone numbers, or conversation logs.
            </p>
          </section>

          {/* Reporting Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Email Report */}
            <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">Email Report</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Send details, proof, and phone numbers to our dedicated team.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg flex items-center justify-between">
                <a
                  href="mailto:priyaasingh569@gmail.com"
                  className="text-sm font-medium text-rose-600 dark:text-rose-400 hover:underline truncate"
                >
                  priyaasingh569@gmail.com
                </a>
                <button
                  onClick={() => handleCopy("priyaasingh569@gmail.com")}
                  className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors cursor-pointer"
                >
                  {copied === "priyaasingh569@gmail.com" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Direct Support */}
            <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">Direct Inquiries</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Contact our concierge directly for verification assistance.
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href="/contact"
                  className="w-full text-center py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  Visit Contact Page
                </Link>
              </div>
            </div>
          </div>

          {/* Guidelines Box */}
          <div className="p-4 bg-zinc-100 dark:bg-zinc-800/60 rounded-xl space-y-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              <strong>Disclaimer:</strong> Always verify that you are communicating directly via the official numbers and verified links on our domain. We are not responsible for transactions conducted with unverified third parties outside our platform.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
