'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

interface Programme {
  key: string;
  title: string;
  description: string;
  type: 'UG' | 'PG' | 'PhD';
  button: string;
}

const programmes: Programme[] = [
  {
    key: 'ug',
    title: 'B.Tech / B.Arch / Dual Degree (UG Programmes)',
    description:
      'Undergraduate programmes offered in engineering, architecture, and integrated dual-degree formats.',
    type: 'UG',
    button: 'View UG Admissions',
  },
  {
    key: 'mtech',
    title: 'M.Tech / M.Arch',
    description:
      'Postgraduate programmes focusing on advanced technical and architectural education.',
    type: 'PG',
    button: 'View M.Tech / M.Arch Admissions',
  },
  {
    key: 'msc',
    title: 'M.Sc',
    description:
      'Postgraduate science programmes with emphasis on theoretical and applied research.',
    type: 'PG',
    button: 'View M.Sc Admissions',
  },
  {
    key: 'mba',
    title: 'MBA',
    description:
      'Management programme designed to develop leadership and managerial skills.',
    type: 'PG',
    button: 'View MBA Admissions',
  },
  {
    key: 'phd',
    title: 'Ph.D.',
    description:
      'Doctoral programmes aimed at advanced research and innovation.',
    type: 'PhD',
    button: 'View Ph.D. Admissions',
  },
];

const programmeLinks: Record<string, string> = {
  ug: '/academics/admissions-2025-26/ug',
  mtech: '/academics/admissions-2025-26/mtech',
  msc: '/academics/admissions-2025-26/msc',
  mba: '/academics/admissions-2025-26/mba',
  phd: '/academics/admissions-2025-26/phd',
};

const highlights = [
  {
    title: 'Statutory & National Compliance',
    description:
      'Admissions adhere to Institute norms, national policies, reservation rules, and statutory regulations.',
  },
  {
    title: 'Programme-specific Processes',
    description:
      'Separate processes and eligibility apply for UG, PG, and PhD programmes; always consult the programme page.',
  },
  {
    title: 'Important Dates & Schedule',
    description:
      'Refer to programme pages and the Admissions Desk for exact timelines and application windows.',
  },
  {
    title: 'Scholarships & Fellowships',
    description:
      'Details of financial assistance and scholarships are provided on the programme pages and through official notices.',
  },
  {
    title: 'Contact & Support',
    description:
      'Contact the Admissions Desk for clarifications; official notices take precedence over drafts.',
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<'All' | 'UG' | 'PG' | 'PhD'>(
    'All'
  );

  const filteredProgrammes =
    activeTab === 'All'
      ? programmes
      : programmes.filter((p) => p.type === activeTab);

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
              <span className="text-gray-400">Academics</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">
                Admissions 2025–26
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Admissions 2025–26
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Overview of admission opportunities for various academic
                programmes offered by the Institute for the academic session
                2025–26.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#631012] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M3 7h18M5 21h14"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    About Admissions
                  </h2>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Admissions to different programmes at NIT Hamirpur are
                      conducted in accordance with Institute norms, national
                      policies, and statutory regulations. Separate admission
                      processes apply to different programmes — please refer to
                      the programme-specific pages for detailed eligibility
                      criteria, application procedures, and schedules.
                    </p>
                    <p>
                      Official announcements, schedule updates, and
                      notifications are published on the Institute website and
                      the Admissions Desk. Candidates are advised to rely only
                      on official notices for application timelines and
                      instructions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Objectives / Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Highlights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {h.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {h.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Programmes with Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Academic Programmes – Admissions 2025–26
                </h2>

                <div className="flex gap-2">
                  {(['All', 'UG', 'PG', 'PhD'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === tab
                          ? 'bg-[#631012] text-white shadow-sm'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProgrammes.map((p, idx) => (
                  <motion.article
                    key={p.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {p.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                          {p.description}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <Link
                          href={programmeLinks[p.key] ?? '#'}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-[#631012] text-white rounded-md hover:bg-[#800000] transition-colors"
                        >
                          {p.button}
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
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mt-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Important Notes
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Follow the specific programme page for eligibility and
                  schedule.
                </li>
                <li>
                  Admissions are subject to Institute rules and statutory
                  regulations.
                </li>
                <li>Official notices from the Institute take precedence.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
