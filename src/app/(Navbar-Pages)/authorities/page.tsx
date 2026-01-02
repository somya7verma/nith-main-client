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

export default function AuthoritiesPage() {
  const authorities = [
    {
      title: 'Board of Governors (BOG)',
      compositionLink: '/authorities/bog/composition',
      minutesLink: '/authorities/bog/minutes',
    },
    {
      title: 'Finance Committee (FC)',
      compositionLink: '/authorities/fc/composition',
      minutesLink: '/authorities/fc/minutes',
    },
    {
      title: 'Building Works Committee (BWC)',
      compositionLink: '/authorities/bwc/composition',
      minutesLink: '/authorities/bwc/minutes',
    },
    {
      title: 'Senate',
      compositionLink: '/authorities/senate/composition',
      minutesLink: '/authorities/senate/minutes',
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
            <span className="text-[#800000] font-medium">Authorities</span>
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
            Authorities
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Governing bodies and committees of NIT Hamirpur
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authorities.map((authority, index) => (
            <motion.div
              key={authority.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {authority.title}
              </h3>
              <div className="space-y-3">
                <Link
                  href={authority.compositionLink}
                  className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-700 hover:text-[#800000]"
                >
                  <span className="mr-2">›</span>
                  Composition
                </Link>
                <Link
                  href={authority.minutesLink}
                  className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-700 hover:text-[#800000]"
                >
                  <span className="mr-2">›</span>
                  Minutes
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
