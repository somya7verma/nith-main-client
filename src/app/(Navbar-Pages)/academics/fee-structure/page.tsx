'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function FeeStructurePage() {
  const feePdf =
    process?.env?.NEXT_PUBLIC_FEE_STRUCTURE_URL ||
    '/documents/academics/fee-structure.pdf';

  const handleOpen = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (url: string, title = 'Fee-Structure') => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.slice(0, 50).replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Nav />

      <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Home
            </Link>
            <span>›</span>
            <Link
              href="/academics"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Academics
            </Link>
            <span>›</span>
            <span className="text-[#631012] font-medium">Fee Structure</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fee Structure
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive details of academic fees applicable to UG, PG, PhD
              and other programmes, including payment guidelines and access to
              the official fee document.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-8"
          >
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <svg
                className="w-5 h-5 text-[#631012]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-3 0-5 2-5 4s2 4 5 4 5-2 5-4-2-4-5-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14v6"
                />
              </svg>

              <span className="font-semibold text-gray-700">
                Fee Structure Overview
              </span>
            </div>

            <div className="space-y-6 mt-4">
              <section>
                <h2 className="text-lg font-semibold mb-2">
                  Relevance & Purpose
                </h2>
                <p className="text-gray-700 max-w-3xl">
                  The Fee Structure provides a transparent summary of charges
                  payable by students enrolled in UG, PG, PhD and other
                  programmes of the Institute. It is prepared in accordance with
                  Institute regulations and approved by the competent
                  authorities.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mb-2">Key Components</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
                  <li>Tuition fees</li>
                  <li>Registration & examination fees</li>
                  <li>Hostel & mess charges</li>
                  <li>One-time admission fees</li>
                  <li>Caution money / security deposits</li>
                  <li>Other incidental fees (library, lab, medical)</li>
                </ul>
              </section>

              <section className="mt-4">
                <h3 className="text-base font-semibold mb-2">
                  Important Notes & Guidelines
                </h3>

                <div className="bg-[#f7f6f5] border-l-4 border-[#d1c9c8] p-4 rounded-lg text-sm text-gray-800">
                  <ul className="space-y-2">
                    <li>
                      <strong>Category-wise Applicability:</strong> Fees may
                      vary by category (General / OBC / SC / ST / PwD) in
                      accordance with Institute policies.
                    </li>
                    <li>
                      <strong>Semester-wise Payment:</strong> Fees are generally
                      payable per semester as per the academic calendar.
                    </li>
                    <li>
                      <strong>Refund Rules:</strong> Refunds are processed as
                      per the Institute refund policy and applicable
                      regulations.
                    </li>
                    <li>
                      <strong>Mode of Payment:</strong> Payments should be made
                      via modes notified by the Institute (online gateway, bank
                      transfer, etc.).
                    </li>
                    <li>
                      <strong>Revision of Fees:</strong> Fees are subject to
                      revision by Institute authorities; the official PDF is
                      authoritative.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </motion.div>

          <div className="text-center py-8">
            <p className="text-gray-700 mb-6">
              For complete details, download the official fee structure
              document.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handleOpen(feePdf)}
                className="px-6 md:px-8 py-3 bg-[#631012] text-white font-semibold rounded-lg hover:bg-[#4d0f10] focus:outline-none focus:ring-4 focus:ring-[#631012]/30 transition-colors"
                aria-label="View Fee Structure PDF"
                title="View Fee Structure (PDF)"
              >
                View Fee Structure (PDF)
              </button>

              <button
                onClick={() => handleDownload(feePdf, 'NITH-Fee-Structure')}
                className="px-6 md:px-8 py-3 bg-white border border-[#631012] text-[#631012] font-semibold rounded-lg hover:bg-[#631012] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#631012]/20 transition-colors"
                aria-label="Download Fee Structure PDF"
                title="Download Fee Structure (PDF)"
              >
                Download Fee Structure (PDF)
              </button>
            </div>

            <p className="text-gray-500 mt-3 text-xs">
              If the link does not work, please contact the Office of Academic
              Affairs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
