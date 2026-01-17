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
    <section className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {facultyData.map((column) => (
            <div key={column.id} className="flex flex-col">
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-6 group/header">
                <span className="font-mono text-xl text-gray-200 group-hover/header:text-[#800000] transition-colors duration-300">
                  {column.id}
                </span>
                <div className="flex items-center gap-2 border-l-2 border-[#800000] pl-3">
                  <column.icon
                    size={16}
                    className="text-gray-400 group-hover/header:text-gray-900 transition-colors"
                  />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
                    {column.category}
                  </h3>
                </div>
              </div>

              {/* Links List */}
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between group/link py-2 px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight
                          size={14}
                          className="text-gray-300 group-hover/link:text-[#800000] transition-colors"
                        />
                        <span className="text-sm font-medium text-gray-600 group-hover/link:text-black transition-colors">
                          {link.title}
                        </span>
                      </div>

                      {/* Hover Indicator */}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-2 text-[#800000] group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
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
