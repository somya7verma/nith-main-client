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

const ITEMS_PER_PAGE = 10;

//Api request herre
const sampleNotices: NoticeItem[] = [
  {
    id: 1,
    title: 'End Semester Examination Schedule — Even Semester 2025',
    description:
      'Detailed examination timetable for undergraduate and postgraduate programs for Even Semester 2025.',
    category: 'Examination',
    published_date: '2025-12-18',
    attachment_url: '/documents/academics/exam-schedule-2025.pdf',
    is_active: true,
  },
  {
    id: 2,
    title: 'Academic Calendar Update — Academic Year 2025-26',
    description:
      'Revised academic calendar including registration deadlines and holiday list.',
    category: 'Calendar',
    published_date: '2025-11-30',
    attachment_url: '/documents/academics/academic-calendar-2025-26.pdf',
    is_active: true,
  },
  {
    id: 3,
    title: 'Registration Instructions for Semester Enrollment',
    description: 'Step by step guide for online registration and fee payment.',
    category: 'Registration',
    published_date: '2025-10-12',
    attachment_url: '/documents/academics/registration-guide.pdf',
    is_active: true,
  },
  {
    id: 4,
    title: 'Result Declaration — PG/UG Even Semester',
    description:
      'Results published for all programs. Check via student portal.',
    category: 'Result',
    published_date: '2025-09-20',
    attachment_url: '/documents/academics/results-even-2025.pdf',
    is_active: true,
  },
  {
    id: 5,
    title: 'Circular on Curriculum Revision Committee Meeting',
    description:
      'Notice regarding the upcoming meeting to discuss course curriculum updates.',
    category: 'Circular',
    published_date: '2025-06-05',
    attachment_url: '/documents/academics/curriculum-meeting.pdf',
    is_active: false,
  },
  {
    id: 6,
    title: 'Miscellaneous Academic Policy Update',
    description:
      'A brief administrative update relevant to academic stakeholders.',
    category: 'Others',
    published_date: '2025-05-01',
    attachment_url: '/documents/academics/policy-update-2025.pdf',
    is_active: true,
  },
];

const TableSkeleton = () => (
  <div className="animate-pulse">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="flex items-center gap-4 px-6 py-5 border-b border-gray-100"
      >
        <div className="w-12 h-5 bg-gray-200 rounded"></div>
        <div className="flex-1 h-5 bg-gray-200 rounded"></div>
        <div className="w-28 h-5 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          <div className="w-20 h-9 bg-gray-200 rounded-lg"></div>
          <div className="w-24 h-9 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    ))}
  </div>
);

const CardSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
        <div className="h-4 bg-gray-200 rounded w-16 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
        <div className="flex gap-2">
          <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
          <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
        </div>
      </div>
    ))}
  </div>
);

export default function AcademicsNoticesPage() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/academics/notices');
        if (!res.ok) throw new Error('No API');
        const data = await res.json();
        setNotices((data as NoticeItem[]).filter((n) => n.is_active ?? true));
      } catch (err) {
        const active = sampleNotices.filter((n) => n.is_active);
        setNotices(active);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>(notices.map((n) => n.category || 'Others'));
    if (!set.has('Others')) set.add('Others');
    return ['All', ...Array.from(set)];
  }, [notices]);

  const filtered = useMemo(() => {
    let arr = [...notices];
    if (selectedCategory !== 'All') {
      arr = arr.filter((n) => n.category === selectedCategory);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          (n.description || '').toLowerCase().includes(q)
      );
    }

    arr.sort((a, b) => {
      const ta = new Date(a.published_date).getTime();
      const tb = new Date(b.published_date).getTime();
      return sortOrder === 'latest' ? tb - ta : ta - tb;
    });

    return arr;
  }, [notices, selectedCategory, query, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, query, sortOrder]);

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
                Academics Notices
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
                Academics Notices
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Official academic notices, circulars, and updates issued by the
                Institute.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div>
                <p className="text-gray-600">
                  Showing{' '}
                  <span className="font-semibold text-[#631012]">
                    {filtered.length}
                  </span>{' '}
                  notice(s)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Latest notices appear at the top. Use filters to refine the
                  list.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search notices..."
                    aria-label="Search notices"
                    className="px-3 py-2 text-sm bg-transparent outline-none w-48 md:w-64"
                  />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Filter by category"
                    className="text-sm px-3 py-2 bg-transparent outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <select
                    value={sortOrder}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setSortOrder(e.target.value as 'latest' | 'oldest')
                    }
                    aria-label="Sort by date"
                    className="text-sm px-3 py-2 bg-transparent outline-none"
                  >
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              {loading ? (
                <TableSkeleton />
              ) : filtered.length === 0 ? (
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
                    No Notices Found
                  </h3>
                  <p className="text-gray-500">
                    Try different filters or search keywords to find notices.
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
                          Notice Title
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                          Category
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
                        {paginated.map((n, index) => (
                          <motion.tr
                            key={n.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            className="hover:bg-gray-50/80 transition-colors duration-200 group"
                          >
                            <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                              {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
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
                                {n.category || 'Others'}
                              </span>
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg
                                  className="w-4 h-4 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {formatDate(n.published_date)}
                              </div>
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => handleOpen(n.attachment_url)}
                                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                                  aria-label={`Open ${n.title}`}
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
                                  View
                                </button>
                                {n.attachment_url && (
                                  <button
                                    onClick={() =>
                                      handleDownload(n.attachment_url!, n.title)
                                    }
                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                                    aria-label={`Download ${n.title}`}
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
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                      />
                                    </svg>
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

            <div className="lg:hidden">
              {loading ? (
                <CardSkeleton />
              ) : filtered.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-sm p-8 text-center"
                >
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
                    No Notices Found
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Try different filters or search keywords.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    {paginated.map((n, index) => (
                      <motion.div
                        key={n.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center justify-start gap-3 mb-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#631012]/10 text-[#631012] text-sm font-semibold flex items-center justify-center">
                            {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 leading-relaxed">
                              {n.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                              {n.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 ml-11">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Published: {formatDate(n.published_date)}</span>
                        </div>

                        <div className="flex gap-3 ml-11">
                          <button
                            onClick={() => handleOpen(n.attachment_url)}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                            aria-label={`Open ${n.title}`}
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
                            View
                          </button>
                          {n.attachment_url && (
                            <button
                              onClick={() =>
                                handleDownload(n.attachment_url!, n.title)
                              }
                              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                              aria-label={`Download ${n.title}`}
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
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
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

            {!loading && filtered.length > ITEMS_PER_PAGE && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex justify-center"
              >
                <div className="inline-flex items-center gap-1 bg-white rounded-xl shadow-sm p-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentPage === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#631012]'
                    }`}
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex items-center gap-1 px-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                          currentPage === i + 1
                            ? 'bg-[#631012] text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentPage === totalPages
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#631012]'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#631012]/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#631012]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About Academics Notices
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This section provides authoritative academic notices issued
                    by NIT Hamirpur — including examination schedules,
                    registration guidelines, academic calendar updates, results,
                    circulars, and related academic communications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
