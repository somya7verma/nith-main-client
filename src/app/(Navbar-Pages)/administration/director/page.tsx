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

export default function DirectorPage() {
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
            <span className="text-[#800000] font-medium">Director</span>
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
            Director
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            National Institute of Technology, Hamirpur
          </p>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Director Profile Section */}
          <div className="p-8 md:p-12">
            {/* Top: Image and Message */}
            <div className="mb-8">
              {/* Left: Image and Name - Floated */}
              <div className="float-left mr-8 mb-8 w-full sm:w-80">
                <div className="relative aspect-[3/4] bg-gradient-to-b from-blue-200 to-cyan-200 rounded-lg overflow-hidden border-4 border-[#800000]">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg
                      className="w-32 h-32"
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

                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Prof. Hiralal Murlidhar Suryawanshi
                  </h2>
                  <p className="text-gray-600 mt-2 font-medium">(Director)</p>
                </div>
              </div>

              {/* Right: Message - Wrapping Text */}
              <div className="">
                <h3 className="text-2xl font-bold text-[#800000] mb-4">
                  Message from the Director
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    Greetings and a Warm Welcome to one and all for joining us
                    at National Institute of Technology, Hamirpur, India.
                    National Institute of Technology, Hamirpur, is one of the
                    premier autonomous Institutions of National Importance in
                    Northern India under the act of Parliament-2007. It is a
                    state of art Institution and a dream destination for those
                    who wish to be leaders in Science and Technology. Besides
                    being recognized nationally and internationally for
                    excellent education at undergraduate level, we are also
                    making wide strides in innovative research and other
                    development activities.
                  </p>

                  <p>
                    Being a National Level Institute we have a unique group of
                    outstanding young minds from almost all the states and
                    UT&apos;s of the country. Students from diverse backgrounds
                    get to network with each other and get to identify and
                    comprehend the wide spectrum of varied cultural and regional
                    practices in our country. Students are not only given
                    exposure to the latest technological advances in their
                    chosen field but also trained to be responsible citizens of
                    our country. The rich and unique learning environment at NIT
                    develops the student physically, intellectually and
                    emotionally. A series of activities such as a cultural
                    festival, a technical festival, industry-focused seminars
                    and extracurricular activities, open them to challenges of
                    leadership. We not only enable our students to fulfill their
                    dreams but also mentor them to think BIG. During their
                    tenure at the institute, the students are given enriching
                    and life-defining experience that enables them to reach new
                    heights in their professional and personal lives.
                  </p>

                  <p>
                    Our alumni are forerunners in several Multi-National
                    Organizations and amongst successful entrepreneurs and
                    renowned academicians with a significant contribution
                    towards society. The Institute is known for producing some
                    of the best engineers and technocrats for the country. The
                    industry has always been appreciative of the talent pool
                    offered by the institute and this has resulted into
                    exemplary placements across all domains. Numerous reputed
                    Industrial and Consultancy Corporates visit the institute
                    campus for recruitment. The students bag stellar profiles
                    and packages per annum.
                  </p>

                  <p>
                    The Institution has a team of highly qualified, learned and
                    dedicated faculty with expertise in all major disciplines of
                    engineering and technology, science and management, and is a
                    constant source of inspiration for the students. They are
                    actively involved in raising the standards of not only our
                    institute but also other institutions by collaborating with
                    them and by sharing knowledge through faculty/student
                    interaction programmes from time to time.
                  </p>

                  <p>
                    The Institute has ongoing academic and research
                    collaborations with many national and international
                    universities in order to keep pace with increasing frontiers
                    of knowledge. In order to align with country&apos;s major
                    policy initiatives of Make in India, Digital India; Start-up
                    India, the Institute in process of setting up an Incubation
                    Centre, so as to support technology and knowledge based
                    entrepreneurship and to provide a platform for speedy
                    commercialization of technologies.
                  </p>

                  <p>
                    Once again, I wish all the students an outstanding,
                    momentous and valuable stay at NIT, Hamirpur and hope that
                    you achieve your destinations/goals and emerge as top-notch
                    engineers, technocrats, educationists or scientists.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-300 clear-both">
                    <p className="font-semibold text-gray-800">
                      Good Luck &apos;n Good Wishes!!
                    </p>
                    <p className="font-semibold text-gray-800">
                      Jai Hind Jai Bharat!!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Priority Statement */}
            <div className="border-t-2 border-[#800000] pt-8 mt-8">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed font-medium">
                  <span className="font-bold text-[#800000]">
                    My prime priority
                  </span>{' '}
                  will be to build National Institute of Technology Hamirpur a
                  world class Institute imparting quality education and
                  promoting excellent research activities, having impact on
                  society and industry globally.
                </p>
              </div>

              <div className="mt-6 text-right">
                <p className="font-semibold text-gray-800">With warm wishes,</p>
                <p className="font-semibold text-gray-800">Director</p>
                <p className="text-gray-700">
                  National Institute of Technology
                </p>
                <p className="text-gray-700">Hamirpur (HP)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
