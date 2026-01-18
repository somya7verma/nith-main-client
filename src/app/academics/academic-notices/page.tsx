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

function NoticesTable() {
  const [notices] = useState<Notice[]>([
    {
      id: '1',
      title: 'Academic Calendar 2026',
      date: '2026-01-01',
      pdfUrl: '/pdfs/calendar-2026.pdf',
    },
    {
      id: '2',
      title: 'Examination Schedule - Jan 2026',
      date: '2026-01-10',
      pdfUrl: '/pdfs/exam-schedule-jan-2026.pdf',
    },
    {
      id: '3',
      title: 'Convocation Notice',
      date: '2025-12-15',
      pdfUrl: '/pdfs/convocation-2025.pdf',
    },
  ]);

  return (
    <>
      {/* Desktop/tablet: table layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left table-fixed border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <colgroup>
            <col style={{ width: '6%' }} />
            <col style={{ width: '56%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '26%' }} />
          </colgroup>
          <thead>
            <tr className="text-sm text-gray-500 bg-gray-50 border-b">
              <th className="py-3 px-4">Sl.</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n, i) => (
              <tr
                key={n.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="py-3 px-4 align-top text-sm text-gray-700">
                  {i + 1}
                </td>
                <td className="py-3 px-4 align-top">
                  <a
                    href={n.pdfUrl ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 font-medium hover:text-[#800000] transition-colors"
                    aria-label={`Open ${n.title}`}
                  >
                    {n.title}
                  </a>
                </td>
                <td className="py-3 px-4 align-top text-sm text-gray-600">
                  {n.date ?? '-'}
                </td>
                <td className="py-3 px-4 align-top">
                  <div className="flex items-center gap-3">
                    <a
                      href={n.pdfUrl ?? '#'}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm ${n.pdfUrl ? 'bg-white text-[#800000] border-[#800000]' : 'opacity-50 pointer-events-none'}`}
                      aria-label={`View ${n.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View
                    </a>

                    <a
                      href={n.pdfUrl ?? '#'}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[#800000] text-white rounded-full text-sm hover:bg-[#6a0000] transition-colors ${n.pdfUrl ? '' : 'opacity-50 pointer-events-none'}`}
                      aria-label={`Download ${n.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v12m0 0l4-4m-4 4l-4-4"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21H3"
                        />
                      </svg>
                      Download
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-4">
        {notices.map((n, i) => (
          <div key={n.id} className="bg-white shadow-sm rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <div className="text-sm text-gray-500">{`#${i + 1}`}</div>
                <a
                  href={n.pdfUrl ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-base font-medium text-gray-900 hover:text-[#800000]"
                >
                  {n.title}
                </a>
                <div className="text-sm text-gray-600 mt-1">
                  {n.date ?? '-'}
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col items-end gap-2">
                <a
                  href={n.pdfUrl ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm ${n.pdfUrl ? 'bg-white text-[#800000] border-[#800000]' : 'opacity-50 pointer-events-none'}`}
                  aria-label={`View ${n.title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </a>

                <a
                  href={n.pdfUrl ?? '#'}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[#800000] text-white rounded-full text-sm hover:bg-[#6a0000] transition-colors ${n.pdfUrl ? '' : 'opacity-50 pointer-events-none'}`}
                  aria-label={`Download ${n.title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v12m0 0l4-4m-4 4l-4-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

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

      {/* Notices section */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Academic Notices
            </h2>
          </div>

          <NoticesTable />
        </div>
      </section>

      <Footer />
    </div>
  );
}
