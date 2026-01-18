import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  BookOpen,
  Lock,
} from 'lucide-react';

const academicData = [
  {
    id: '01',
    category: 'General Affairs',
    icon: CalendarDays,
    sections: [
      {
        title: 'Resources',
        links: [
          { title: 'Activities', href: '/academics/activities' },
          { title: 'Functionaries', href: '/academics/functionaries' },
          { title: 'Academic Notices', href: '/academics/academic-notices' },
          { title: 'NAD Cell', href: '/academics/nad-cell' },
          { title: 'Fee Structure', href: '/academics/fee-structure' },
          { title: 'Class Timetable', href: '/academics/class-timetable' },
        ],
      },
      {
        title: 'Calendars',
        links: [
          { title: 'Academic Calender', href: '/academics/calendar' },
          { title: 'Odd Semester 2025-26', href: '#', disabled: true },
          { title: 'Even Semester 2025-26', href: '#', disabled: true },
        ],
      },
    ],
  },
  {
    id: '02',
    category: 'Lifecycle',
    icon: GraduationCap,
    sections: [
      {
        title: 'Admissions & Registrations',
        links: [
          {
            title: 'Admissions 2025-26',
            href: '/academics/admissions-2025-26',
          },
          { title: 'Admissions Desk', href: '#', disabled: true },
          {
            title: 'Registration 2025-26',
            href: '/academics/registration-2025-26',
          },
          {
            title: 'International Admissions',
            href: '/academics/international-admissions',
          },
        ],
      },
      {
        title: 'Examinations',
        links: [
          { title: 'Exam Schedules', href: '#', disabled: true },
          { title: 'Exam Guidelines', href: '#', disabled: true },
          { title: 'Evaluation Schedules', href: '#', disabled: true },
        ],
      },
      {
        title: 'Results',
        links: [
          { title: 'View Results', href: 'http://results.nith.ac.in/' },
          {
            title: 'Certificate Issuance',
            href: '/academics/certificates-issuance-guidelines',
          },
          {
            title: 'Certificate Verification',
            href: '/academics/certificates-verification-guidelines',
          },
        ],
      },
    ],
  },
  {
    id: '03',
    category: 'Programmes',
    icon: BookOpen,
    sections: [
      {
        title: 'Bachelor (UG)',
        links: [
          {
            title: 'Bachelor Ordinances',
            href: '/academics/bachelor-ordinances',
          },
          {
            title: 'Structure & Syllabus',
            href: '/academics/course-structure-syllabus',
          },
          { title: 'Old UG Manual', href: '#', disabled: true },
        ],
      },
      {
        title: 'Master (PG)',
        links: [
          { title: 'Master Ordinances', href: '/academics/master-ordinances' },
          {
            title: 'Structure & Syllabus',
            href: '/academics/course-structure-syllabus',
          },
          { title: 'Old PG Manual', href: '#', disabled: true },
        ],
      },
      {
        title: 'Doctoral (PhD)',
        links: [
          {
            title: 'Doctoral Ordinances',
            href: '/academics/doctoral-ordinances',
          },
          { title: 'Old PG Manual', href: '#', disabled: true },
        ],
      },
    ],
  },
];

function Academic() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {academicData.map((column) => (
            <div key={column.id} className="flex flex-col">
              {/* Column Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group/header">
                <span className="font-mono text-base sm:text-lg md:text-xl text-gray-200 group-hover/header:text-[#800000] transition-colors duration-300">
                  {column.id}
                </span>
                <div className="flex items-center gap-1 sm:gap-2 border-l-2 border-[#800000] pl-2 sm:pl-3">
                  <column.icon
                    size={14}
                    className="text-gray-400 group-hover/header:text-gray-900 transition-colors sm:w-4 sm:h-4"
                  />
                  <h3 className="text-[clamp(10px,2vw,14px)] font-bold uppercase tracking-wider text-gray-800">
                    {column.category}
                  </h3>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    {/* Sub-Section Title */}
                    <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      {section.title}
                    </h4>

                    {/* Links List */}
                    <ul className="space-y-0.5 sm:space-y-1">
                      {section.links.map((link, linkIdx) => {
                        if (link.disabled) {
                          // Disabled State
                          return (
                            <li
                              key={linkIdx}
                              className="flex items-center justify-between py-1.5 sm:py-2 px-1 sm:px-2 opacity-50 cursor-not-allowed select-none"
                            >
                              <div className="flex items-center gap-2 sm:gap-3">
                                <Lock
                                  size={10}
                                  className="text-gray-400 sm:w-3 sm:h-3"
                                />
                                <span className="text-[clamp(10px,2vw,14px)] font-medium text-gray-400">
                                  {link.title}
                                </span>
                              </div>
                            </li>
                          );
                        }

                        // Active State
                        return (
                          <li key={linkIdx}>
                            <Link
                              href={link.href}
                              className="flex items-center justify-between group/link py-1.5 sm:py-2 px-1 sm:px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                            >
                              <div className="flex items-center gap-2 sm:gap-3">
                                <ChevronRight
                                  size={12}
                                  className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                                />
                                <span className="text-[clamp(10px,2vw,14px)] font-medium text-gray-600 group-hover/link:text-black transition-colors">
                                  {link.title}
                                </span>
                              </div>

                              {/* Hover Indicator */}
                              <ArrowUpRight
                                size={10}
                                className="opacity-0 -translate-x-2 text-[#800000] group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 sm:w-3 sm:h-3"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academic;
