'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

interface NoticeItem {
  id: number;
  title: string;
  description?: string;
  category: string;
  published_date: string; // ISO string
  attachment_url?: string;
  is_active: boolean;
}

const sampleNotices: NoticeItem[] = [
  {
    id: 101,
    title: 'Registration Instructions for Semester Enrollment — 2025-26',
    description:
      'Step-by-step guidance for online registration, course enrollment and fee payment.',
    category: 'Registration',
    published_date: '2025-10-12',
    attachment_url: '/documents/academics/registration-guide-2025-26.pdf',
    is_active: true,
  },
  {
    id: 102,
    title: 'Late Registration Policy — Notice',
    description: 'Rules and penalties applicable for late registration.',
    category: 'Registration',
    published_date: '2025-11-20',
    attachment_url: '/documents/academics/late-registration-policy.pdf',
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
        <div className="w-8 h-5 bg-gray-200 rounded"></div>
        <div className="flex-1 h-5 bg-gray-200 rounded"></div>
        <div className="w-28 h-5 bg-gray-200 rounded"></div>
        <div className="w-36 h-9 bg-gray-200 rounded-lg"></div>
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
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded-lg"></div>
      </div>
    ))}
  </div>
);

export default function RegistrationPage() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/academics/notices');
        if (!res.ok) throw new Error('No API');
        const data = await res.json();
        setNotices((data as NoticeItem[]).filter((n) => n.is_active ?? true));
      } catch (err) {
        setNotices(sampleNotices.filter((n) => n.is_active));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const registrationNotices = useMemo(() => {
    return notices
      .filter(
        (n) =>
          (n.category || '').toLowerCase() === 'registration' ||
          (n.title || '').toLowerCase().includes('registration')
      )
      .sort(
        (a, b) =>
          new Date(b.published_date).getTime() -
          new Date(a.published_date).getTime()
      );
  }, [notices]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

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
              Registration 2025–26
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
              Registration 2025–26
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Information and official notices related to student registration
              for the academic session 2025–26.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Registration procedures are conducted as per Institute rules and
              academic calendar. Separate registration processes exist for
              different programmes. Students must follow official notices for
              timelines and instructions.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-md bg-[#631012] flex items-center justify-center text-white shadow">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6M9 16h6M9 8h6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-gray-800 uppercase tracking-wider">
                  Programmes Under Registration – 2025–26
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Detailed registration instructions for each programme are
                  issued through official notices.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'B.Tech / B.Arch / Dual Degree (UG Programmes)',
                      desc: 'Undergraduate programmes following institute registration rules.',
                    },
                    {
                      title: 'M.Tech / M.Arch',
                      desc: 'Postgraduate programmes with separate registration timelines.',
                    },
                    { title: 'M.Sc', desc: 'Science postgraduate programmes.' },
                    {
                      title: 'MBA',
                      desc: 'Management programme registration instructions.',
                    },
                    {
                      title: 'Ph.D',
                      desc: 'Research scholars registration and coursework requirements.',
                    },
                  ].map((p) => (
                    <div
                      key={p.title}
                      className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm"
                    >
                      <h4 className="text-sm font-semibold text-gray-900">
                        {p.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                      <p className="text-xs text-gray-500 mt-3">
                        Detailed instructions issued through notices.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="registration-notices"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Important Registration Notices
                </h3>
                <p className="text-sm text-gray-500">
                  Latest registration notices appear at the top. Use the
                  Academics Notices page for broader search and filters.
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <Link
                  href="/academics/academic-notices"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors"
                >
                  View all notices
                </Link>
              </div>
            </div>

            <div className="mt-6">
              {/* Desktop table */}
              <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
                {loading ? (
                  <TableSkeleton />
                ) : registrationNotices.length === 0 ? (
                  <div className="p-12 text-center text-gray-500">
                    No registration notices found. Please check back for
                    updates.
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
                            Notice Title
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                            Programme(s)
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                            Date
                          </th>
                          <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-52">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <AnimatePresence mode="wait">
                          {registrationNotices.map((n, index) => (
                            <motion.tr
                              key={n.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{
                                duration: 0.25,
                                delay: index * 0.02,
                              }}
                              className="hover:bg-gray-50/80 transition-colors duration-200 group"
                            >
                              <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                                {index + 1}
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
                                  <div>
                                    <span className="text-sm font-medium text-gray-900 group-hover:text-[#631012] transition-colors leading-relaxed">
                                      {n.title}
                                    </span>
                                    <div className="text-xs text-gray-500 mt-1 max-w-xl">
                                      {n.description}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-5">
                                <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                                  {n.category || 'Registration'}
                                </span>
                              </td>
                              <td className="px-6 py-5">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  {formatDate(n.published_date)}
                                </div>
                              </td>
                              <td className="px-6 py-5">
                                <div className="flex items-center justify-center gap-2">
                                  <button
                                    onClick={() => handleOpen(n.attachment_url)}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                                  >
                                    View
                                  </button>
                                  {n.attachment_url && (
                                    <button
                                      onClick={() =>
                                        handleDownload(
                                          n.attachment_url!,
                                          n.title
                                        )
                                      }
                                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200"
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
              </div>

              {/* Mobile cards */}
              <div className="lg:hidden">
                {loading ? (
                  <CardSkeleton />
                ) : registrationNotices.length === 0 ? (
                  <div className="bg-white rounded-2xl shadow-sm p-8 text-center text-gray-500">
                    No registration notices found. Please check back for
                    updates.
                  </div>
                ) : (
                  <div className="space-y-4">
                    <AnimatePresence mode="wait">
                      {registrationNotices.map((n, index) => (
                        <motion.div
                          key={n.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -16 }}
                          transition={{ duration: 0.25, delay: index * 0.03 }}
                          className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-sm font-semibold text-gray-900">
                                {n.title}
                              </h3>
                              <p className="text-xs text-gray-500 mt-1">
                                {n.description}
                              </p>
                              <p className="text-xs text-gray-500 mt-2">
                                Published: {formatDate(n.published_date)}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3 mt-4">
                            <button
                              onClick={() => handleOpen(n.attachment_url)}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors"
                            >
                              View
                            </button>
                            {n.attachment_url && (
                              <button
                                onClick={() =>
                                  handleDownload(n.attachment_url!, n.title)
                                }
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors"
                              >
                                Download
                              </button>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <div className="rounded-lg border border-[#631012]/10 bg-[#fffbf9] p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Important Instructions
                  </h4>
                  <ul className="text-sm text-gray-700 list-disc ml-5 space-y-2">
                    <li>
                      Students must regularly check this page for updates.
                    </li>
                    <li>
                      Registration timelines are strictly as per Institute
                      schedule.
                    </li>
                    <li>
                      Failure to comply may lead to cancellation of
                      registration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
}
