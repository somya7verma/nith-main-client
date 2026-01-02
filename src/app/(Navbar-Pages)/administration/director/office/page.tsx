'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';
import { director, officeStaff } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function DirectorOfficePage() {
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
            <span className="text-[#800000] font-medium">Director Office</span>
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
            Director Office
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Director and Office Staff Contact Information
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Director Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl px-6 py-3 text-center border-b-2 border-[#800000]">
            <h2 className="text-xl font-semibold text-gray-700">Director</h2>
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
                      Designation
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
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {director.slNo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                      {director.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {director.designation}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {director.phone}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        href={`mailto:${director.email}`}
                        className="text-[#800000] hover:underline"
                      >
                        {director.email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Office Staff Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-2xl px-6 py-3 text-center border-b-2 border-[#800000]">
            <h2 className="text-xl font-semibold text-gray-700">
              Office Staff
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
                      Designation
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
                  {officeStaff.map((staff, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {staff.slNo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                        {staff.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {staff.designation}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {staff.phone}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {staff.email !== '--' ? (
                          <a
                            href={`mailto:${staff.email}`}
                            className="text-[#800000] hover:underline"
                          >
                            {staff.email}
                          </a>
                        ) : (
                          <span className="text-gray-700">{staff.email}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
