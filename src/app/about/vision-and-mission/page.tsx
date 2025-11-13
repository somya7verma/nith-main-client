'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '../../components/header31';
import Footer from '../../components/footer';

const EyeIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const LightbulbIcon = () => (
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
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const BeakerIcon = () => (
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
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
);

const UsersIcon = () => (
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
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const HeartIcon = () => (
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
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const GlobeIcon = () => (
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
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

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

const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

interface Mission {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function VisionMissionPage() {
  const missions: Mission[] = [
    {
      icon: <LightbulbIcon />,
      title: 'Academic Excellence',
      description:
        'To provide high-quality technical education and foster an environment that encourages curiosity, creativity, and lifelong learning.',
    },
    {
      icon: <BeakerIcon />,
      title: 'Research & Innovation',
      description:
        'To promote cutting-edge research and innovation that contributes to sustainable technological and social development.',
    },
    {
      icon: <UsersIcon />,
      title: 'Holistic Development',
      description:
        'To cultivate ethical values, leadership qualities, and teamwork among students for personal and professional excellence.',
    },
    {
      icon: <HeartIcon />,
      title: 'Social Contribution',
      description:
        'To leverage technology and knowledge in service of society, addressing real-world challenges with compassion and responsibility.',
    },
    {
      icon: <GlobeIcon />,
      title: 'Global Competence',
      description:
        'To build collaborations with academic and research institutions globally for knowledge exchange and innovation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Page />

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#631012] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-400">About</span>
            <span>/</span>
            <span className="text-[#631012] font-medium">Vision & Mission</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#631012]/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#631012] tracking-wide uppercase mb-6">
              Vision & Mission
            </h1>
            <div className="w-24 h-1 bg-[#631012] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-center max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              At the National Institute of Technology Hamirpur, our vision and
              mission define our commitment to academic excellence, research
              innovation, and holistic human development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 px-6 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInScale}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.02,
              transition: { type: 'spring', stiffness: 300 },
            }}
            className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all p-8 md:p-12 flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: 'spring', stiffness: 400 },
              }}
              className="text-[#631012] mb-6"
            >
              <EyeIcon />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
              Our Vision
            </h2>

            <div className="relative">
              <svg
                className="absolute -left-6 -top-4 w-12 h-12 text-[#631012]/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic px-8">
                To build a center of excellence in technical education and
                research that fosters innovation, critical thinking, and
                societal growth — empowering students to lead with vision,
                wisdom, and integrity.
              </p>
              <svg
                className="absolute -right-6 -bottom-4 w-12 h-12 text-[#631012]/20 rotate-180"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#631012]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-center text-[#631012] uppercase tracking-wide mb-4">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-[#631012] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInScale}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -6,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                    transition: { type: 'spring', stiffness: 400 },
                  }}
                  className="text-[#631012] mt-1 flex-shrink-0"
                >
                  {mission.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-r from-[#631012] to-[#8B1E1E] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDJ2MTJoLTJ2LTEyaDJ6bTAgMTRjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Innovation. Integrity. Impact.
            </h3>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Empowering minds, building futures, and advancing humanity through
              technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#631012]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#631012] mb-4">
              At a Glance
            </h2>
            <div className="w-20 h-1 bg-[#631012] mx-auto rounded-full mb-3"></div>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Key milestones and achievements that define our excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center border-l-4 border-[#631012] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#631012]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#631012]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#631012] mb-3">
                1986
              </div>
              <p className="text-gray-600 font-medium">Established</p>
              <p className="text-gray-500 text-xs mt-2">Legacy of Excellence</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center border-l-4 border-[#631012] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#631012]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#631012]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#631012] mb-3">
                5000+
              </div>
              <p className="text-gray-600 font-medium">Students</p>
              <p className="text-gray-500 text-xs mt-2">
                Bright Minds Learning
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center border-l-4 border-[#631012] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#631012]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#631012]"
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
              <div className="text-4xl md:text-5xl font-bold text-[#631012] mb-3">
                200+
              </div>
              <p className="text-gray-600 font-medium">Faculty Members</p>
              <p className="text-gray-500 text-xs mt-2">Expert Educators</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center border-l-4 border-[#631012] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#631012]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#631012]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#631012] mb-3">
                20+
              </div>
              <p className="text-gray-600 font-medium">Departments</p>
              <p className="text-gray-500 text-xs mt-2">Diverse Disciplines</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
