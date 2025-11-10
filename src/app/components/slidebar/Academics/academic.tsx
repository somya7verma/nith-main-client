import React from 'react';

function Academic() {
  const academicSections = {
    leftColumn: [
      { title: 'Activities', href: '#' },
      { title: 'Functionaries', href: '#' },
      { title: 'Calender', href: '#' },
      { title: 'Odd Semester 2025-26', href: '#', hasIcon: true },
      { title: 'Even Semester 2025-26', href: '#', hasIcon: true },
      { title: 'Academic Notices', href: '#' },
      { title: 'NAD Cell', href: '#' },
      { title: 'Fee Structure', href: '#' },
      { title: 'Class Timetable', href: '#' },
    ],
    centerColumn: [
      {
        section: 'Admissions & Registrations',
        links: [
          { title: 'Admissions 2025-26', href: '#', hasIcon: true },
          { title: 'Admissions Desk', href: '#', hasIcon: true },
          { title: 'Registration 2025-26', href: '#', hasIcon: true },
          { title: 'International Admissions', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Examinations & Evaluation',
        links: [
          { title: 'Examination Schedules', href: '#', hasIcon: true },
          { title: 'Examination Guidelines', href: '#', hasIcon: true },
          { title: 'Evaluation Schedules', href: '#', hasIcon: true },
          { title: 'Evaluation Guidelines', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Results & Certificates',
        links: [
          { title: 'Results', href: '#', hasIcon: true },
          {
            title: 'Guidelines for Certificates Issuance',
            href: '#',
            hasIcon: true,
          },
          {
            title: 'Guidelines for Certificates Verification',
            href: '#',
            hasIcon: true,
          },
          {
            title: 'Certificate regarding Divisions/Percentage',
            href: '#',
            hasIcon: true,
          },
          {
            title: 'Contact for Certification matters',
            href: '#',
            hasIcon: true,
          },
        ],
      },
    ],
    rightColumn: [
      {
        section: 'Bachelor Programmes',
        links: [
          { title: 'Bachelor Ordinances', href: '#', hasIcon: true },
          { title: 'Course Structure & Syllabus', href: '#', hasIcon: true },
          { title: 'Old UG Manual', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Master Programmes',
        links: [
          { title: 'Master Ordinances', href: '#', hasIcon: true },
          { title: 'Course Structure & Syllabus', href: '#', hasIcon: true },
          { title: 'Old PG Manual', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Doctoral Programmes',
        links: [
          { title: 'Doctoral Ordinances', href: '#', hasIcon: true },
          { title: 'Old PG Manual', href: '#', hasIcon: true },
        ],
      },
    ],
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="space-y-2">
        {academicSections.leftColumn.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
          >
            {item.hasIcon && <span className="mr-2">›</span>}
            {item.title}
          </a>
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
                <a
                  key={linkIdx}
                  href={link.href}
                  className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                >
                  {link.hasIcon && <span className="mr-2">›</span>}
                  {link.title}
                </a>
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
                <a
                  key={linkIdx}
                  href={link.href}
                  className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                >
                  {link.hasIcon && <span className="mr-2">›</span>}
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academic;
