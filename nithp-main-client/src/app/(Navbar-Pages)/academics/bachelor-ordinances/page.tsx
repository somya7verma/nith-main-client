'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

interface OrdinanceItem {
  id: number;
  title: string;
  effectiveDate: string;
  documentUrl: string;
  fileType: 'pdf' | 'doc' | 'docx';
}

const sampleOrdinances: OrdinanceItem[] = [
  {
    id: 1,
    title: "Bachelor's Ordinances",
    effectiveDate: '2024-07-01',
    documentUrl: '/documents/ordinances/bachelors-ordinances-2024.pdf',
    fileType: 'pdf',
  },
  {
    id: 2,
    title: "Bachelor's Ordinances",
    effectiveDate: '2023-07-01',
    documentUrl: '/documents/ordinances/bachelors-ordinances-2023.pdf',
    fileType: 'pdf',
  },
  {
    id: 3,
    title: "Bachelor's Ordinances",
    effectiveDate: '2019-07-01',
    documentUrl: '/documents/ordinances/bachelors-ordinances-2019.pdf',
    fileType: 'pdf',
  },
];

const TableSkeleton = () => (
  <div className="animate-pulse">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="flex items-center gap-4 px-6 py-5 border-b border-gray-100"
      >
        <div className="w-12 h-5 bg-gray-200 rounded"></div>
        <div className="flex-1 h-5 bg-gray-200 rounded"></div>
        <div className="w-28 h-5 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          <div className="w-20 h-9 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    ))}
  </div>
);

const CardSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
        <div className="h-4 bg-gray-200 rounded w-16 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
        <div className="flex gap-2">
          <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
        </div>
      </div>
    ))}
  </div>
);

export default function BachelorOrdinances() {
  const [ordinances, setOrdinances] = useState<OrdinanceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 600));

        const sorted = [...sampleOrdinances].sort(
          (a, b) =>
            new Date(b.effectiveDate).getTime() -
            new Date(a.effectiveDate).getTime()
        );
        setOrdinances(sorted);
      } catch (err) {
        console.error('Error fetching ordinances:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatYear = (dateStr: string) => {
    const d = new Date(dateStr);
    return `w.e.f. ${d.getFullYear()}`;
  };

  const handleRead = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (url: string, title: string) => {
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
      <div className="min-h-screen bg-gray-50">
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
              <Link href="/academics" className="hover:text-[#800000]">
                <span className="text-gray-600">Academics</span>
              </Link>
              <span>›</span>
              <span className="text-[#631012] font-medium">
                Bachelor Ordinances
              </span>
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
                Bachelor Ordinances
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Academic rules and regulations governing undergraduate
                programmes at the Institute.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              <div className="lg:col-span-2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 md:p-8"
                >
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    About Bachelor Ordinances
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bachelor Ordinances define the rules, regulations, and
                    academic framework governing undergraduate programmes at NIT
                    Hamirpur. These ordinances outline policies related to
                    admission, registration, curriculum structure, assessment,
                    evaluation, progression, and award of degrees. They ensure
                    uniformity, transparency, and academic discipline across all
                    bachelor-level programmes. Ordinances are approved by the
                    Institute&apos;s statutory academic bodies and apply to
                    B.Tech., B.Arch., and Dual Degree programmes as specified.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How Bachelor Ordinances Work
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                    <li>
                      Ordinaries are applicable from a specified academic
                      session and are effective from the date indicated in the
                      ordinance.
                    </li>
                    <li>
                      They are implemented after approval by the competent
                      academic authorities and governing bodies.
                    </li>
                    <li>
                      Ordinances are updated periodically to align with national
                      policies and academic reforms.
                    </li>
                    <li>
                      Students are governed by the ordinance applicable to their
                      year of admission unless otherwise specified.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  {loading ? (
                    <TableSkeleton />
                  ) : ordinances.length === 0 ? (
                    <div className="p-12 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No Ordinances Available
                      </h3>
                      <p className="text-gray-500">
                        There are no ordinances available at the moment.
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">
                              Sl. No.
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Title
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-36">
                              Effective From
                            </th>
                            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                              Document Link
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <AnimatePresence mode="wait">
                            {ordinances.map((o, idx) => (
                              <motion.tr
                                key={o.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{
                                  duration: 0.25,
                                  delay: idx * 0.04,
                                }}
                                className="hover:bg-gray-50/80 transition-colors duration-200 group"
                              >
                                <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                                  {idx + 1}
                                </td>
                                <td className="px-6 py-5">
                                  <div className="flex items-center justify-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#631012]/10 flex items-center justify-center">
                                      <svg
                                        className="w-5 h-5 text-[#631012]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={1.5}
                                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                      </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 group-hover:text-[#631012] transition-colors leading-relaxed">
                                      {o.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-5 text-sm text-gray-600">
                                  {formatYear(o.effectiveDate)}
                                </td>
                                <td className="px-6 py-5 text-center">
                                  <div className="flex items-center justify-center gap-2">
                                    <button
                                      onClick={() => handleRead(o.documentUrl)}
                                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200"
                                      aria-label={`Read ${o.title}`}
                                    >
                                      <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                      </svg>
                                      View / Download
                                    </button>
                                  </div>
                                </td>
                              </motion.tr>
                            ))}
                          </AnimatePresence>
                        </tbody>
                      </table>
                    </div>
                  )}
                </motion.div>
              </div>

              <aside className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6"
                >
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Important Notes
                  </h4>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <div className="bg-[#fff7ed] border border-[#ffedd5] rounded-lg p-3 text-sm text-gray-700">
                      <p className="mb-1">
                        Students must follow the ordinance applicable to their
                        admission year.
                      </p>
                      <p className="mb-1">
                        Amendments, if any, will be notified separately.
                      </p>
                      <p className="mb-0">
                        Ordinances are subject to revision as per Institute
                        norms.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </motion.div>

            {/* Mobile list/cards */}
            <div className="lg:hidden">
              {loading ? (
                <CardSkeleton />
              ) : ordinances.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Ordinances Available
                  </h3>
                  <p className="text-gray-500 text-sm">
                    There are no ordinances available at the moment.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    {ordinances.map((o, idx) => (
                      <motion.div
                        key={o.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, delay: idx * 0.04 }}
                        className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center justify-start gap-3 mb-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#631012]/10 text-[#631012] text-sm font-semibold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 leading-relaxed">
                              {o.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                              {formatYear(o.effectiveDate)}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => handleRead(o.documentUrl)}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200"
                            aria-label={`Read ${o.title}`}
                          >
                            View / Download
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
