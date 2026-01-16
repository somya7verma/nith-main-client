'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function RegistrarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header31 />

      {/* Breadcrumbs */}
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
            <span className="text-[#800000] font-medium">Registrar</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Registrar
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Profile summary and contact details
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12">
            {/* Placeholder Image + Basic Info */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Placeholder silhouette */}
                <svg
                  className="w-24 h-24 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9a9 9 0 1118 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-900">
                  Dr. Archana Santosh Nanoty
                </h2>
                <p className="text-sm text-gray-600 mt-1">Registrar</p>
                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  <p>
                    Email:{' '}
                    <a
                      className="text-[#631012] hover:underline"
                      href="mailto:registrar@nith.ac.in"
                    >
                      registrar@nith.ac.in
                    </a>
                  </p>
                  <p>Phone: 01972-254010</p>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-[#800000] mb-4 border-b-2 border-[#800000] pb-2">
                Profile Summary
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With more than 2 decades of experience in academics Dr.
                  Archana started her career as a Lecturer in Dept of Electrical
                  Engg in 1999. She grew professionally in a span of 24 yrs
                  which is evident from the various designations administered by
                  her. She got elevated as Principal in the yr 2010 and took
                  various initiatives like placement training strengthening
                  industry institute interaction. Her dedication and commitment
                  earned her the status of State University (GTU) endorsed
                  Professor Electrical, and Principal w.e.f. 2014. All through
                  her career she has been distinguished by her unique working
                  style she has contributed to the development of various new
                  initiatives like recruitment process at GSFCU. She has been
                  creating platforms for academicians and industries to come
                  together to share their ideas. She has been appointed as
                  referee by DST-GOI to review research proposals. She has been
                  the resource person / session chair at various international
                  conference. A recipient of many National / International
                  Awards. She got the opportunity to serve various Universities
                  in various capacities such as Principal, Professor, director-
                  Technical Education, Director R&D.
                </p>
                <p>
                  With her profound creativity Motivational skills, she mentored
                  students/staff to be prepared to face challenges. A member of
                  various Professional bodies: IE, IEEE ISTD ISTE. Ex- Advisory
                  comm member of Society of Power Engineers. Actively
                  contributed in academic Audits, by the universities. Evaluated
                  many Ph.D. thesis for various universities. Some of the other
                  key roles she has administered include Chairperson BOS-EE CVM
                  Uni. 2020-21, Member BOS-EE-UTU, 2018-20. More than 40
                  publications to her credit that include National/international
                  Journal Souvenir articles, books and conference proceedings.
                </p>
                <p>
                  As an inspiring academician she is guiding Ph.D. Scholars as
                  guide of GTU and Doctoral progress committee. About 20 of her
                  publications are indexed in Scopus and WoS which has earned
                  more than 100 citations with the H index of 6. She is one of
                  the inventors of 4 granted Patents. She keeps herself updated
                  and she has completed an executive program on Leadership &
                  change Management by IIM Raipur. She is a multifaceted leader
                  who is also a Government of India certified music therapist.
                  With her expertise she has worked as Industry consultant and
                  Trainer -National Power Training Institute.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
