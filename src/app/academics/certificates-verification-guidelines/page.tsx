'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { CreditCard, AlertCircle, Mail } from 'lucide-react';

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const verificationFees = [
  {
    slNo: 1,
    name: 'Verification Certificate (within India)',
    fee: 'Rs. 1000/-',
  },
  { slNo: 2, name: 'Verification Certificate (outside India)', fee: '$100/-' },
  {
    slNo: 3,
    name: 'Verification through Govt./Govt. Aided Institution/Agency',
    fee: 'No Charges',
  },
];

const transcriptFees = [
  {
    slNo: 1,
    name: 'Transcript Certificate (within India)',
    fee: 'Rs. 2000/- per copy',
  },
  {
    slNo: 2,
    name: 'Transcript Certificate (outside India)',
    fee: 'Rs. 5000/- per copy',
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
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
            <span className="text-gray-400">Academics</span>
            <span>›</span>
            <span className="text-[#800000] font-medium">
              Guidelines for Certificates Verification
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Guidelines for Certificates Verification
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Procedure for verification of educational certificates, transcript
              issuance and related charges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Verification Procedure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
          >
            <div className="bg-[#800000] px-6 py-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                Procedure for Verification of Educational Certificate
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-3 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Send the verification request to the Assistant Registrar
                    (EEC), NIT, Hamirpur (HP) by letter or fax on{' '}
                    <strong>01972-223834 / 222584</strong>, or by email to{' '}
                    <a
                      href="mailto:ar-acad@nith.ac.in"
                      className="text-[#800000] hover:underline"
                    >
                      ar-acad@nith.ac.in
                    </a>{' '}
                    (CC:{' '}
                    <a
                      href="mailto:certificate-acad@nith.ac.in"
                      className="text-[#800000] hover:underline"
                    >
                      certificate-acad@nith.ac.in
                    </a>
                    ).
                  </li>
                  <li>
                    Attach photostat copies of the educational certificates with
                    the request.
                  </li>
                  <li>
                    The verification will be intimated to the requester within
                    three to five days from receipt of the request.
                  </li>
                  <li>
                    The verification can be faxed to the requester if a fax
                    number is provided.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Verification Charges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-[#800000] to-[#631012] px-6 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Charges for Verification Certificate
              </h2>
            </div>
            <div className="p-6 md:p-8">
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200 w-20">
                        Sl. No.
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200">
                        Description
                      </th>
                      <th className="px-4 py-4 text-right text-sm font-bold text-gray-700 border-b-2 border-gray-200 w-40">
                        Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {verificationFees.map((item) => (
                      <tr
                        key={item.slNo}
                        className="hover:bg-[#800000]/5 transition-colors duration-200"
                      >
                        <td className="px-4 py-4 text-sm text-gray-600 border-b border-gray-100">
                          {item.slNo}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 border-b border-gray-100">
                          {item.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-right font-semibold text-[#800000] border-b border-gray-100">
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-4">
                {verificationFees.map((item) => (
                  <div
                    key={item.slNo}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">
                        #{item.slNo}
                      </span>
                      <span className="text-sm font-bold text-[#800000]">
                        {item.fee}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Transcript Procedure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
          >
            <div className="bg-[#800000] px-6 py-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                Procedure for Issue of Transcript Certificate
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-3 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Send the request for a Transcript Certificate to the
                    Assistant Registrar (EEC), NIT, Hamirpur (HP) by letter or
                    fax on <strong>01972-223834 / 222584</strong>, or by email
                    to{' '}
                    <a
                      href="mailto:ar-acad@nith.ac.in"
                      className="text-[#800000] hover:underline"
                    >
                      ar-acad@nith.ac.in
                    </a>{' '}
                    (CC:{' '}
                    <a
                      href="mailto:certificate-acad@nith.ac.in"
                      className="text-[#800000] hover:underline"
                    >
                      certificate-acad@nith.ac.in
                    </a>
                    ).
                  </li>
                  <li>
                    Attach photostat copies of all semester grade sheets with
                    the request.
                  </li>
                  <li>
                    The Transcript will be issued within seven to ten days from
                    receipt of the request.
                  </li>
                  <li>
                    The Transcript can be faxed to the requester if a fax number
                    is provided.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Transcript Charges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-[#800000] to-[#631012] px-6 py-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Charges for Issue of Transcript Certificate
              </h2>
            </div>
            <div className="p-6 md:p-8">
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200 w-20">
                        Sl. No.
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200">
                        Description
                      </th>
                      <th className="px-4 py-4 text-right text-sm font-bold text-gray-700 border-b-2 border-gray-200 w-40">
                        Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transcriptFees.map((item) => (
                      <tr
                        key={item.slNo}
                        className="hover:bg-[#800000]/5 transition-colors duration-200"
                      >
                        <td className="px-4 py-4 text-sm text-gray-600 border-b border-gray-100">
                          {item.slNo}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 border-b border-gray-100">
                          {item.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-right font-semibold text-[#800000] border-b border-gray-100">
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-4">
                {transcriptFees.map((item) => (
                  <div
                    key={item.slNo}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500">
                        #{item.slNo}
                      </span>
                      <span className="text-sm font-bold text-[#800000]">
                        {item.fee}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
