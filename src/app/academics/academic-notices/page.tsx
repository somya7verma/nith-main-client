'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

type Notice = {
  id: string;
  title: string;
  date?: string;
  pdfUrl?: string;
};

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <Header31 />

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
            <span className="text-gray-400">Academics</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Academic Notices</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="relative z-10 text-center py-20 px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Academic Notices
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Institute notices related to academics (view or download PDFs)
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-full">
            <div className="w-full bg-white rounded-t-xl border border-gray-200 overflow-hidden">
              {/* Header Grid */}
              <div className="grid grid-cols-[80px_1fr_140px] gap-4 bg-gray-50 border-b border-gray-200 p-4 text-sm font-semibold text-gray-700">
                <div className="text-center text-gray-500">S.I no</div>
                <div className="uppercase tracking-wider text-xs font-bold text-[#631012]">
                  Description
                </div>
                <div className="text-center uppercase tracking-wider text-xs font-bold text-[#631012]">
                  Downloads
                </div>{' '}
                {/* Downloads */}
              </div>

              {/* Example Data Row (to show alignment) */}
              <div className="grid grid-cols-[80px_1fr_140px] gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 items-center">
                <div className="text-center font-mono text-gray-400">01</div>
                <div className="text-gray-600 text-sm">
                  Registration form for the 2025 alumni meet.
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="text-[#631012] hover:underline text-sm font-medium">
                    Pdf
                  </button>
                  <button className="text-[#631012] hover:underline text-sm font-medium">
                    Word
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
