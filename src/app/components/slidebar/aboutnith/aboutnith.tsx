import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowUpRight,
  Landmark,
  Target,
  MapPin,
} from 'lucide-react';

const aboutData = [
  {
    id: '01',
    category: 'Identity',
    icon: Landmark,
    links: [
      {
        title: 'History',
        href: '/about/history',
        description: 'Our legacy & milestones',
      },
      {
        title: 'Vision & Mission',
        href: '/about/vision-and-mission',
        description: 'Our purpose & future roadmap',
      },
    ],
  },
  {
    id: '02',
    category: 'Strategy',
    icon: Target,
    links: [
      {
        title: 'Goals',
        href: '/about/goals',
        description: 'Strategic objectives',
      },
      {
        title: 'Core Values',
        href: '/about/core-values',
        description: 'Guiding principles',
      },
    ],
  },
  {
    id: '03',
    category: 'Location',
    icon: MapPin,
    links: [
      {
        title: 'About the City',
        href: '/about/the-city',
        description: 'Culture & geography of Hamirpur',
      },
      {
        title: 'Connectivity',
        href: '/about/connectivity',
        description: 'How to reach the campus',
      },
    ],
  },
];

function AboutNith() {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {aboutData.map((column) => (
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
                {column.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between group/link py-3 px-2 rounded-r hover:bg-gray-50 transition-all duration-300 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        {/* Static Chevron -> Active Arrow interaction */}
                        <div className="relative flex items-center justify-center w-4 h-4">
                          <ChevronRight
                            size={14}
                            className="absolute text-gray-300 transition-all duration-300 group-hover/link:opacity-0 group-hover/link:-translate-x-2"
                          />
                          <ArrowUpRight
                            size={14}
                            className="absolute text-[#800000] opacity-0 translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                          />
                        </div>

                        <div>
                          <span className="block text-sm font-medium text-gray-600 group-hover/link:text-black transition-colors">
                            {link.title}
                          </span>
                          <span className="block text-[10px] text-gray-400 uppercase tracking-wide mt-0.5 group-hover/link:text-[#800000]/70 transition-colors">
                            {link.description}
                          </span>
                        </div>
                      </div>
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

export default AboutNith;
