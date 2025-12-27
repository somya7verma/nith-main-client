'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

interface ArchiveMonth {
  month: string;
  year: number;
  count: number;
  key: string;
}

const initialNewsData: NewsItem[] = [
  {
    id: 1,
    title: 'NITH Faculty Association Announces Annual Meet 2025',
    description: 'The NIT Hamirpur Faculty Association is pleased to announce the Annual Faculty Meet scheduled for March 2025. All registered Faculty are cordially invited to participate in this grand event celebrating our shared legacy.',
    image: '/news/Faculty-meet.jpg',
    date: '2025-01-15',
    category: 'Events',
    slug: 'annual-meet-2025',
  },
  {
    id: 2,
    title: 'Distinguished Faculty Award Nominations Open',
    description: 'Nominations are now open for the Distinguished Faculty Award 2025. The award recognizes outstanding contributions by NITH Faculty in their respective fields. Submit your nominations before the deadline.',
    image: '/news/award.jpg',
    date: '2025-01-12',
    category: 'Awards',
    slug: 'distinguished-Faculty-award-2025',
  },
];

const ITEMS_PER_PAGE = 10;

const NewsSkeleton = () => (
  <div className="animate-pulse space-y-6">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex gap-5 p-5 bg-white rounded-xl">
        <div className="w-32 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
        <div className="flex-1 space-y-3">
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-3 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    ))}
  </div>
);

const ArchiveSkeleton = () => (
  <div className="animate-pulse space-y-3">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="h-8 bg-gray-200 rounded"></div>
    ))}
  </div>
);

