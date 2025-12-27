'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

// NOTE: In production, replace the static `accordionData` with CMS / API driven content.
// Each item should include `documentUrl` coming from the backend and a unique `id`.
interface SyllabusItem {
  id: string;
  title: string;
  documentUrl?: string | null;
  children?: SyllabusItem[];
}

const accordionData: SyllabusItem[] = [
  {
    id: 'new-curriculum',
    title: 'New Curriculum',
    children: [
      {
        id: 'new-btech-nep-2024',
        title:
          'B.Tech. Course Structure and Syllabus as per NEP-2020 for Second Year onwards (2024)',
        documentUrl: '/documents/syllabus/new-btech-nep-2024.pdf',
      },
      {
        id: 'minor-cs-nep',
        title:
          'Course Structure and Syllabus as per NEP-2020 for Minor Degree Programme in Computer Science and Engineering',
        documentUrl: '/documents/syllabus/minor-cs-nep.pdf',
      },
      {
        id: 'btech-cse-nep',
        title:
          'Course Structure and Syllabus as per NEP-2020 for Bachelor of Technology in Computer Science and Engineering',
        documentUrl: '/documents/syllabus/btech-cse-nep.pdf',
      },
      {
        id: 'barch-teaching-2023',
        title:
          'B.Arch. Teaching Scheme, Course Structure & Syllabus w.e.f. Academic Year 2023-24 onwards',
        documentUrl: '/documents/syllabus/barch-2023.pdf',
      },
      {
        id: 'btech-firstyear-nep-2023',
        title:
          'B.Tech First Year Curriculum as per NEP-2020 (July 2023 onwards)',
        documentUrl: '/documents/syllabus/btech-firstyear-2023.pdf',
      },
    ],
  },
  {
    id: 'curriculum-2019',
    title: 'Curriculum (2019 Onwards)',
    children: [
      {
        id: 'first-year-2019',
        title:
          'Course Curriculum for First Year Bachelor Programmes (2019 onwards)',
        documentUrl: '/documents/syllabus/first-year-2019.pdf',
      },
      {
        id: 'second-year-2019',
        title:
          'Course Curriculum for Second Year and onwards Bachelor Programmes (2019 onwards)',
        children: [
          {
            id: 'cse-2019',
            title: 'Computer Science and Engineering',
            documentUrl: '/documents/syllabus/cse-2019.pdf',
          },
          {
            id: 'civil-2019',
            title: 'Civil Engineering',
            documentUrl: '/documents/syllabus/civil-2019.pdf',
          },
          {
            id: 'chem-2019',
            title: 'Chemical Engineering',
            documentUrl: '/documents/syllabus/chem-2019.pdf',
          },
          {
            id: 'ece-2019',
            title: 'Electronics & Communication Engineering',
            documentUrl: '/documents/syllabus/ece-2019.pdf',
          },
          {
            id: 'ee-2019',
            title: 'Electrical Engineering',
            documentUrl: '/documents/syllabus/ee-2019.pdf',
          },
          {
            id: 'me-2019',
            title: 'Mechanical Engineering',
            documentUrl: '/documents/syllabus/me-2019.pdf',
          },
          {
            id: 'mse-2019',
            title: 'Materials Science and Engineering',
            documentUrl: '/documents/syllabus/mse-2019.pdf',
          },
          {
            id: 'maths-2019',
            title: 'Mathematics and Scientific Computing',
            documentUrl: '/documents/syllabus/maths-2019.pdf',
          },
          {
            id: 'pps-2019',
            title: 'Physics and Photonics Science',
            documentUrl: '/documents/syllabus/pps-2019.pdf',
          },
          {
            id: 'barch-2019',
            title: 'B.Arch.',
            documentUrl: '/documents/syllabus/barch-2019.pdf',
          },
        ],
      },
    ],
  },
  {
    id: 'open-electives',
    title: 'Open Elective Courses',
    children: [
      {
        id: 'open-3rd-year',
        title: 'Open Elective Courses for Third Year Bachelor Programmes',
        documentUrl: '/documents/syllabus/open-3rd.pdf',
      },
      {
        id: 'open-various',
        title:
          'Open Elective Courses Offered by Various Departments (5th and 6th Semesters)',
        documentUrl: '/documents/syllabus/open-various.pdf',
      },
      {
        id: 'open-hss',
        title:
          'Additional Open Elective Courses by Department of Humanities and Social Sciences',
        documentUrl: '/documents/syllabus/open-hss.pdf',
      },
    ],
  },
  {
    id: 'old-curriculum',
    title: 'Old Curriculum',
    children: [
      {
        id: 'civil-old',
        title: 'Department of Civil Engineering',
        children: [
          {
            id: 'civil-2014-syllabus',
            title: 'B.Tech Syllabus (2014 onwards) – Semester I to VIII',
            documentUrl: '/documents/syllabus/civil-2014.pdf',
          },
        ],
      },
      {
        id: 'mech-old',
        title: 'Department of Mechanical Engineering',
        children: [
          {
            id: 'mech-scheme-2014',
            title: 'Scheme (w.e.f. 2014) – First to Fourth Year',
            documentUrl: '/documents/syllabus/mech-2014-scheme.pdf',
          },
          {
            id: 'mech-old-2011',
            title: 'Old Scheme (w.e.f. 2011) – Semester I to VIII',
            documentUrl: '/documents/syllabus/mech-2011-old.pdf',
          },
        ],
      },
      // ... more department entries
      {
        id: 'arch-old',
        title: 'Department of Architecture',
        children: [
          {
            id: 'barch-scheme-syllabus',
            title: 'B.Arch. – Scheme & Syllabus',
            documentUrl: '/documents/syllabus/barch-old.pdf',
          },
        ],
      },
    ],
  },
];

