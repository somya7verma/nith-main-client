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
  slug: string;
  downloadUrl?: string;
}

const initialNewsData: NewsItem[] = [
  {
    id: 1,
    title: 'NITH CPDA Association Announces Annual Meet 2025',
    description: 'The NIT Hamirpur CPDA Association is pleased to announce the Annual CPDA Meet scheduled for March 2025. All registered CPDA are cordially invited to participate in this grand event celebrating our shared legacy.',
    image: '/news/CPDA-meet.jpg',
    date: '2025-01-15',
    slug: 'annual-meet-2025',
    downloadUrl: '/downloads/annual-meet-2025.pdf',
  },
  {
    id: 2,
    title: 'Distinguished CPDA Award Nominations Open',
    description: 'Nominations are now open for the Distinguished CPDA Award 2025. The award recognizes outstanding contributions by NITH CPDA in their respective fields. Submit your nominations before the deadline.',
    image: '/news/award.jpg',
    date: '2025-01-12',
    slug: 'distinguished-CPDA-award-2025',
    downloadUrl: '/downloads/distinguished-CPDA-award-2025.pdf',
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

export default function CPDARules() {
  const [news, setNews] = useState<NewsItem[]>(initialNewsData);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [formData, setFormData] = useState<Partial<NewsItem>>({
    title: '',
    description: '',
    image: '',
    date: '',
    slug: '',
    downloadUrl: '',
  });

  const getNextId = () => Math.max(...news.map((n) => n.id), 0) + 1;

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      date: '',
      slug: '',
      downloadUrl: '',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNews(initialNewsData);
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredNews = news; // No archive filtering anymore
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleAddNews = () => {
    if (!formData.title || !formData.date) return;

    const newNewsItem: NewsItem = {
      id: getNextId(),
      title: formData.title as string,
      description: (formData.description as string) || '',
      image: (formData.image as string) || '/news/default.jpg',
      date: formData.date as string,
      slug: (formData.slug as string) || generateSlug(formData.title as string),
      downloadUrl: (formData.downloadUrl as string) || '',
    };

    setNews([newNewsItem, ...news]);
    setShowAddModal(false);
    resetForm();
    setCurrentPage(1);
  };

  const handleEditNews = (item: NewsItem) => {
    setEditingId(item.id);
    setFormData(item);
    setShowAddModal(true);
  };

  const handleUpdateNews = () => {
    if (!formData.title || !formData.date || !editingId) return;

    setNews((prev) =>
      prev.map((item) =>
        item.id === editingId
          ? {
              ...item,
              title: formData.title as string,
              description: (formData.description as string) || '',
              image: (formData.image as string) || item.image,
              date: formData.date as string,
              slug: (formData.slug as string) || generateSlug(formData.title as string),
              downloadUrl: (formData.downloadUrl as string) || item.downloadUrl,
            }
          : item
      )
    );
    setEditingId(null);
    setShowAddModal(false);
    resetForm();
  };

  const handleDeleteNews = (id: number) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
    setDeletingId(null);
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
    <Nav/>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#800000] transition-colors duration-200">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-400">CPDA</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">Rules</span>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CPDA Rules</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Latest news, announcements, and updates from the NITH CPDA community.
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
              className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex items-center justify-between"
            >
              <span className="font-semibold text-gray-700">Total News: {news.length}</span>
              <motion.button
                onClick={() => setShowAddModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-[#631012] hover:bg-[#7a1a1d] text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
              >
                + Add News
              </motion.button>
            </motion.div>

            <div className="w-full">
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
                  <p className="text-gray-500 mb-6">There are no news items available.</p>
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
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#631012]/10 to-[#631012]/5">
                                <svg className="w-12 h-12 text-[#631012]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 p-5 sm:p-6 flex flex-col">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex gap-2">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleEditNews(item)}
                                  className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded font-medium shadow-sm"
                                  title="Edit"
                                >
                                  ✏️
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => setDeletingId(item.id)}
                                  className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded font-medium shadow-sm"
                                  title="Delete"
                                >
                                  🗑️
                                </motion.button>
                              </div>
                            </div>

                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#631012] transition-colors line-clamp-2">
                                <Link href={`/CPDA/news/${item.slug}`}>{item.title}</Link>
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
                              <div className="flex items-center gap-2">
                                {item.downloadUrl && (
                                  <a
                                    href={item.downloadUrl}
                                    download
                                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
                                  >
                                    📥 Download
                                  </a>
                                )}
                                <Link
                                  href={`/CPDA/news/${item.slug}`}
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
          </div>
        </section>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deletingId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setDeletingId(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delete News?</h3>
                  <p className="text-gray-600">
                    Are you sure you want to delete "{news.find((n) => n.id === deletingId)?.title?.split(' ').slice(0, 3).join(' ') || 'this news'}?"
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDeleteNews(deletingId)}
                    className="flex-1 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setDeletingId(null)}
                    className="flex-1 py-3 px-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add/Edit Modal */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => {
                setShowAddModal(false);
                setEditingId(null);
                resetForm();
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {editingId ? 'Edit News' : 'Add New News'}
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter news title"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date *</label>
                    <input
                      type="date"
                      value={formData.date || ''}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={formData.image || ''}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://example.com/news-image.jpg"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Download URL</label>
                    <input
                      type="url"
                      value={formData.downloadUrl || ''}
                      onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                      placeholder="/downloads/file-name.pdf"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Slug (optional)</label>
                    <input
                      type="text"
                      value={formData.slug || ''}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="Auto-generated from title"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                    <textarea
                      rows={4}
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Enter news description"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-8">
                  <button
                    onClick={editingId ? handleUpdateNews : handleAddNews}
                    disabled={!formData.title || !formData.date}
                    className="flex-1 py-4 px-8 bg-[#631012] hover:bg-[#7a1a1d] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {editingId ? 'Update News' : 'Add News'}
                  </button>
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingId(null);
                      resetForm();
                    }}
                    className="flex-1 py-4 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-lg rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer/>
    </>
  );
}
