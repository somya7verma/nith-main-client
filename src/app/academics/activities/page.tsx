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
            <span className="text-[#800000] font-medium">Activities</span>
          </nav>
        </div>
      </div>

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
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-3 flex items-center gap-4">
                <div className="h-12 w-12 rounded-md bg-[#631012] flex items-center justify-center text-white shadow">
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
                    ACTIVITIES
                  </h3>
                </div>
              </div>

              <div className="md:col-span-9">
                <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
                  <p className="text-gray-700 leading-relaxed mb-2">
                    As per Schedule C of the Institute Statutes, the Dean
                    (Academic) advises the Director on key academic matters and
                    governance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.section
            id="responsibilities"
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
                  <div className="mt-1 flex-shrink-0">
                    <span
                      className="inline-block w-2.5 h-2.5 bg-[#631012] rounded-full mt-2"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-2xl shadow-sm p-6"
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

            {/* Quick Links removed as requested */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
