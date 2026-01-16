'use client';

import React from 'react';

// Arrow Icon SVG Component
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-[#f59e0b] mt-0.5 flex-shrink-0"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Announcements() {
  return (
    <div className="w-full bg-gray-50 py-12 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* The Box Container */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Box Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white">
            <h2 className="text-2xl font-bold text-[#171717]">Announcements</h2>
            <div className="flex gap-4">
              <button className="text-xs font-bold text-gray-500 uppercase tracking-wide hover:text-[#631012] transition-colors">
                Pause Scroll
              </button>
              <button className="text-xs font-bold text-[#631012] uppercase tracking-wide hover:underline">
                View All
              </button>
            </div>
          </div>

          {/* 3-Column Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* COLUMN 1: General Announcements (Scrollable) */}
            <div className="p-2">
              {/* This div controls the scroll height */}
              <div className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 p-4 space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors font-medium">
                    <span className="text-xs text-red-600 font-bold bg-red-50 border border-red-100 px-1.5 py-0.5 rounded mb-1 inline-block">
                      NEW
                    </span>
                    <br />
                    e-Postgraduate Diploma in Interaction Design (ePGD IxD) IDC
                    School of Design
                  </p>
                </div>

                <div className="group cursor-pointer border-t border-dashed border-gray-100 pt-4">
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    Applications are invited for Undergraduate Common Entrance
                    Exam for Design (UCEED) for admission to B.Des at several
                    IITs.
                  </p>
                </div>

                <div className="group cursor-pointer border-t border-dashed border-gray-100 pt-4">
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    Design Schools and result sharing Institutes admission
                    updates regarding 2026 session.
                  </p>
                </div>

                {/* Extra item to demonstrate scrolling */}
                <div className="group cursor-pointer border-t border-dashed border-gray-100 pt-4">
                  <p className="text-gray-400 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    (Archived) Previous semester examination results have been
                    published on the portal.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Exam Updates (Scrollable) */}
            <div className="p-2">
              <div className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 p-4 space-y-6">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <ArrowIcon />
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    Attn. JAM 2026 Registered Candidates: Correction window
                    opens tomorrow.
                  </p>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer border-t border-dashed border-gray-100 pt-4">
                  <ArrowIcon />
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    Applications are invited for Common Entrance Exam for Design
                    (CEED) for admission to M.Des & PhD Programmes.
                  </p>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer border-t border-dashed border-gray-100 pt-4">
                  <ArrowIcon />
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    Admit cards for Winter Semester examinations are now
                    available for download.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 3: Deadlines & Events (Scrollable) */}
            <div className="p-2">
              <div className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 p-4 space-y-6">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <ArrowIcon />
                  <p className="text-[#631012] text-sm leading-relaxed uppercase font-bold hover:underline transition-colors">
                    The last date for closing registration of JAM 2026
                    applications has been extended till Oct 20, 2025.
                  </p>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer border-t border-dashed border-gray-100 pt-4">
                  <ArrowIcon />
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    Chief Technology Officer Programme: Batch 5 Registration is
                    now open.
                  </p>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer border-t border-dashed border-gray-100 pt-4">
                  <ArrowIcon />
                  <p className="text-gray-800 text-sm leading-relaxed hover:text-[#631012] transition-colors">
                    Convocation Ceremony 2025: Live stream link available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for the custom scrollbar */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #d1d5db; /* gray-300 */
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af; /* gray-400 */
        }
      `}</style>
    </div>
  );
}
