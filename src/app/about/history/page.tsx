'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '../../components/header31';
import Footer from '../../components/footer';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1986',
    date: '7 August 1986',
    title: 'Establishment',
    description:
      'Regional Engineering College, Hamirpur founded with two departments (Civil & Electrical Engineering) with an intake of 30 students in each.',
  },
  {
    year: '2002',
    date: '26 June 2002',
    title: 'Upgradation to NIT',
    description:
      'REC Hamirpur was awarded the status of Deemed University and upgraded to National Institute of Technology.',
  },
  {
    year: '2007',
    date: '5 June 2007',
    title: 'National Importance Status',
    description:
      'NIT Hamirpur was recognized as an Institute of National Importance under the National Institutes of Technology Act, 2007.',
  },
  {
    year: '2007',
    date: '15 August 2007',
    title: 'Act Enforced',
    description:
      'The NIT Act provisions came into effect on 15 August 2007 via notification S.O. 1384(E) by the MHRD.',
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Page />

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
            <span className="text-gray-400">About</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">History</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#800000] via-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center py-24 md:py-32 px-6 md:px-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Our History
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            From our establishment in 1986 to becoming an Institute of National
            Importance — a journey of excellence and growth.
          </p>
        </motion.div>
      </section>

      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto space-y-4"
            >
              <p>
                National Institute of Technology Hamirpur (NIT Hamirpur) is one
                of the thirty-one NITs of India. It came into existence on{' '}
                <span className="font-semibold text-[#800000]">
                  7th August 1986
                </span>{' '}
                as Regional Engineering College (REC) — a joint and cooperative
                enterprise of the Government of India and the Government of
                Himachal Pradesh.
              </p>
              <p>
                At the time of its inception, the Institute had only two
                departments:
              </p>
              <div className="flex justify-center gap-8 mt-6 mb-6">
                <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
                  <span className="font-semibold text-[#800000]">
                    Civil Engineering
                  </span>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
                  <span className="font-semibold text-[#800000]">
                    Electrical Engineering
                  </span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                with an initial intake of 30 students in each.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              Journey Through Time
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Key milestones in our journey from REC to NIT
            </p>
          </motion.div>

          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#631012] via-[#8B1E1E] to-[#631012]"></div>

            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={isLeft ? fadeInLeft : fadeInRight}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                    delay: index * 0.2,
                  }}
                  className={`relative flex items-center mb-16 ${
                    isLeft ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                  >
                    <motion.div
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="mb-3">
                        <span className="inline-block bg-[#631012] text-white px-4 py-1 rounded-full text-sm font-semibold">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[#631012] font-medium mb-3">
                        {event.date}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#631012] rounded-full border-4 border-white shadow-lg z-10"></div>
                </motion.div>
              );
            })}
          </div>

          <div className="md:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#631012] via-[#8B1E1E] to-[#631012]"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: index * 0.15,
                }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                <div className="absolute left-4 top-0 w-5 h-5 bg-[#800000] rounded-full border-4 border-white shadow-lg z-10"></div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-5 border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-2">
                    <span className="inline-block bg-[#800000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#800000] font-medium mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {event.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#800000]/5 text-[#800000] text-sm font-semibold rounded-full mb-4">
              Transformation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Journey of Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From humble beginnings to national recognition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#631012] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#631012]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#631012]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  The Beginning
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#631012] rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">2 Departments:</span> Civil
                    & Electrical Engineering
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#631012] rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">60 Students</span> in the
                    first batch
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#631012] rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Regional Status:</span> REC
                    Hamirpur
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#631012] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#631012]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#631012]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Today</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#631012] rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Multiple Programs:</span>{' '}
                    UG, PG & Doctoral
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#631012] rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Diverse Disciplines:</span>{' '}
                    Engineering & Sciences
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#631012] rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">National Importance:</span>{' '}
                    Premier Technical Institution
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-r from-[#631012] to-[#8B1E1E] rounded-2xl shadow-2xl p-8 md:p-10 text-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold mb-3">
                  Continuing the Legacy
                </h4>
                <p className="text-white/90 leading-relaxed">
                  The transformation from REC to NIT and its recognition as an
                  Institute of National Importance marks significant milestones
                  in our journey toward academic excellence. Today, we continue
                  to contribute to the nation&apos;s technological advancement
                  through quality education, cutting-edge research, and
                  innovation that shapes the future.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
