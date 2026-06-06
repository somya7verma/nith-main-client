'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function Activities() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Faculty Activities
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Stay connected with your alma mater through reunions, webinars,
                hackathons, and campus events.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <p>
                    As per the schedule ‘C’ of NIT statutes the role and
                    responsibilities of the Dean (Faculty Welfare) is to advice
                    the Director in matters related to:{' '}
                  </p>
                  <ul>
                    <li>
                      Deputation of faculty to various institutions under
                      Quality Improvement Programme.
                    </li>
                    <li>
                      Advice the Director for deputation of the faculty members
                      to various conferences, seminars, short-term courses,
                      training programmes, foreign teaching/training assignments
                      etc.
                    </li>
                    <li>
                      Chair the committee meetings of the evaluation of papers
                      submitted or to be submitted to the conferences / seminar
                      by the faculty members.
                    </li>
                    <li>
                      Assist the Director in organizing training programmes for
                      faculty.
                    </li>
                    <li>
                      Assist the Director in the supervision of the construction
                      and the maintenance work of buildings, roads, water
                      supply, sanitation, lawns and gardens, communication
                      networks, water coolers, air conditioners, telephones,
                      etc.
                    </li>
                    <li>
                      Assist the Director in maintaining the discipline and work
                      ethos among the various departments and between the
                      faculty members.
                    </li>
                    <li>
                      Assist the Director in maintaining the high academic
                      standards and achieving academic excellence in the
                      institution.
                    </li>
                    <li>
                      Supervision over faculty discipline, integrity and
                      commitment.
                    </li>
                  </ul>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
