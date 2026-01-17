'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ChairpersonPage() {
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
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Chairperson
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Office bearers and leadership of the Institute
          </p>
        </motion.div>
      </section>

      <section className="relative py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                  Shri Sanjay Gupta
                </h2>

                <p className="text-gray-700 mb-4">Shri Sanjay Gupta</p>

                <ul className="text-gray-600 space-y-2">
                  <li>Editor-in-Chief of Dainik Jagran – New Delhi</li>
                  <li>Chairman, IIM Amritsar – Punjab</li>
                  <li>Chairman, NIT Hamirpur – Himachal Pradesh</li>
                </ul>

                <div className="mt-6 border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Chairman&apos;s Message
                  </h3>

                  <p className="text-gray-700 mb-3">
                    Shri Sanjay Gupta warmly welcomes you to the Institute. His
                    leadership emphasises collaboration between academia and
                    industry, excellence in education, and a strong commitment
                    to community development.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-100 rounded-2xl overflow-hidden mx-auto">
                  <Image
                    src="/images/chairperson.jpg"
                    alt="Shri Sanjay Gupta"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