const mastersData: SyllabusItem[] = [
  {
    id: 'masters-civil',
    title: 'Department of Civil Engineering',
    documentUrl: null,
  },
  {
    id: 'masters-mech',
    title: 'Department of Mechanical Engineering',
    documentUrl: null,
  },
  {
    id: 'masters-mse',
    title: 'Department of Material Science & Engineering',
    documentUrl: null,
  },
  {
    id: 'masters-chemical',
    title: 'Department of Chemical Engineering',
    documentUrl: null,
  },
  {
    id: 'masters-ee',
    title: 'Department of Electrical Engineering',
    documentUrl: null,
  },
  {
    id: 'masters-ece',
    title: 'Department of Electronics & Communication Engineering',
    documentUrl: null,
  },
  {
    id: 'masters-cse',
    title: 'Department of Computer Science and Engineering',
    documentUrl: null,
  },
  {
    id: 'masters-chemistry',
    title: 'Department of Chemistry',
    documentUrl: null,
  },
  {
    id: 'masters-pps',
    title: 'Department of Physics and Photonics Science',
    documentUrl: null,
  },
  {
    id: 'masters-maths',
    title: 'Department of Mathematics and Scientific Computing',
    documentUrl: null,
  },
  {
    id: 'masters-mba',
    title: 'Department of Management Studies',
    documentUrl: null,
  },
  {
    id: 'masters-arch',
    title: 'Department of Architecture',
    documentUrl: null,
  },
  {
    id: 'centre-energy-studies',
    title: 'Centre for Energy Studies',
    documentUrl: null,
  },
];

