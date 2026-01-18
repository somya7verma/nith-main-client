import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowUpRight,
  Briefcase,
  FileText,
  Coins,
} from 'lucide-react';

const facultyData = [
  {
    id: '01',
    category: 'Administration',
    icon: Briefcase,
    links: [
      { title: 'Faculty Activities', href: '/faculty-section/Activities' },
      { title: 'Functionaries', href: '/faculty-section/Functionaries' },
      {
        title: 'Faculty Notices',
        href: '/faculty-section/Faculty_Related_Notices',
      },
    ],
  },
  {
    id: '02',
    category: 'Allowances',
    icon: Coins,
    links: [
      { title: 'CPDA Rules', href: '/faculty-section/CPDA_Rules' },
      { title: 'Deputation Rules', href: '/faculty-section/Deputation_Rules' },
    ],
  },
  {
    id: '03',
    category: 'Service Rules',
    icon: FileText,
    links: [
      {
        title: 'Application Forwarding',
        href: '/faculty-section/Application_Forwarding_Rules',
      },
      {
        title: 'Workshop Conduct Rules',
        href: '/faculty-section/Rules_for_Conducting_Workshops_Conferences',
      },
    ],
  },
];

function Faculty() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {facultyData.map((column) => (
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

              {/* Links List */}
              <ul className="space-y-0.5 sm:space-y-1">
                {column.links.map((link) => (
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
    </section>
  );
}

export default Faculty;
