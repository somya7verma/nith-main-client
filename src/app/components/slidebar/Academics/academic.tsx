import React from 'react';
import Link from 'next/link';

function Academic() {
  const academicSections = {
    leftColumn: [
      { title: 'Activities', href: '/academics/activities' },
      { title: 'Functionaries', href: '/academics/functionaries' },
      { title: 'Calendar', href: '/academics/calendar' },
      {
        title: 'Odd Semester 2025-26',
        href: '/academics/odd%20semester%202025-26',
        hasIcon: true,
      },
      {
        title: 'Even Semester 2025-26',
        href: '/academics/even%20semester%202025-26',
        hasIcon: true,
      },
      { title: 'Academic Notices', href: '/academics/academic-notices' },
      { title: 'NAD Cell', href: '/academics/nad%20cell' },
      { title: 'Fee Structure', href: '/academics/fee%20structure' },
      { title: 'Class Timetable', href: '/academics/class%20timetable' },
    ],
    centerColumn: [
      {
        section: 'Admissions & Registrations',
        links: [
          {
            title: 'Admissions 2025-26',
            href: '/academics/admissions',
            hasIcon: true,
          },
          {
            title: 'Admissions Desk',
            href: '/academics/admissions-desk',
            hasIcon: true,
          },
          {
            title: 'Registration 2025-26',
            href: '/academics/registration%2025-26',
            hasIcon: true,
          },
          {
            title: 'International Admissions',
            href: '/academics/international%20admission',
            hasIcon: true,
          },
        ],
      },
      {
        section: 'Examinations & Evaluation',
        links: [
          {
            title: 'Examination Schedules',
            href: '/academics/examination%20schedules',
            hasIcon: true,
          },
          {
            title: 'Examination Guidelines',
            href: '/academics/examination-guidelines',
            hasIcon: true,
          },
          {
            title: 'Evaluation Schedules',
            href: '/academics/evaluation%20schedules',
            hasIcon: true,
          },
          {
            title: 'Evaluation Guidelines',
            href: '/academics/evaluation%20guidelines',
            hasIcon: true,
          },
        ],
      },
      {
        section: 'Results & Certificates',
        links: [
          { title: 'Results', href: '/academics/results', hasIcon: true },
          {
            title: 'Guidelines for Certificates Issuance',
            href: '/academics/certificates-issuance',
            hasIcon: true,
          },
          {
            title: 'Guidelines for Certificates Verification',
            href: '/academics/certificates-verification',
            hasIcon: true,
          },
          {
            title: 'Certificate regarding Divisions/Percentage',
            href: '/academics/divisions-percentage',
            hasIcon: true,
          },
          {
            title: 'Contact for Certification matters',
            href: '/academics/certification-contact',
            hasIcon: true,
          },
        ],
      },
    ],
    rightColumn: [
      {
        section: 'Bachelor Programmes',
        links: [
          {
            title: 'Bachelor Ordinances',
            href: '/academics/bachelor%20ordinances',
            hasIcon: true,
          },
          {
            title: 'Course Structure & Syllabus',
            href: '/academics/course%20structure%20%26%20syllabus',
            hasIcon: true,
          },
          {
            title: 'Old UG Manual',
            href: '/academics/old-ug-manual',
            hasIcon: true,
          },
        ],
      },
      {
        section: 'Master Programmes',
        links: [
          {
            title: 'Master Ordinances',
            href: '/academics/master-ordinances',
            hasIcon: true,
          },
          {
            title: 'Course Structure & Syllabus',
            href: '/academics/pg-course-structure',
            hasIcon: true,
          },
          {
            title: 'Old PG Manual',
            href: '/academics/old-pg-manual',
            hasIcon: true,
          },
        ],
      },
      {
        section: 'Doctoral Programmes',
        links: [
          {
            title: 'Doctoral Ordinances',
            href: '/academics/doctoral-ordinances',
            hasIcon: true,
          },
          {
            title: 'Old PG Manual',
            href: '/academics/old-pg-manual',
            hasIcon: true,
          },
        ],
      },
    ],
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="space-y-2">
        {academicSections.leftColumn.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
          >
            {item.hasIcon && <span className="mr-2">›</span>}
            {item.title}
          </Link>
        ))}
      </div>

      {/* Center Column */}
      <div className="space-y-6">
        {academicSections.centerColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-2 text-sm">
              {section.section}
            </h3>
            <div className="space-y-1">
              {section.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.href}
                  className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                >
                  {link.hasIcon && <span className="mr-2">›</span>}
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {academicSections.rightColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-2 text-sm">
              {section.section}
            </h3>
            <div className="space-y-1">
              {section.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.href}
                  className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                >
                  {link.hasIcon && <span className="mr-2">›</span>}
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academic;
