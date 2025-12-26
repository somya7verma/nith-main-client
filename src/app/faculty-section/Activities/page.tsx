'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

type ActivityCategory =
  | 'All'
  | 'Reunions'
  | 'Webinars'
  | 'Hackathons'
  | 'Campus Events';
type ActivityMode = 'Online' | 'Offline' | 'Hybrid';

interface Activity {
  id: number;
  date: string;
  title: string;
  category: Exclude<ActivityCategory, 'All'>;
  mode: ActivityMode;
  location: string;
  description: string;
}

const initialActivitiesData: Activity[] = [
  
  {
    id: 2,
    date: '2025-01-20',
    title: 'Tech Talk: AI in Industry',
    category: 'Webinars',
    mode: 'Online',
    location: 'Zoom',
    description: 'Learn about AI applications in modern industry from our distinguished alumni.',
  },
  {
    id: 3,
    date: '2025-02-05',
    title: 'Code Sprint 2025',
    category: 'Hackathons',
    mode: 'Hybrid',
    location: 'CS Block & Online',
    description: '48-hour hackathon with mentorship from industry experts.',
  },
  {
    id: 4,
    date: '2025-02-14',
    title: 'Campus Tour & Meet',
    category: 'Campus Events',
    mode: 'Offline',
    location: 'NIT Hamirpur Campus',
    description: 'Explore the new campus developments with current students.',
  },
  {
    id: 5,
    date: '2025-02-28',
    title: 'Batch of 2015 Reunion',
    category: 'Reunions',
    mode: 'Offline',
    location: 'Guest House, NIT Hamirpur',
    description: 'Special reunion for the graduating class of 2015.',
  },
  {
    id: 6,
    date: '2025-03-10',
    title: 'Career Guidance Webinar',
    category: 'Webinars',
    mode: 'Online',
    location: 'Google Meet',
    description: 'Alumni sharing career insights with current students.',
  },
  {
    id: 7,
    date: '2025-03-20',
    title: 'Innovation Hackathon',
    category: 'Hackathons',
    mode: 'Hybrid',
    location: 'Innovation Hub & Discord',
    description: 'Build innovative solutions for real-world problems.',
  },
  {
    id: 8,
    date: '2025-04-01',
    title: 'Foundation Day Celebration',
    category: 'Campus Events',
    mode: 'Offline',
    location: 'Open Air Theatre',
    description: "Celebrate the institute's foundation day with cultural events.",
  },
  {
    id: 9,
    date: '2025-04-15',
    title: 'Startup Stories Webinar',
    category: 'Webinars',
    mode: 'Online',
    location: 'Microsoft Teams',
    description: 'Alumni entrepreneurs share their startup journeys.',
  },
  {
    id: 10,
    date: '2025-04-25',
    title: 'Silver Jubilee Reunion',
    category: 'Reunions',
    mode: 'Offline',
    location: 'Convention Center',
    description: '25 years celebration for batch of 2000.',
  },
];

const categories: ActivityCategory[] = [
  'All',
  'Reunions',
  'Webinars',
  'Hackathons',
  'Campus Events',
];

const categoryOptions: Exclude<ActivityCategory, 'All'>[] = [
  'Reunions',
  'Webinars',
  'Hackathons',
  'Campus Events',
];

const modeOptions: ActivityMode[] = ['Online', 'Offline', 'Hybrid'];

const ITEMS_PER_PAGE = 10;

