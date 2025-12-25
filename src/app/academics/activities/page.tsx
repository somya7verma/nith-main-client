'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function Page() {
  const responsibilities = [
    'Admission and enrollment of students.',
    'Finalisation of academic calendar, time-tables, registration of students for course work and examinations, class arrangements and all other requirements for proper conduct of class work.',
    'Conduct of class tests and co-ordinating the finalization of session’s evaluations and ensuring the timely declaration of results.',
    'Supervision of the maintenance of up-to-date academic records of all categories of students.',
    'Publication and distribution of the syllabi.',
    'Organizing meetings of all the Institute-level academic bodies.',
    'Arranging the issue of all academic certificates, medals, and prizes to the students.',
    'To arrange or conduct those examinations which are to be conducted by the Institute as stipulated in the Institute regulations.',
    'To formulate policies for the conduct of research and steps to maintain suitable standards by implementing the Board of Governors/Senate decisions.',
    'To execute the policy of the Senate in the conduct of P.G., Ph.D., and other research programmes including the examination of the thesis.',
    'To co-ordinate the conduct of Convocation.',
    'All proposals to modify the teaching programmes will be considered by BOAC, for which the Dean (Academic), as Chairman, and if approved, will be sent to the Senate for formal approval.',
    'To admit sponsored Early Faculty Induction Programme and Quality Improvement Programme candidates.',
    'To suggest the Director take suitable steps from time to time to strive for high academic standards.',
  ];

  return (
    <>
      <Nav />

      {/* Breadcrumb / Subheader */}
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
            <Link
              href="/academics"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Academics
            </Link>
            <span>›</span>
            <span className="text-[#800000] font-medium">Activities</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Activities
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Academic governance, planning, and execution under the Office of
              the Dean (Academic).
            </p>
          </motion.div>
        </div>
      </section>

      <main className="py-10 md:py-14 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl shadow-sm p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-md bg-[#631012] flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
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
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase">
                  ACTIVITIES
                </h3>
                <p className="mt-3 text-gray-700">
                  As per the schedule ‘C’ of NIT statutes the duties and
                  responsibilities of the Dean (Academic) is to advise the
                  Director in:
                </p>
              </div>
            </div>
          </motion.div>

          {/* Responsibilities grid */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Responsibilities & Activities
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {responsibilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-[#631012]">
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
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Supporting Sections: Governance flow + Quick links */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Academic Governance Flow
              </h4>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 font-medium">
                    BOAC
                  </div>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 font-medium">
                    Senate
                  </div>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 font-medium">
                    Board of Governors
                  </div>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-800 font-medium">
                  Implementation
                </div>
              </div>

              <p className="mt-6 text-gray-600">
                A concise representation of decision flow from academic
                committees to implementation.
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <Link
                  href="/academics/academic-notices"
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
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
                      d="M8 7V3m8 4V3M3 21h18"
                    />
                  </svg>
                  <span className="text-gray-700">Academic Calendar</span>
                </Link>

                <Link
                  href="/academics/examination-guidelines"
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
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
                      d="M12 8c-3.866 0-7 3.134-7 7v1h14v-1c0-3.866-3.134-7-7-7z"
                    />
                  </svg>
                  <span className="text-gray-700">Examination Rules</span>
                </Link>

                <Link
                  href="/academics/course-structure-syllabus"
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
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
                      d="M12 8c-3.866 0-7 3.134-7 7v1h14v-1c0-3.866-3.134-7-7-7z"
                    />
                  </svg>
                  <span className="text-gray-700">Syllabi</span>
                </Link>

                <Link
                  href="/academics/convocation"
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
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
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  <span className="text-gray-700">Convocation Details</span>
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
