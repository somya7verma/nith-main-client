'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header31 from '@/app/components/header';
import Footer from '@/app/components/footer';
import { Sparkles, MapPin, Mountain, Route, BookOpen, Map } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

interface CityInfoCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}

export default function AboutCityPage() {
  const cityInfo: CityInfoCard[] = [
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Himachal Pradesh, India',
    },
    {
      icon: Mountain,
      title: 'Altitude',
      subtitle: '785 metres',
    },
    {
      icon: Route,
      title: 'Connectivity',
      subtitle: 'NH-3 & NH-103',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header31 />

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
            <span className="text-[#800000] font-medium">About the City</span>
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
            About Hamirpur
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Set in the peaceful hills of Himachal Pradesh, Hamirpur offers a
            clean, calm, and welcoming environment for all who visit NIT
            Hamirpur. With its friendly community and natural beauty, the city
            creates the perfect backdrop for learning, growth, and new
            beginnings.
          </p>
        </motion.div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              City Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Essential information about Hamirpur&apos;s location and
              characteristics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cityInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInScale}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#800000] to-[#631012] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#800000] transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-gray-600">{info.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Hamirpur, the district headquarter, is situated at an
                    altitude of{' '}
                    <span className="font-semibold text-[#800000]">
                      785 meters
                    </span>{' '}
                    in the Himalayan State of Himachal Pradesh, India. Hamirpur
                    is a clean and eco-friendly district and is famous for its{' '}
                    <span className="font-semibold text-[#800000]">
                      high literacy rate
                    </span>
                    .
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Hamirpur City is surrounded by pine tree forest and has a
                    good city infrastructure ranging from Quality Educational
                    Institutions including NIT, State Universities and Skill
                    Learning Centres.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-5">
                  <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    During winter, the climate is cold but pleasant when woolens
                    are required. During summer the maximum temperature is
                    around{' '}
                    <span className="font-semibold text-[#800000]">
                      40 degrees Celsius
                    </span>{' '}
                    and cottons are recommended.
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-2 h-2 bg-[#800000] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    It is a major junction on National Highway 3 while National
                    Highway 103 starts from here. The bulk of the population
                    speaks <span className="font-semibold">Hindi</span>, with{' '}
                    <span className="font-semibold">English</span> widely
                    understood.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Location Map
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our campus location in the scenic Hamirpur valley
            </p>
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

      <Footer />
    </div>
  );
}