export default function Activities() {
  const [activitiesData, setActivitiesData] = useState<Activity[]>(initialActivitiesData);
  const [activeCategory, setActiveCategory] = useState<ActivityCategory>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [formData, setFormData] = useState<Partial<Activity>>({
    date: '',
    title: '',
    category: 'Reunions' as Exclude<ActivityCategory, 'All'>,
    mode: 'Offline' as ActivityMode,
    location: '',
    description: '',
  });

  const filteredActivities = useMemo(() => {
    if (activeCategory === 'All') return activitiesData;
    return activitiesData.filter((activity) => activity.category === activeCategory);
  }, [activeCategory, activitiesData]);

  const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);
  const paginatedActivities = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredActivities.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredActivities, currentPage]);

  const handleCategoryChange = (category: ActivityCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setExpandedCard(null);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getNextId = () => Math.max(...activitiesData.map((a) => a.id), 0) + 1;

  const resetForm = () => {
    setFormData({
      date: '',
      title: '',
      category: 'Reunions' as Exclude<ActivityCategory, 'All'>,
      mode: 'Offline' as ActivityMode,
      location: '',
      description: '',
    });
  };

  const handleAddActivity = () => {
    if (!formData.title || !formData.date || !formData.location) return;

    const newActivity: Activity = {
      id: getNextId(),
      date: formData.date as string,
      title: formData.title as string,
      category: formData.category as Exclude<ActivityCategory, 'All'>,
      mode: formData.mode as ActivityMode,
      location: formData.location as string,
      description: formData.description as string || '',
    };

    setActivitiesData([newActivity, ...activitiesData]);
    setShowAddModal(false);
    resetForm();
    setCurrentPage(1);
  };

  const handleEditActivity = (activity: Activity) => {
    setEditingId(activity.id);
    setFormData(activity);
    setShowAddModal(true);
  };

  const handleUpdateActivity = () => {
    if (!formData.title || !formData.date || !formData.location || !editingId) return;

    setActivitiesData((prev) =>
      prev.map((activity) =>
        activity.id === editingId
          ? {
              id: editingId,
              date: formData.date as string,
              title: formData.title as string,
              category: formData.category as Exclude<ActivityCategory, 'All'>,
              mode: formData.mode as ActivityMode,
              location: formData.location as string,
              description: formData.description as string || '',
            }
          : activity
      )
    );
    setEditingId(null);
    setShowAddModal(false);
    resetForm();
  };

  const handleDeleteActivity = (id: number) => {
    setActivitiesData((prev) => prev.filter((activity) => activity.id !== id));
    setDeletingId(null);
    if (expandedCard === id) setExpandedCard(null);
    if (editingId === id) {
      setEditingId(null);
      resetForm();
    }
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
              <span className="text-[#800000] font-medium">Activities</span>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Faculty Activities</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Stay connected with your alma mater through reunions, webinars, hackathons, and campus events.
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
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#631012]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span className="font-semibold text-gray-700">Filter by Category:</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto">
                <div className="flex flex-wrap gap-2 md:flex-nowrap flex-1">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex-1 md:flex-none ${
                        activeCategory === category
                          ? 'bg-[#631012] text-white shadow-lg shadow-[#631012]/25'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
                <motion.button
                  onClick={() => setShowAddModal(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-[#631012] hover:bg-[#7a1a1d] text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
                >
                  + Add Activity
                </motion.button>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <p className="text-gray-600">
                Showing{' '}
                <span className="font-semibold text-[#631012]">{paginatedActivities.length}</span>{' '}
                of{' '}
                <span className="font-semibold">{filteredActivities.length}</span>{' '}
                activities
              </p>
              <span className="text-sm text-gray-500">Total: {activitiesData.length} activities</span>
            </motion.div>

            {/* Desktop Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden mb-8"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Activity Title
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Mode
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <AnimatePresence mode="wait">
                      {paginatedActivities.map((activity, index) => (
                        <motion.tr
                          key={activity.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="hover:bg-gray-50/80 transition-colors duration-200 group"
                        >
                          <td className="px-6 py-5 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{formatDate(activity.date)}</div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="max-w-xs">
                              <p className="font-semibold text-gray-900 group-hover:text-[#631012] transition-colors">
                                {activity.title}
                              </p>
                              <p className="text-sm text-gray-500 truncate mt-1">{activity.description}</p>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                              {activity.category}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                              {activity.mode}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm">{activity.location}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-center">
                            <div className="flex gap-2 justify-center">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleEditActivity(activity)}
                                className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg font-medium shadow-sm hover:shadow-md transition-all"
                                title="Edit"
                              >
                                ✏️ Edit
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setDeletingId(activity.id)}
                                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg font-medium shadow-sm hover:shadow-md transition-all"
                                title="Delete"
                              >
                                🗑️ Delete
                              </motion.button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4 mb-8">
              <AnimatePresence mode="wait">
                {paginatedActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <div
                      className="p-5 cursor-pointer"
                      onClick={() => setExpandedCard(expandedCard === activity.id ? null : activity.id)}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-16 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
                            <div className="h-5 bg-gradient-to-r from-[#631012] to-[#7a1a1d] flex items-center justify-center">
                              <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
                                {new Date(activity.date).toLocaleDateString('en-US', { month: 'short' })}
                              </span>
                            </div>
                            <div className="h-11 bg-white flex flex-col items-center justify-center">
                              <span className="text-xl font-bold text-gray-800 leading-none">
                                {new Date(activity.date).getDate()}
                              </span>
                              <span className="text-[10px] text-gray-400 font-medium">
                                {new Date(activity.date).getFullYear()}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 leading-tight">{activity.title}</h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {new Date(activity.date).toLocaleDateString('en-US', { weekday: 'long' })}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedCard === activity.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                          {activity.category}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                          {activity.mode}
                        </span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedCard === activity.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2 border-t border-gray-100 space-y-4">
                            <p className="text-gray-600 text-sm">{activity.description}</p>
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm">{activity.location}</span>
                            </div>
                            <div className="flex gap-2 pt-2">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleEditActivity(activity)}
                                className="flex-1 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                              >
                                ✏️ Edit Activity
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setDeletingId(activity.id)}
                                className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all"
                              >
                                🗑️ Delete
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {paginatedActivities.length === 0 && (
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No activities found</h3>
                <p className="text-gray-500 mb-6">There are no activities in this category at the moment.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCategoryChange('All')}
                  className="px-6 py-2.5 rounded-lg bg-[#631012] text-white font-medium hover:bg-[#7a1a1d] transition-colors shadow-sm hover:shadow-md"
                >
                  View All Activities
                </motion.button>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex justify-center"
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
                        <span key={index} className="px-3 py-2 text-gray-400">
                          ...
                        </span>
                      ) : (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentPage(page as number)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                            currentPage === page
                              ? 'bg-[#631012] text-white shadow-md'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {page}
                        </motion.button>
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
                    <svg
                      className="w-12 h-12 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Activity?</h3>
                  <p className="text-gray-600">
                    Are you sure you want to delete "
                    {activitiesData.find((a) => a.id === deletingId)?.title
                      ?.split(' ')
                      .slice(0, 3)
                      .join(' ') || 'this activity'}"
                    ? This action cannot be undone.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDeleteActivity(deletingId)}
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
                  {editingId ? 'Edit Activity' : 'Add New Activity'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mode *</label>
                    <select
                      value={formData.mode || 'Offline'}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value as ActivityMode })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200 bg-white"
                      required
                    >
                      {modeOptions.map((mode) => (
                        <option key={mode} value={mode}>
                          {mode}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter activity title"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select
                      value={formData.category || 'Reunions'}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value as Exclude<ActivityCategory, 'All'> })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200 bg-white"
                      required
                    >
                      {categoryOptions.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location / Platform *</label>
                    <input
                      type="text"
                      value={formData.location || ''}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., Main Auditorium, Zoom, Google Meet"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                    <textarea
                      rows={4}
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Enter activity description (optional)"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#631012] focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-8">
                  <button
                    onClick={editingId ? handleUpdateActivity : handleAddActivity}
                    disabled={!formData.title || !formData.date || !formData.location}
                    className="flex-1 py-4 px-8 bg-[#631012] hover:bg-[#7a1a1d] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm"
                  >
                    {editingId ? 'Update Activity' : 'Add Activity'}
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
      <Footer />
    </>
  );
}
