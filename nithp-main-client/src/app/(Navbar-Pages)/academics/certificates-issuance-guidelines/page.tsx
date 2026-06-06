'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { CreditCard, AlertCircle, Mail, Home } from 'lucide-react';

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const certificateFees = [
  { slNo: 1, name: 'Bonafide Certificate', fee: 'Rs. 500' },
  { slNo: 2, name: 'Character Certificate', fee: 'Rs. 500' },
  { slNo: 3, name: 'Migration Certificate', fee: 'Rs. 2000' },
  { slNo: 4, name: 'Transcript (within India)', fee: 'Rs. 2000 per copy' },
  { slNo: 5, name: 'Transcript (outside India)', fee: 'Rs. 5000 per copy' },
  {
    slNo: 6,
    name: 'Misc. (Backlog, Rank, Verification/Attestation of DMC/Degree, etc.)',
    fee: 'Rs. 500 each',
  },
  {
    slNo: 7,
    name: 'Duplicate Grade Card / Duplicate Provisional Degree Certificate / Degree Certificate',
    fee: 'Rs. 1000 each',
  },
  { slNo: 8, name: 'Medium of Instruction Certificate', fee: 'Rs. 500' },
  { slNo: 9, name: 'Verification of Degree (within India)', fee: 'Rs. 1000' },
  { slNo: 10, name: 'Verification of Degree (outside India)', fee: '$100' },
  {
    slNo: 11,
    name: 'Verification through Govt./Govt.-Aided Institutions',
    fee: 'No Charges',
  },
];

export default function Page() {
  return (
    <>
      <Header />

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
              Guidelines for Certificate Issuance
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
              Guidelines for Certificate Issuance
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              This page provides procedures and charges for issuance of various
              certificates and documents.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <div>
            <div className="prose max-w-none space-y-8">
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
                    Procedure for Issue of Duplicate Degree Certificate
                  </h2>
                </div>
                <div className="p-6">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                      Register an F.I.R. for loss of Detailed Marks Card /
                      Semester Grade Report / Degree.
                    </li>
                    <li>
                      After waiting 15 days, advertise the loss in a National
                      daily newspaper.
                    </li>
                    <li>
                      Apply with a copy of the newspaper cutting to:
                      <div className="mt-2 ml-6 text-sm">
                        <p>
                          <span className="font-medium">To:</span>{' '}
                          <a
                            href="mailto:ar-acad@nith.ac.in"
                            className="text-[#800000] hover:underline"
                          >
                            ar-acad@nith.ac.in
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">CC:</span>{' '}
                          <a
                            href="mailto:certificate-acad@nith.ac.in"
                            className="text-[#800000] hover:underline"
                          >
                            certificate-acad@nith.ac.in
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      Submit an affidavit on Non-Judicial stamp paper of
                      Rs.10/-.
                    </li>
                    <li>
                      Deposit/remit the requisite fee in cash to the Cashier or
                      via Bank Draft in favour of Registrar, NIT Hamirpur (HP).
                    </li>
                    <li>
                      Duplicate Degree Certificate will be issued by the
                      Registrar (or Director-cum-Chairman, Senate in absence).
                    </li>
                    <li>
                      Duplicate degree will be prepared like the original, with
                      &quot;Sd/-&quot; in place of signature.
                    </li>
                  </ol>
                </div>
              </motion.div>

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
                    Procedure for Issue of Duplicate Detailed Marks Cards /
                    Semester Grade Reports
                  </h2>
                </div>
                <div className="p-6">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Issued by the Academic Section.</li>
                    <li>Submission of F.I.R. copy in case of loss.</li>
                    <li>Payment of requisite fee.</li>
                    <li>
                      Apply to:
                      <div className="mt-2 ml-6 text-sm">
                        <p>
                          <span className="font-medium">To:</span>{' '}
                          <a
                            href="mailto:ar-acad@nith.ac.in"
                            className="text-[#800000] hover:underline"
                          >
                            ar-acad@nith.ac.in
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">CC:</span>{' '}
                          <a
                            href="mailto:certificate-acad@nith.ac.in"
                            className="text-[#800000] hover:underline"
                          >
                            certificate-acad@nith.ac.in
                          </a>
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </motion.div>

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
                    Procedure for Issue of Migration Certificate
                  </h2>
                </div>
                <div className="p-6">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Issued by the Academic Section.</li>
                    <li>Submission of application along with requisite fee.</li>
                    <li>
                      Apply to:
                      <div className="mt-2 ml-6 text-sm">
                        <p>
                          <span className="font-medium">To:</span>{' '}
                          <a
                            href="mailto:ar-acad@nith.ac.in"
                            className="text-[#800000] hover:underline"
                          >
                            ar-acad@nith.ac.in
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">CC:</span>{' '}
                          <a
                            href="mailto:certificate-acad@nith.ac.in"
                            className="text-[#800000] hover:underline"
                          >
                            certificate-acad@nith.ac.in
                          </a>
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </motion.div>

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
                    Charges for Issue of Certificates / Documents
                  </h2>
                </div>
                <div className="p-6 md:p-8">
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200 rounded-tl-lg w-20">
                            Sl. No.
                          </th>
                          <th className="px-4 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200">
                            Name of Certificate / Document
                          </th>
                          <th className="px-4 py-4 text-right text-sm font-bold text-gray-700 border-b-2 border-gray-200 rounded-tr-lg w-40">
                            Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {certificateFees.map((item, index) => (
                          <tr
                            key={item.slNo}
                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-[#800000]/5 transition-colors duration-200`}
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
                    {certificateFees.map((item) => (
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

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInScale}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-200 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-amber-800 mb-2">
                        Important Note
                      </h3>
                      <p className="text-amber-900/80 leading-relaxed">
                        However, these formalities are not required in case one
                        is applying for the aforesaid documents on account of
                        mutilation of document. Then he/she is required to
                        attach mutilated certificate/document with his
                        application and requisite fee.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