export default function CourseStructureSyllabus() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleView = (item: SyllabusItem) => {
    if (!item.documentUrl) return;
    window.open(item.documentUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (item: SyllabusItem) => {
    if (!item.documentUrl) return;
    const link = document.createElement('a');
    link.href = item.documentUrl;
    link.download = `${item.title.slice(0, 80).replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderItems = (items: SyllabusItem[], level = 1) => {
    return items.map((item) => (
      <div
        key={item.id}
        className={`border border-gray-200 rounded-lg overflow-hidden bg-white ${level === 1 ? 'rounded-2xl' : 'rounded-lg'}`}
      >
        <button
          className="w-full text-left px-4 md:px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors focus:outline-none"
          onClick={() => toggle(item.id)}
          aria-expanded={!!openIds[item.id]}
          aria-controls={`${item.id}-panel`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle(item.id);
            }
          }}
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#631012]/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#631012]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm md:text-base font-medium text-gray-900">
                {item.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleView(item);
                }}
                disabled={!item.documentUrl}
                className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${item.documentUrl ? 'text-[#631012] bg-[#631012]/10 hover:bg-[#631012]/20' : 'text-gray-400 bg-gray-50 cursor-not-allowed'}`}
                aria-label={`View ${item.title}`}
              >
                View
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(item);
                }}
                disabled={!item.documentUrl}
                className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${item.documentUrl ? 'text-white bg-[#631012] hover:bg-[#7a1a1d]' : 'text-gray-400 bg-gray-100 cursor-not-allowed'}`}
                aria-label={`Download ${item.title}`}
              >
                Download
              </button>
            </div>

            <svg
              className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${openIds[item.id] ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {openIds[item.id] && (
            <motion.div
              id={`${item.id}-panel`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="px-4 md:px-6 pb-4 pt-2"
            >
              {item.children && item.children.length > 0 ? (
                <div className={`space-y-3 ${level === 1 ? 'mt-3' : ''}`}>
                  {renderItems(item.children, level + 1)}

                  {item.id === 'old-curriculum' && (
                    <div className="mt-3 px-3 py-3 bg-gray-50 rounded-md border border-gray-100 flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Looking for archived syllabi? We have consolidated older
                        curriculum documents for departmental access.
                      </p>
                      <a
                        href="#old-curriculum-syllabus"
                        className="text-sm text-[#631012] underline"
                      >
                        Click here to get SYLLABUS
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
                  <p className="text-sm text-gray-600">
                    Official syllabus document for{' '}
                    <span className="font-medium">{item.title}</span>. For the
                    latest version, follow the Institute notifications.
                  </p>
                  <div className="flex items-center gap-3 md:ml-4">
                    <button
                      onClick={() => handleView(item)}
                      disabled={!item.documentUrl}
                      className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${item.documentUrl ? 'text-[#631012] bg-[#631012]/10 hover:bg-[#631012]/20' : 'text-gray-400 bg-gray-50 cursor-not-allowed'}`}
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(item)}
                      disabled={!item.documentUrl}
                      className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${item.documentUrl ? 'text-white bg-[#631012] hover:bg-[#7a1a1d]' : 'text-gray-400 bg-gray-100 cursor-not-allowed'}`}
                    >
                      Download
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ));
  };

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-50">
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
              <Link
                href="/academics"
                className="hover:text-[#800000] transition-colors duration-200"
              >
                Academics
              </Link>
              <span>›</span>
              <span className="text-[#631012] font-medium">
                Course Structure & Syllabus
              </span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Course Structure & Syllabus
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Detailed curriculum framework and syllabi for Bachelor-level
                programmes at NIT Hamirpur.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-14 px-4 md:px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.04 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                About Course Structure & Syllabus
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Course Structure & Syllabus define the academic plan of study
                for each programme including course sequences, contact hours,
                credit distribution, assessment methods, and learning outcomes.
                They map programme objectives to measurable learning outcomes
                and assessments used to evaluate those outcomes. These
                frameworks apply to B.Tech., B.Arch., and Dual Degree programmes
                and are periodically revised by the Institute’s academic bodies
                to maintain alignment with the National Education Policy
                (NEP-2020) and evolving academic standards.
              </p>
            </motion.div>

            {/* How it works */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                How the Course Structure & Syllabus Work
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                <li>
                  Curriculum is applicable based on the year of admission.
                </li>
                <li>
                  NEP-2020 based curricula emphasize flexibility, minors, and
                  electives.
                </li>
                <li>
                  Revisions are notified through official Institute channels.
                </li>
                <li>
                  Students must follow the curriculum prescribed for their
                  cohort.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Bachelor Programmes – Course Structure & Syllabus
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Select a section to expand and view downloadable syllabus
                    documents.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">{renderItems(accordionData)}</div>

              <div className="mt-6 text-sm text-gray-500">
                For any missing syllabus documents or to request updates, please
                contact the Office of Academic Affairs.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.14 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                    Masters Programmes – Course Structure &amp; Syllabus
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Select a department to expand and view downloadable syllabus
                    documents for postgraduate programmes.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">{renderItems(mastersData)}</div>

              <div className="mt-6 text-sm text-gray-500">
                For missing documents or to request updates, please contact the
                Office of Academic Affairs.
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
