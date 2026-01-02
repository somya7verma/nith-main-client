'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function NADCellPage() {
  const handleOpen = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.slice(0, 50).replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [activeSection, setActiveSection] = useState('intro');

  const SectionSwitcher = () => {
    const sections = [
      {
        id: 'intro',
        title: 'National Academic Depository (NAD)',
        content: (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              National Academic Depository (NAD)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              National Academic Depository (NAD) is a 24×7 online storehouse of
              academic awards such as certificates, degrees, and mark-sheets,
              duly digitised and lodged by academic institutions, boards, and
              eligibility assessment bodies. NAD ensures easy access, secure
              storage, guaranteed authenticity, and online verification of
              academic awards.
            </p>
          </div>
        ),
      },
      {
        id: 'vision',
        title: 'Vision of NAD',
        content: (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Vision of NAD
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The vision of National Academic Depository (NAD) is born out of an
              initiative to provide an online store house of all academic
              awards. NAD is a 24X7 online store house of all academic awards
              viz. certificates, degrees, mark-sheets etc. duly digitised and
              lodged by academic institutions/ boards/ eligibility assessment
              bodies. NAD not only ensures easy access to and retrieval of an
              academic award but also validates and guarantees its authenticity
              and safe storage.
            </p>
          </div>
        ),
      },
      {
        id: 'about',
        title: 'About NAD',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>
              DigiLocker and NAD are initiatives of the Ministry of Electronics
              and Information Technology (MeitY) and the Ministry of Education
              (formerly MHRD) respectively. NAD was established to provide a
              24×7 online academic depository for academic institutions to store
              and publish academic awards.
            </p>
            <p>
              The digital depository ensures easy access, retrieval,
              authentication, and safe storage of academic awards. DigiLocker
              acts as the service provider for NAD and enables digital
              empowerment of citizens by providing access to authentic digital
              documents.
            </p>
            <p>
              Issued documents in DigiLocker are legally valid and equivalent to
              original physical documents as per Rule 9A of the Information
              Technology Rules, 2016.
            </p>
            <p>
              Maintaining academic awards electronically eliminates the need for
              manual verification, reduces fraudulent practices, and ensures
              authenticity, integrity, and confidentiality of academic records.
            </p>
            <p>
              For more information, visit:{' '}
              <a
                href="https://nad.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#631012] underline"
              >
                nad.gov.in
              </a>
            </p>
          </div>
        ),
      },
      {
        id: 'features',
        title: 'Features of NAD',
        content: (
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Operates fully in online mode</li>
            <li>Allows lodging of academic awards in digital format</li>
            <li>Maintains integrity and confidentiality of records</li>
            <li>Enables students to retrieve awards anytime</li>
            <li>
              Allows employers/verifiers to verify awards with student consent
            </li>
            <li>Guarantees authenticity of academic awards</li>
          </ul>
        ),
      },
      {
        id: 'benefits',
        title: 'Benefits of NAD',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                For Academic Institutions
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Permanent and secure record of academic awards</li>
                <li>No need to issue duplicate certificates</li>
                <li>Deterrence against fake and forged certificates</li>
                <li>Efficient, transparent academic administration</li>
                <li>Secure document gateway for verification</li>
                <li>Real-time verification of academic awards</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">For Students</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Immediate availability of academic awards</li>
                <li>Permanent online access</li>
                <li>No risk of loss or damage</li>
                <li>Legally valid digital documents</li>
                <li>
                  Faster services for education, employment, finance, and
                  government benefits
                </li>
                <li>Single access point for multiple official documents</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                For Verification Users (Employers, Banks, etc.)
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Quick and reliable verification</li>
                <li>Access to authenticated awards</li>
                <li>No forged certificates</li>
                <li>Reduced cost, time, and effort</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: 'roles',
        title: 'Roles & Responsibilities',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Academic Institutions
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide certificate templates and data masters</li>
                <li>Upload academic awards to NAD</li>
                <li>Ensure accuracy of award data</li>
                <li>Identify and train NAD staff</li>
                <li>Digitally sign and verify awards</li>
                <li>Seed awards with Aadhaar / Unique NAD ID</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Students</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Register on NAD via DigiLocker</li>
                <li>Obtain Unique NAD ID (if Aadhaar unavailable)</li>
                <li>Submit Aadhaar / NAD ID to the Institute</li>
                <li>View and access awards anytime</li>
                <li>Approve or reject verification requests</li>
                <li>Share certificates digitally with verifiers</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: 'register',
        title: 'How to Register on NAD',
        content: (
          <div>
            <p className="text-gray-700 leading-relaxed">
              Users must register through DigiLocker, the designated depository
              for NAD.
            </p>
            <p className="mt-3">
              <a
                href="https://accounts.digitallocker.gov.in/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#631012] underline"
              >
                Registration link
              </a>
            </p>
            <p className="mt-1">
              More details:{' '}
              <a
                href="https://digilocker.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#631012] underline"
              >
                digilocker.gov.in
              </a>
            </p>
          </div>
        ),
      },
      {
        id: 'abc',
        title: 'Academic Bank of Credits (ABC)',
        content: (
          <div>
            <p className="text-gray-700 leading-relaxed">
              Academic Bank of Credits (ABC) enables digital storage, transfer,
              and redemption of academic credits, supporting academic mobility
              and flexibility in line with the National Education Policy (NEP).
            </p>
          </div>
        ),
      },
      {
        id: 'videos',
        title: 'NAD Awareness Videos',
        content: (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-600 border-b border-gray-200">
                  <th className="py-3 w-24">Video</th>
                  <th className="py-3">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-3">Video 1</td>
                  <td className="py-3">
                    <a
                      href="https://drive.google.com/file/d/16M5NtNrzqkIiZ506sOdihoWxXU5ptpUJ/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#631012] underline"
                    >
                      https://drive.google.com/file/d/16M5NtNrzqkIiZ506sOdihoWxXU5ptpUJ/view
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">Video 2</td>
                  <td className="py-3">
                    <a
                      href="https://drive.google.com/file/d/18-rJgqlQ3Sm0g7VLpNd-pcL4vj_LFydN/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#631012] underline"
                    >
                      https://drive.google.com/file/d/18-rJgqlQ3Sm0g7VLpNd-pcL4vj_LFydN/view
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">Video 3</td>
                  <td className="py-3">
                    <a
                      href="https://drive.google.com/file/d/18JzX_tbxxRDefidtRfKKeGYZC1oEludl/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#631012] underline"
                    >
                      https://drive.google.com/file/d/18JzX_tbxxRDefidtRfKKeGYZC1oEludl/view
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">Video 4</td>
                  <td className="py-3">
                    <a
                      href="https://drive.google.com/file/d/18jKpwui7qZVzYL9Gn4gmDuoWnGCp1sSf/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#631012] underline"
                    >
                      https://drive.google.com/file/d/18jKpwui7qZVzYL9Gn4gmDuoWnGCp1sSf/view
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: 'notices',
        title: 'NAD Notices',
        content: (
          <div>
            <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">
                      Sl. No.
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Notice
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                      Date
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-52">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-gray-50/80 transition-colors duration-200">
                    <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                      1
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-700">
                      Notice regarding NAD
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-700">
                      29-04-2021
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() =>
                            handleOpen(
                              '/documents/academics/nad-notice-29-04-2021.pdf'
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200"
                        >
                          View
                        </button>
                        <button
                          onClick={() =>
                            handleDownload(
                              '/documents/academics/nad-notice-29-04-2021.pdf',
                              'Notice regarding NAD'
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200"
                        >
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lg:hidden space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Notice regarding NAD
                    </h4>
                    <div className="text-xs text-gray-500 mt-1">
                      Notice • 29-04-2021
                    </div>
                    <div className="text-xs text-gray-600 mt-3">
                      Official communication related to NAD implementation and
                      updates.
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col items-end gap-2">
                    <button
                      onClick={() =>
                        handleOpen(
                          '/documents/academics/nad-notice-29-04-2021.pdf'
                        )
                      }
                      className="text-sm text-[#631012] underline"
                    >
                      View
                    </button>
                    <button
                      onClick={() =>
                        handleDownload(
                          '/documents/academics/nad-notice-29-04-2021.pdf',
                          'Notice regarding NAD'
                        )
                      }
                      className="text-sm bg-[#631012] text-white px-3 py-2 rounded-lg"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'contact',
        title: 'Contact Details',
        content: (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-600 border-b border-gray-200">
                  <th className="py-3 w-8">Sl.</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Position</th>
                  <th className="py-3">Contact Number</th>
                  <th className="py-3">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-3">1</td>
                  <td className="py-3">Dr. Siddhartha Sharma</td>
                  <td className="py-3">Nodal Officer (NAD)</td>
                  <td className="py-3">+91-1972-254006</td>
                  <td className="py-3">nad@nith.ac.in</td>
                </tr>
                <tr>
                  <td className="py-3">2</td>
                  <td className="py-3">Dr. Nitin Gupta</td>
                  <td className="py-3">Assistant Nodal Officer</td>
                  <td className="py-3">+91-1972-254416</td>
                  <td className="py-3">nitin@nith.ac.in</td>
                </tr>
                <tr>
                  <td className="py-3">3</td>
                  <td className="py-3">Dr. Priyanka</td>
                  <td className="py-3">Assistant Nodal Officer</td>
                  <td className="py-3">+91-1972-254401</td>
                  <td className="py-3">dr.priyanka@nith.ac.in</td>
                </tr>
                <tr>
                  <td className="py-3">4</td>
                  <td className="py-3">Dr. Arun Kumar Yadav</td>
                  <td className="py-3">Faculty Incharge (NAD-Uploading)</td>
                  <td className="py-3">+91-1972-254402</td>
                  <td className="py-3">ayadav@nith.ac.in</td>
                </tr>
                <tr>
                  <td className="py-3">5</td>
                  <td className="py-3">Dr. Manender Singh</td>
                  <td className="py-3">Faculty Incharge</td>
                  <td className="py-3">+91-1972-254301</td>
                  <td className="py-3">manendra@nith.ac.in</td>
                </tr>
                <tr>
                  <td className="py-3">6</td>
                  <td className="py-3">Dr. Ram Prakash Sharma</td>
                  <td className="py-3">Assistant Faculty Incharge</td>
                  <td className="py-3">+91-1972-254402</td>
                  <td className="py-3">ram.sharma@nith.ac.in</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-1">
          <div className="bg-white p-4 rounded-2xl shadow-sm sticky top-24">
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${activeSection === s.id ? 'bg-[#631012]/10 text-[#631012]' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {s.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="md:col-span-2">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            {sections.find((s) => s.id === activeSection)?.content}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link
                href="/"
                className="hover:text-[#631012] transition-colors duration-200"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-400">Academics</span>
              <span>›</span>
              <span className="text-[#631012] font-medium">NAD Cell</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                NAD Cell
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                National Academic Depository (NAD) – Secure digital access to
                academic awards
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <main className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <SectionSwitcher />

            {/* NAD Notices */}
            <section
              aria-labelledby="nad-notices"
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3
                id="nad-notices"
                className="text-xl font-semibold text-gray-900 mb-3"
              >
                NAD Notices
              </h3>

              {/* Notices (table for large screens, cards for small screens) */}
              <div>
                <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">
                          Sl. No.
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Notice Title
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                          Category
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">
                          Date
                        </th>
                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-52">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      {/* Static / sample notices - kept simple and consistent */}
                      <tr className="hover:bg-gray-50/80 transition-colors duration-200">
                        <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                          1
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center justify-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#631012]/10 flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-[#631012]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-900">
                                Notice regarding NAD
                              </span>
                              <div className="text-xs text-gray-500 mt-1">
                                Official communication related to NAD
                                implementation and updates.
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-gray-700">
                          Notice
                        </td>
                        <td className="px-6 py-5 text-sm text-gray-700">
                          29-04-2021
                        </td>
                        <td className="px-6 py-5 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() =>
                                handleOpen(
                                  '/documents/academics/nad-notice-29-04-2021.pdf'
                                )
                              }
                              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                              aria-label={`Open Notice regarding NAD`}
                            >
                              <svg
                                className="w-4 h-4"
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
                              View
                            </button>
                            <button
                              onClick={() =>
                                handleDownload(
                                  '/documents/academics/nad-notice-29-04-2021.pdf',
                                  'Notice regarding NAD'
                                )
                              }
                              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                              aria-label={`Download Notice regarding NAD`}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                              Download
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="lg:hidden space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Notice regarding NAD
                        </h4>
                        <div className="text-xs text-gray-500 mt-1">
                          Notice • 29-04-2021
                        </div>
                        <div className="text-xs text-gray-600 mt-3">
                          Official communication related to NAD implementation
                          and updates.
                        </div>
                      </div>

                      <div className="flex-shrink-0 flex flex-col items-end gap-2">
                        <button
                          onClick={() =>
                            handleOpen(
                              '/documents/academics/nad-notice-29-04-2021.pdf'
                            )
                          }
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#631012] bg-[#631012]/10 rounded-lg hover:bg-[#631012]/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                          aria-label={`Open Notice regarding NAD`}
                        >
                          <svg
                            className="w-4 h-4"
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
                          View
                        </button>
                        <button
                          onClick={() =>
                            handleDownload(
                              '/documents/academics/nad-notice-29-04-2021.pdf',
                              'Notice regarding NAD'
                            )
                          }
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#631012] rounded-lg hover:bg-[#7a1a1d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#631012]/50 cursor-pointer"
                          aria-label={`Download Notice regarding NAD`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section
              aria-labelledby="nad-contact"
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3
                id="nad-contact"
                className="text-xl font-semibold text-gray-900 mb-3"
              >
                Contact Details
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-sm text-gray-600 border-b border-gray-200">
                      <th className="py-3 w-8">Sl.</th>
                      <th className="py-3">Name</th>
                      <th className="py-3">Position</th>
                      <th className="py-3">Contact Number</th>
                      <th className="py-3">Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr>
                      <td className="py-3">1</td>
                      <td className="py-3">Dr. Siddhartha Sharma</td>
                      <td className="py-3">Nodal Officer (NAD)</td>
                      <td className="py-3">+91-1972-254006</td>
                      <td className="py-3">nad@nith.ac.in</td>
                    </tr>
                    <tr>
                      <td className="py-3">2</td>
                      <td className="py-3">Dr. Nitin Gupta</td>
                      <td className="py-3">Assistant Nodal Officer</td>
                      <td className="py-3">+91-1972-254416</td>
                      <td className="py-3">nitin@nith.ac.in</td>
                    </tr>
                    <tr>
                      <td className="py-3">3</td>
                      <td className="py-3">Dr. Priyanka</td>
                      <td className="py-3">Assistant Nodal Officer</td>
                      <td className="py-3">+91-1972-254401</td>
                      <td className="py-3">dr.priyanka@nith.ac.in</td>
                    </tr>
                    <tr>
                      <td className="py-3">4</td>
                      <td className="py-3">Dr. Arun Kumar Yadav</td>
                      <td className="py-3">Faculty Incharge (NAD-Uploading)</td>
                      <td className="py-3">+91-1972-254402</td>
                      <td className="py-3">ayadav@nith.ac.in</td>
                    </tr>
                    <tr>
                      <td className="py-3">5</td>
                      <td className="py-3">Dr. Manender Singh</td>
                      <td className="py-3">Faculty Incharge</td>
                      <td className="py-3">+91-1972-254301</td>
                      <td className="py-3">manendra@nith.ac.in</td>
                    </tr>
                    <tr>
                      <td className="py-3">6</td>
                      <td className="py-3">Dr. Ram Prakash Sharma</td>
                      <td className="py-3">Assistant Faculty Incharge</td>
                      <td className="py-3">+91-1972-254402</td>
                      <td className="py-3">ram.sharma@nith.ac.in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