export default function FacultyNewsroom() {
  const [news, setNews] = useState<NewsItem[]>(initialNewsData);
  const [archives, setArchives] = useState<ArchiveMonth[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArchive, setSelectedArchive] = useState<string | null>(null);

  const generateArchives = (newsData: NewsItem[]): ArchiveMonth[] => {
    const archiveMap = new Map<string, ArchiveMonth>();
    newsData.forEach((item) => {
      const date = new Date(item.date);
      const month = date.toLocaleDateString('en-US', { month: 'long' });
      const year = date.getFullYear();
      const key = `${year}-${date.getMonth()}`;
      if (archiveMap.has(key)) {
        archiveMap.get(key)!.count++;
      } else {
        archiveMap.set(key, { month, year, count: 1, key });
      }
    });
    return Array.from(archiveMap.values()).sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return new Date(`${b.month} 1, ${b.year}`).getMonth() - new Date(`${a.month} 1, ${a.year}`).getMonth();
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNews(initialNewsData);
        setArchives(generateArchives(initialNewsData));
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setArchives(generateArchives(news));
  }, [news]);

  const filteredNews = useMemo(() => {
    if (!selectedArchive) return news;
    return news.filter((item) => {
      const date = new Date(item.date);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      return key === selectedArchive;
    });
  }, [news, selectedArchive]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const handleArchiveClick = (key: string | null) => {
    setSelectedArchive(key);
    setCurrentPage(1);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#800000] transition-colors duration-200">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-400">Faculty</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">Notices</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Faculty Notices</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Latest news, announcements, and updates from the NITH Faculty Notices.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Controls Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-gray-700">Total Notices: {news.length}</span>
                {selectedArchive && (
                  <>
                    <span className="text-gray-600">| Showing from:</span>
                    <span className="px-3 py-1.5 bg-[#631012] text-white rounded-lg text-sm font-medium">
                      {archives.find((a) => a.key === selectedArchive)?.month}{' '}
                      {archives.find((a) => a.key === selectedArchive)?.year}
                    </span>
                  </>
                )}
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-[70%]">
                {selectedArchive && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
                    <span className="text-gray-600">Showing news from:</span>
                    <span className="px-3 py-1.5 bg-[#631012] text-white rounded-lg text-sm font-medium">
                      {archives.find((a) => a.key === selectedArchive)?.month}{' '}
                      {archives.find((a) => a.key === selectedArchive)?.year}
                    </span>
                    <button
                      onClick={() => handleArchiveClick(null)}
                      className="text-sm text-gray-500 hover:text-[#631012] underline"
                    >
                      Clear filter
                    </button>
                  </motion.div>
                )}

                <div className="mb-6">
                  <p className="text-gray-600">
                    Showing{' '}
                    <span className="font-semibold text-[#631012]">{paginatedNews.length}</span>{' '}
                    of{' '}
                    <span className="font-semibold">{filteredNews.length}</span>{' '}
                    news items
                  </p>
                </div>

                {loading ? (
                  <NewsSkeleton />
                ) : paginatedNews.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-sm p-12 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No news available</h3>
                    <p className="text-gray-500 mb-6">There are no news items for the selected period.</p>
                    {selectedArchive && (
                      <button
                        onClick={() => handleArchiveClick(null)}
                        className="px-6 py-2.5 rounded-lg bg-[#631012] text-white font-medium hover:bg-[#7a1a1d] transition-colors"
                      >
                        View All News
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <AnimatePresence mode="wait">
                      {paginatedNews.map((item, index) => (
                        <motion.article
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group"
                        >
                          <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-48 md:w-56 flex-shrink-0">
                              <div className="relative h-48 sm:h-full w-full bg-gray-100">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#631012]/10 to-[#631012]/5"></div>
                              </div>
                            </div>

                            <div className="flex-1 p-5 sm:p-6 flex flex-col">
                              <div className="flex items-start justify-between mb-3">
                                <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                                  {item.category}
                                </span>
                              </div>

                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#631012] transition-colors line-clamp-2">
                                  <Link href={`/faculty/notices/${item.slug}`}>{item.title}</Link>
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{item.description}</p>
                              </div>

                              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  {formatDate(item.date)}
                                </div>
                                <Link
                                  href={`/faculty/notices/${item.slug}`}
                                  className="group/btn inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/5 rounded-lg hover:bg-[#631012] hover:text-white transition-all duration-300 ease-out"
                                >
                                  Read More
                                  <svg
                                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </AnimatePresence>
                  </div>
                )}

                {totalPages > 1 && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex justify-center"
                  >
                    <div className="inline-flex items-center gap-1 bg-white rounded-xl shadow-sm p-2">
                      <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          currentPage === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-[#631012]'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="hidden sm:inline">Previous</span>
                      </button>
                      <div className="flex items-center gap-1 px-2">
                        {getPageNumbers().map((page, index) =>
                          page === '...' ? (
                            <span key={index} className="px-3 py-2 text-gray-400">...</span>
                          ) : (
                            <button
                              key={index}
                              onClick={() => setCurrentPage(page as number)}
                              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                                currentPage === page
                                  ? 'bg-[#631012] text-white shadow-md'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              {page}
                            </button>
                          )
                        )}
                      </div>
                      <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          currentPage === totalPages
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-[#631012]'
                        }`}
                      >
                        <span className="hidden sm:inline">Next</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Archives Sidebar */}
              <div className="lg:w-[30%]">
                <div className="lg:sticky lg:top-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#631012]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                        Archives ({news.length} total)
                      </h3>
                    </div>
                    <div className="p-4">
                      {loading ? (
                        <ArchiveSkeleton />
                      ) : archives.length === 0 ? (
                        <p className="text-gray-500 text-sm text-center py-4">No archives available</p>
                      ) : (
                        <div className="space-y-1">
                          <button
                            onClick={() => handleArchiveClick(null)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                              selectedArchive === null
                                ? 'bg-[#631012]/10 text-[#631012]'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span className="font-medium">All News</span>
                            <span
                              className={`text-sm px-2 py-0.5 rounded ${
                                selectedArchive === null
                                  ? 'bg-[#631012] text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {news.length}
                            </span>
                          </button>
                          {archives.map((archive) => (
                            <button
                              key={archive.key}
                              onClick={() => handleArchiveClick(archive.key)}
                              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                                selectedArchive === archive.key
                                  ? 'bg-[#631012]/10 text-[#631012]'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <span className="font-medium">{archive.month} {archive.year}</span>
                              <span
                                className={`text-sm px-2 py-0.5 rounded ${
                                  selectedArchive === archive.key
                                    ? 'bg-[#631012] text-white'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {archive.count}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
