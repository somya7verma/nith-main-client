'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header31 from '@/app/components/header3';
import Footer from '@/app/components/footer';
import { Sparkles, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function VisitorPage() {
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
            <span className="text-[#800000] font-medium">Visitor</span>
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
            Visitor
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Official Visitor of the Institute
          </p>
        </motion.div>
      </section>

      {/* Visitor details separated into its own section */}
      <section className="relative py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Image area */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-2xl overflow-hidden mx-auto">
                  <Image
                    src="/images/visitor.jpg"
                    alt="Visitor"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                  Smt. Droupadi Murmu
                </h2>

                <p className="text-gray-700 mb-3">
                  Her Excellency Honorable Smt. Droupadi Murmu, The President of
                  India, is the ex officio visitor of the Institute.
                </p>

                <p className="text-gray-600 mb-6">
                  Official Website of Visitor
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    href="https://presidentofindia.nic.in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-[#800000] text-white font-semibold rounded-2xl hover:shadow-md transition-all duration-200"
                  >
                    Official Portal
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="text-sm text-gray-500">
                    For formal communications, please use the President&apos;s
                    official channels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <Sparkles className="w-10 h-10 text-[#800000] mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect with the Office
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
            For formal communications related to the Visitor&apos;s oversight,
            please use the official channels provided on the President&apos;s
            website.
          </p>

          <div className="flex justify-center">
            <Link
              href="https://presidentofindia.nic.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#800000] text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              Official Portal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
