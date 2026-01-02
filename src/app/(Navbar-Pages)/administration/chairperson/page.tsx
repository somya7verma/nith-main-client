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

export default function ChairpersonPage() {
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
            <span className="text-[#800000] font-medium">Chairperson</span>
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
            Chairperson
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Board of Governors, NIT Hamirpur
          </p>
        </motion.div>
      </section>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12">
            {/* Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg
                    className="w-24 h-24"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-900">
                  Shri Sanjay Gupta
                </h2>
                <p className="text-sm text-gray-600 mt-1">Chairman</p>
                <p className="text-sm text-gray-500">Board of Governors</p>
                <p className="text-sm text-gray-500">NIT Hamirpur</p>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#800000] pb-2">
                Message from the Chairperson
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Dear Students, Faculty, and Staff,</p>

                <p>
                  It gives me immense pleasure to welcome you to the National
                  Institute of Technology, Hamirpur. As the Chairperson of the
                  Board of Governors, I am honored to be associated with an
                  institution that has consistently demonstrated excellence in
                  technical education and research.
                </p>

                <p>
                  NIT Hamirpur has been at the forefront of nurturing young
                  minds and transforming them into competent engineers and
                  responsible citizens. The institute&apos;s commitment to
                  academic excellence, innovation, and holistic development is
                  truly commendable.
                </p>

                <p>
                  Our vision is to create an environment that fosters
                  creativity, critical thinking, and entrepreneurship. We strive
                  to provide our students with world-class infrastructure,
                  experienced faculty, and opportunities for overall development
                  that prepare them for the challenges of tomorrow.
                </p>

                <p>
                  I encourage all students to make the most of the resources and
                  opportunities available at this prestigious institution. Work
                  hard, stay curious, and always aim for excellence in whatever
                  you do.
                </p>

                <p className="font-semibold">
                  Best wishes for your future endeavors.
                </p>

                <div className="mt-6 text-sm text-gray-700">
                  <p className="font-semibold">Positions held:</p>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Editor-in-Chief of Dainik Jagran – New Delhi</li>
                    <li>Chairman, IIM Amritsar – Punjab</li>
                    <li>Chairman, NIT Hamirpur – Himachal Pradesh</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
