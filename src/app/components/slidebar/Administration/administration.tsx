import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowUpRight,
  User,
  Users,
  Building2,
  BadgeCheck,
} from 'lucide-react';

const administrationData = [
  {
    id: '01',
    category: 'Oversight',
    icon: BadgeCheck,
    sections: [
      {
        title: 'Visitor',
        links: [{ title: 'The Visitor', href: '/administration/visitor' }],
      },
      {
        title: 'Vigilance',
        links: [
          {
            title: 'Chief Vigilance Officer',
            href: '/administration/vigilance',
          },
        ],
      },
    ],
  },
  {
    id: '02',
    category: 'Leadership',
    icon: User,
    sections: [
      {
        title: 'Chairperson',
        links: [
          { title: 'Message & Profile', href: '/administration/chairperson' },
          {
            title: 'Former Chairpersons',
            href: '/administration/chairperson/former',
          },
        ],
      },
      {
        title: 'Institute Coordinators',
        links: [
          {
            title: 'List of Coordinators',
            href: '/administration/institute-coordinator',
          },
        ],
      },
      {
        title: 'Deans',
        links: [
          { title: 'Deans & Associate Deans', href: '/administration/deans' },
        ],
      },
    ],
  },
  {
    id: '03',
    category: 'Executive',
    icon: Building2,
    sections: [
      {
        title: 'Director',
        links: [
          { title: 'Director Profile', href: '/administration/director' },
          { title: 'Director Office', href: '/administration/director/office' },
          {
            title: 'Former Directors',
            href: '/administration/director/former',
          },
        ],
      },
      {
        title: 'Departments',
        links: [
          {
            title: 'Head of Departments',
            href: '/administration/head-of-departments',
          },
          {
            title: 'Faculty Incharges',
            href: '/administration/faculty-incharges',
          },
        ],
      },
    ],
  },
  {
    id: '04',
    category: 'Registry',
    icon: Users,
    sections: [
      {
        title: 'Registrar',
        links: [
          { title: 'Registrar Profile', href: '/administration/registrar' },
          {
            title: 'Registrar Office',
            href: '/administration/registrar/office',
          },
        ],
      },
      {
        title: 'Officers',
        links: [
          { title: 'Nodal Officers', href: '/administration/nodal-officers' },
        ],
      },
    ],
  },
];

function Administration() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {administrationData.map((column) => (
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

              {/* Sub-Sections Loop */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    {/* Sub-Section Title */}
                    <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      {section.title}
                    </h4>

                    {/* Links List */}
                    <ul className="space-y-0.5 sm:space-y-1">
                      {section.links.map((link) => (
                        <li key={link.title}>
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
                      ))}
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

export default Administration;
