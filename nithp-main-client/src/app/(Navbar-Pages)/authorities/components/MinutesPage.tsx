'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

export type MinutesEntry = {
  serial: number;
  particulars: string;
  date: string;
};

export type MinutesSection = {
  title: string;
  data: MinutesEntry[];
};

interface MinutesPageProps {
  title: string;
  main: MinutesSection;
  extras?: MinutesSection[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MinutesPage({ title, main, extras }: MinutesPageProps) {
  const renderTable = (section: MinutesSection) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-16">
                Sl. No.
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Particulars
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date of Meeting
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {section.data.map((row) => (
              <tr
                key={`${section.title}-${row.serial}`}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 w-16">
                  {row.serial}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {row.particulars}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

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
            <Link
              href="/authorities"
              className="hover:text-[#800000] transition-colors duration-200"
            >
              Authorities
            </Link>
            <span>›</span>
            <span className="text-[#800000] font-medium">{title}</span>
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
            {title}
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Official record of meetings as shared by the institute
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-8">
          {renderTable(main)}
          {extras?.map((section, idx) => (
            <div key={idx}>{renderTable(section)}</div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
