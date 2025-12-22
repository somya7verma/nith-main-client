'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function VigilancePage() {
  const resources = [
    {
      title: "Who are CVO's?",
      href: '/administration/vigilance/uploads/who-are-cvo17237913109605.pdf',
    },
    {
      title: 'Anti Corruption Policy @NITH',
      href: '/administration/vigilance/uploads/anti-corruption-policy17237913548031.pdf',
    },
    {
      title: 'Govt. of India Resolution on Public Interest Disclosure',
      href: '/administration/vigilance/uploads/goi-resolution17237913795643.pdf',
    },
    {
      title: 'How to lodge Direct Complaint with CVC',
      href: '/administration/vigilance/uploads/direct-complaint17237913996198.pdf',
    },
    {
      title: 'Vigilance Awareness Week',
      href: '/administration/vigilance/uploads/vigilence-awareness-week17237914228706.pdf',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            <span className="text-gray-400">Administration</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">Vigilance Corner</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Vigilance Corner
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Chief Vigilance Officer and Complaint Registration
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Chief Vigilance Officer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl px-6 py-3 text-center border-b-2 border-[#800000]">
            <h2 className="text-xl font-semibold text-gray-700">
              Chief Vigilance Officer
            </h2>
          </div>

          <div className="bg-white rounded-b-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#800000] to-[#631012] text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Sl. No.
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Responsibility
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Phone No.
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">1</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Prof. Ram Naresh Sharma
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Chief Vigilance Officer
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">254526</td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        href="mailto:cvo@nith.ac.in"
                        className="text-[#800000] hover:underline"
                      >
                        cvo@nith.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Resources List */}
            <div className="px-6 py-6 border-t border-gray-200">
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#800000] hover:text-[#631012] hover:underline inline-flex items-center gap-1"
                    >
                      <span>•</span>
                      <span>{resource.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Vigilance Complaint Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-8">
            Vigilance Complaint Registration
          </h2>

          <a
            href="http://14.139.56.16/cm/login.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#800000] text-white rounded-lg hover:bg-[#631012] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Register Complaint</span>
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
