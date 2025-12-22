'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';
import { formerDirectors, formerPrincipalsREC, DirectorEntry } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function DirectorCard({ director }: { director: DirectorEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Placeholder Image */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-400">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 text-center border-t-4 border-[#800000]">
        <h3 className="font-semibold text-gray-900 text-sm">{director.name}</h3>
        <p className="text-xs text-gray-600 mt-2">{director.tenure}</p>
      </div>
    </motion.div>
  );
}

export default function FormerDirectorsPage() {
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
            <span className="text-[#800000] font-medium">Former Directors</span>
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
            Former Directors & Principals
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Honoring our distinguished leadership
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Former Directors, NIT Hamirpur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#800000] mb-8 text-center">
            Former Directors, NIT Hamirpur
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formerDirectors.map((director, idx) => (
              <DirectorCard key={idx} director={director} />
            ))}
          </div>
        </motion.div>

        {/* Former Principals, REC Hamirpur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#800000] mb-8 text-center">
            Former Principals, REC Hamirpur
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formerPrincipalsREC.map((principal, idx) => (
              <DirectorCard key={idx} director={principal} />
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
