'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '../../components/header31';
import Footer from '../../components/footer';

const ShieldCheckIcon = () => (
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
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const TrophyIcon = () => (
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
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
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

const ClipboardCheckIcon = () => (
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
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
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

const HeartHandshakeIcon = () => (
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
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CoreValuesPage() {
  const coreValues: CoreValue[] = [
    {
      icon: <ShieldCheckIcon />,
      title: 'Integrity',
      description:
        'To be honest in intention, fair in evaluation, transparent in deeds, and adhere to the highest standards of ethics in all its activities.',
    },
    {
      icon: <TrophyIcon />,
      title: 'Excellence',
      description:
        'A relentless commitment to continuous improvement, innovation, and pursuit of best practices in education, research, and institutional performance.',
    },
    {
      icon: <UsersIcon />,
      title: 'Unity',
      description:
        'Building capacity through trust, collaboration, and respect for others — fostering a culture of teamwork and inclusivity as the foundation of collective success.',
    },
    {
      icon: <ClipboardCheckIcon />,
      title: 'Accountability',
      description:
        "To uphold responsibility in all academic and administrative processes, ensuring transparency, responsiveness, and reliability across the institute's functioning.",
    },
    {
      icon: <GlobeIcon />,
      title: 'Inclusivity',
      description:
        'Embracing diversity by providing equal opportunities for all — irrespective of gender, culture, region, or background — fostering an environment of belonging and respect.',
    },
    {
      icon: <HeartHandshakeIcon />,
      title: 'Empathy',
      description:
        'Encouraging compassion and understanding toward others, valuing well-being, and nurturing a supportive academic and social ecosystem.',
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
            <span className="text-[#631012] font-medium">Core Values</span>
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#631012] mb-6 tracking-wide uppercase">
              Core Values
            </h1>
            <div className="w-24 h-1 bg-[#631012] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mt-4 leading-relaxed text-lg">
              The core values adopted by the Institute as enduring principles
              are <span className="font-semibold">Integrity</span>,{' '}
              <span className="font-semibold">Excellence</span>,{' '}
              <span className="font-semibold">Unity</span>,{' '}
              <span className="font-semibold">Accountability</span>,{' '}
              <span className="font-semibold">Inclusivity</span>, and{' '}
              <span className="font-semibold">Empathy</span>.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Our Guiding Principles
            </h2>
            <div className="h-1 w-16 bg-[#631012] mx-auto rounded"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {coreValues.map((value, index) => (
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
                  y: -8,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-2xl transition-all duration-300 border-l-4 border-l-[#631012]"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: 'spring', stiffness: 400 },
                  }}
                  className="bg-[#631012] text-white p-3 rounded-lg w-fit"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-br from-[#631012]/5 via-white to-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#631012]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#631012] mb-4">
              Our Vision in Action
            </h2>
            <div className="w-20 h-1 bg-[#631012] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#631012] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  At NIT Hamirpur, these core values are not just statements —
                  they are the foundation of our daily academic and
                  administrative life. They guide our decisions, shape our
                  culture, and inspire our community to strive for excellence.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#631012] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  From fostering innovation in research to creating an inclusive
                  environment for students from diverse backgrounds, we
                  integrate these principles into every aspect of institutional
                  functioning.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#631012] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to accountability ensures transparency in
                  governance, while empathy drives us to support the holistic
                  development of every member of our academic family.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 italic">
                  Together, these values create a vibrant, ethical, and
                  progressive institution dedicated to shaping future leaders
                  and innovators.
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
