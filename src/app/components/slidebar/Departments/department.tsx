import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowUpRight, Cpu, Atom, Library } from 'lucide-react';

const departmentData = [
  {
    id: '01',
    category: 'Engineering',
    icon: Cpu,
    sections: [
      {
        title: 'B.Tech / M.Tech',
        links: [
          { title: 'Computer Science & Engineering', href: '#' },
          { title: 'Civil Engineering', href: '#' },
          { title: 'Chemical Engineering', href: '#' },
          { title: 'Electronics & Comm. Engineering', href: '#' },
          { title: 'Electrical Engineering', href: '#' },
          { title: 'Mechanical Engineering', href: '#' },
          { title: 'Material Science & Engineering', href: '#' },
        ],
      },
    ],
  },
  {
    id: '02',
    category: 'Sciences',
    icon: Atom,
    sections: [
      {
        title: 'Pure Sciences',
        links: [
          { title: 'Chemistry', href: '#' },
          { title: 'Mathematics & Scientific Computing', href: '#' },
          { title: 'Physics & Photonics Science', href: '#' },
        ],
      },
      {
        title: 'Centres',
        links: [{ title: 'Centre For Energy Studies', href: '#' }],
      },
    ],
  },
  {
    id: '03',
    category: 'Liberal Arts',
    icon: Library,
    sections: [
      {
        title: 'Professional Schools',
        links: [
          { title: 'Architecture', href: '#' },
          { title: 'Management Studies', href: '#' },
        ],
      },
      {
        title: 'Humanities',
        links: [{ title: 'Humanities & Social Sciences', href: '#' }],
      },
    ],
  },
];

function Department() {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {departmentData.map((column) => (
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

              {/* Sub-Sections Loop */}
              <div className="space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    {/* Sub-Section Title (Only if multiple sections exist or explicit titles needed) */}
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      {section.title}
                    </h4>

                    {/* Links List */}
                    <ul className="space-y-1">
                      {section.links.map((link) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Department;
