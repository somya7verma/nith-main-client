'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

interface TimetableItem {
  id: number;
  programme: string;
  department?: string;
  semester: string;
  session: string;
  updated_date: string; // ISO
  document_url?: string;
  is_active?: boolean;
}

const sampleTimetables: TimetableItem[] = [
  {
    id: 1,
    programme: 'B.Tech. (CSE)',
    department: 'Computer Science & Engineering',
    semester: 'Even Semester (2025)',
    session: '2025-26',
    updated_date: '2025-12-20',
    document_url: '/documents/academics/timetables/btech-cse-even-2025.pdf',
    is_active: true,
  },
  {
    id: 2,
    programme: 'M.Tech. (ECE)',
    department: 'Electronics & Communication Engineering',
    semester: 'Even Semester (2025)',
    session: '2025-26',
    updated_date: '2025-12-18',
    document_url: '/documents/academics/timetables/mtech-ece-even-2025.pdf',
    is_active: true,
  },
  {
    id: 3,
    programme: 'Ph.D.',
    department: 'Mechanical Engineering',
    semester: 'Ongoing',
    session: '2025-26',
    updated_date: '2025-11-10',
    document_url: '/documents/academics/timetables/phd-mech-2025.pdf',
    is_active: true,
  },
];

const TableSkeleton = () => (
  <div className="animate-pulse">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="flex items-center gap-4 px-6 py-5 border-b border-gray-100"
      >
        <div className="w-8 h-4 bg-gray-200 rounded"></div>
        <div className="flex-1 h-4 bg-gray-200 rounded"></div>
        <div className="w-24 h-4 bg-gray-200 rounded"></div>
        <div className="w-24 h-4 bg-gray-200 rounded"></div>
        <div className="w-28 h-9 bg-gray-200 rounded-lg"></div>
      </div>
    ))}
  </div>
);

const CardSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
        <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded-lg"></div>
      </div>
    ))}
  </div>
);

export default function ClassTimetablePage() {
  const [items, setItems] = useState<TimetableItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/academics/timetables');
        if (!res.ok) throw new Error('No API');
        const data = await res.json();
        setItems((data as TimetableItem[]).filter((t) => t.is_active ?? true));
      } catch (err) {
        setItems(sampleTimetables.filter((t) => t.is_active));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sorted = useMemo(() => {
    return [...items].sort(
      (a, b) =>
        new Date(b.updated_date).getTime() - new Date(a.updated_date).getTime()
    );
  }, [items]);

  const handleOpen = (url?: string) => {
    if (!url) return;
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
                className="hover:text-[#631012] transition-colors duration-200"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-400">Academics</span>
              <span>›</span>
              <span className="text-[#631012] font-medium">
                Class Timetable
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
                Class Timetable
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Official class timetables for various academic programmes and
                semesters.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Overview
                </h2>
                <p className="mt-3 text-gray-600">
                  The Class Timetable provides a consolidated schedule for
                  lectures, tutorials, and practical sessions across academic
                  programmes. It helps students and faculty plan their academic
                  commitments and ensures smooth conduct of instructional
                  activities.
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Timetable Information
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Timetables are prepared and approved by the Institute and
                    are applicable to Undergraduate (UG), Postgraduate (PG), and
                    Ph.D programmes. Timetables are subject to revision and any
                    changes will be notified through official channels.
                  </p>
                </div>
              </div>

              <aside className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                <h4 className="text-sm font-semibold text-gray-900">
                  Important
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Timetables are subject to change. Students should regularly
                  check this page and official notifications for updates.
                </p>
              </aside>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div>
                <p className="text-gray-600">
                  Showing{' '}
                  <span className="font-semibold text-[#631012]">
                    {sorted.length}
                  </span>{' '}
                  timetable(s)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Latest timetables appear at the top. Use filters to refine
                  results.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-2">
                  <input
                    type="text"
                    placeholder="Search timetables..."
                    aria-label="Search timetables"
                    className="px-3 py-2 text-sm bg-transparent outline-none w-48 md:w-64"
                  />
                  <select
                    aria-label="Filter by Programme"
                    className="text-sm px-3 py-2 bg-transparent outline-none"
                  >
                    <option>All Programmes</option>
                  </select>
                </div>
              </div>
            </motion.div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Class Timetables
                </h3>
                <p className="text-sm text-gray-500">
                  Latest timetables appear at the top.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                {loading ? (
                  <TableSkeleton />
                ) : sorted.length === 0 ? (
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
                      No Timetables Found
                    </h3>
                    <p className="text-gray-500">
                      No timetables are currently available. Please check back
                      later.
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
                            Programme / Department
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                            Semester
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-36">
                            Academic Session
                          </th>
                          <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-52">
                            Timetable Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <AnimatePresence mode="wait">
                          {sorted.map((t, idx) => (
                            <motion.tr
                              key={t.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.25, delay: idx * 0.02 }}
                              className="hover:bg-gray-50/80 transition-colors duration-200 group"
                            >
                              <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                                {idx + 1}
                              </td>
                              <td className="px-6 py-5">
                                <div className="flex items-start gap-3">
                                  <div>
                                    <div className="text-sm font-medium text-gray-900 group-hover:text-[#631012] transition-colors">
                                      {t.programme}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      {t.department}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-5 text-sm text-gray-700">
                                {t.semester}
                              </td>
                              <td className="px-6 py-5 text-sm text-gray-700">
                                {t.session}
                              </td>
                              <td className="px-6 py-5 text-sm">
                                <div className="flex items-center gap-3 justify-center">
                                  <button
                                    onClick={() => handleOpen(t.document_url)}
                                    className="text-sm px-4 py-2 bg-white border border-[#631012] text-[#631012] rounded-lg hover:bg-[#631012] hover:text-white transition-colors"
                                  >
                                    View
                                  </button>
                                  {t.document_url && (
                                    <button
                                      onClick={() =>
                                        handleDownload(
                                          t.document_url || '',
                                          t.programme
                                        )
                                      }
                                      className="text-sm px-3 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                      Download
                                    </button>
                                  )}
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

              {/* Mobile cards */}
              <div className="lg:hidden">
                {loading ? (
                  <CardSkeleton />
                ) : sorted.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    No timetables available.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sorted.map((t) => (
                      <div
                        key={t.id}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {t.programme}
                            </div>
                            <div className="text-xs text-gray-500">
                              {t.department}
                            </div>
                            <div className="text-xs text-gray-600 mt-2">
                              {t.semester} • {t.session}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <button
                              onClick={() => handleOpen(t.document_url)}
                              className="text-sm px-3 py-2 bg-white border border-[#631012] text-[#631012] rounded-lg"
                            >
                              View
                            </button>
                            {t.document_url && (
                              <button
                                onClick={() =>
                                  handleDownload(
                                    t.document_url || '',
                                    t.programme
                                  )
                                }
                                className="text-sm px-3 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg"
                              >
                                Download
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#fff7f6] border border-[#f1d0cf] rounded-lg p-4 text-sm text-gray-700">
              <strong className="text-[#631012]">Note:</strong> Timetables are
              subject to change. Any revisions will be notified through the
              Institute&apos;s official channels. For the latest information,
              always refer to the document&apos;s last updated date and official
              notifications.
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
