'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { Mail, CreditCard } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

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
              Contact for Certification matters
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact for Certification matters
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              For queries related to certificates, verification and transcripts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Contact for Certification matters
              </h2>
              <p className="text-gray-700 mt-1">
                Email Ids for certificate-related requests and verification
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-sm font-semibold text-gray-700 border-b">
                    Contact
                  </th>
                  <th className="py-3 px-4 text-sm font-semibold text-gray-700 border-b">
                    Email Id
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-[#800000]/5 transition-colors duration-150">
                  <td className="py-3 px-4 align-top">
                    Certificate Academic Office
                  </td>
                  <td className="py-3 px-4">
                    <a
                      href="mailto:certificate-acad@nith.ac.in"
                      className="text-[#800000] hover:underline"
                    >
                      certificate-acad@nith.ac.in
                    </a>
                    <br />
                    <a
                      href="mailto:ar-acad@nith.ac.in"
                      className="text-[#800000] hover:underline"
                    >
                      ar-acad@nith.ac.in
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
