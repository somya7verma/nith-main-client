'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Page from '../../components/header31';
import Footer from '../../components/footer';

const MapPinIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const MountainIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3l3.057-3L11 4l2.943-4 2.943 4L20 1l-2 6h-8L9 4z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l4 9h10l4-9-3-5-4 7-3-7-4 5z"
    />
  </svg>
);

const RouteIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
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

interface CityInfoCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AboutCityPage() {
  const cityInfo: CityInfoCard[] = [
    {
      icon: <MapPinIcon />,
      title: 'Location',
      subtitle: 'Himachal Pradesh, India',
    },
    {
      icon: <MountainIcon />,
      title: 'Altitude',
      subtitle: '785 metres',
    },
    {
      icon: <RouteIcon />,
      title: 'Connectivity',
      subtitle: 'NH-3 & NH-103',
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
            <span className="text-[#631012] font-medium">About the City</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#631012] mb-6">
              About Hamirpur
            </h1>
            <div className="w-24 h-1 bg-[#631012] mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The eco-friendly educational hub nestled in the Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cityInfo.map((info, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#631012]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#631012]">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#631012] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Hamirpur, the district headquarter, is situated at an
                      altitude of{' '}
                      <span className="font-semibold text-[#631012]">
                        785 meters
                      </span>{' '}
                      in the Himalayan State of Himachal Pradesh, India.
                      Hamirpur is a clean and eco-friendly district and is
                      famous for its{' '}
                      <span className="font-semibold text-[#631012]">
                        high literacy rate
                      </span>
                      .
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#631012] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      Hamirpur City is surrounded by pine tree forest and has a
                      good city infrastructure ranging from Quality Educational
                      Institutions including NIT, State Universities and Skill
                      Learning Centres.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#631012] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      During winter, the climate is cold but pleasant when
                      woolens are required. During summer the maximum
                      temperature is around{' '}
                      <span className="font-semibold text-[#631012]">
                        40 degrees Celsius
                      </span>{' '}
                      and cottons are recommended.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#631012] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      It is a major junction on National Highway 3 while
                      National Highway 103 starts from here. The bulk of the
                      population speaks{' '}
                      <span className="font-semibold">Hindi</span>, with{' '}
                      <span className="font-semibold">English</span> widely
                      understood.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#631012] mb-4">
              Location Map
            </h2>
            <div className="w-20 h-1 bg-[#631012] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-200"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8919045449387!2d76.52076631515635!3d31.456267681398645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb4924f6f56b%3A0x2e7c3c1c6ea930c5!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1635847891234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NIT Hamirpur Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 px-6 bg-gradient-to-br from-[#631012]/5 via-white to-gray-50 overflow-hidden">
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
              City Highlights
            </h2>
            <div className="w-20 h-1 bg-[#631012] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#631012] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#631012]/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-[#631012]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Clean & Green
              </h3>
              <p className="text-gray-600 leading-relaxed">
                An eco-friendly district known for its clean environment and
                sustainable practices
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#631012] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#631012]/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-[#631012]"
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
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                High Literacy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A premier educational hub with renowned institutions and high
                literacy rates
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#631012] hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#631012]/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-[#631012]"
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
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Well Connected
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic junction of NH-3 & NH-103 with excellent road
                connectivity
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
