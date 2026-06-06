'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Nav />

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
            <span className="text-[#800000] font-medium">
              Academic Calendar
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
              Academic Calendar
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              The official academic schedule of the Institute outlining semester
              dates, registration windows, examinations, breaks, and result
              declaration timelines.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-8"
          >
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <svg
                className="w-5 h-5 text-[#631012]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold text-gray-700">
                Academic Calendar Overview
              </span>
            </div>

            <div className="space-y-6 mt-4">
              {/* Relevance & Importance */}
              <section>
                <h2 className="text-lg font-semibold mb-2">
                  Relevance & Importance
                </h2>
                <p className="text-gray-700 max-w-3xl">
                  The Academic Calendar is a definitive roadmap for students,
                  faculty, and administration. It ensures coordinated planning,
                  transparency in academic operations, and helps maintain
                  discipline by providing clear timelines for teaching,
                  assessments, and administrative milestones.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold mb-2">Key Highlights</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
                  <li>Semester timelines (start & end dates)</li>
                  <li>Registration and add/drop periods</li>
                  <li>Examinations and evaluation schedules</li>
                  <li>Breaks and vacation windows</li>
                  <li>Result declaration and grade submission deadlines</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold mb-3">
                  Academic Calendar Access
                </h3>
                <p className="text-gray-600 mb-6">
                  Select the semester calendar to view or download the official
                  PDF.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-start max-w-3xl mx-auto">
                  <article className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base mb-2">
                      Odd Semester 2025–26
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Covers the autumn/winter semester including classes, exams
                      and holidays.
                    </p>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a
                        href="/academic-calendars/odd-2025-26.pdf"
                        className="inline-flex items-center gap-2 bg-[#631012] text-white px-4 py-2 rounded hover:bg-[#4d0f10] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                        Download PDF
                      </a>

                      <Link
                        href="/academic-calendars/odd-2025-26.pdf"
                        className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </Link>
                    </div>
                  </article>

                  <article className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base mb-2">
                      Even Semester 2025–26
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Covers the spring/summer semester with exam schedules and
                      official breaks.
                    </p>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <a
                        href="/academic-calendars/even-2025-26.pdf"
                        className="inline-flex items-center gap-2 bg-[#631012] text-white px-4 py-2 rounded hover:bg-[#4d0f10] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                        Download PDF
                      </a>

                      <Link
                        href="/academic-calendars/even-2025-26.pdf"
                        className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-50"
                      >
                        View
                      </Link>
                    </div>
                  </article>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  If a calendar PDF is not yet available, please contact the
                  Registrar&apos;s office for the latest schedule.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
