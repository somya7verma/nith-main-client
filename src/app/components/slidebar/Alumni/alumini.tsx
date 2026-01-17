import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ArrowUpRight,
  Users,
  Globe,
  Gem,
  Lock,
  ExternalLink,
} from 'lucide-react';

const alumniData = [
  {
    id: '01',
    category: 'Engagement',
    icon: Users,
    links: [
      { title: 'Alumni Activities', href: '/alumni/activities' },
      { title: 'Functionaries', href: '/alumni/functionaries' },
      {
        title: 'Alumni Notices',
        href: 'https://alumni.nith.ac.in/newsroom.dz',
        isExternal: true,
      },
      {
        title: 'Alumni Related MoU',
        href: 'https://nith.ac.in/uploads/topics/mouepack16939083811860.pdf',
        isExternal: true,
      },
      { title: 'Alumni Assist', href: '/alumni/assist' },
    ],
  },
  {
    id: '02',
    category: 'Network',
    icon: Globe,
    links: [
      {
        title: 'List of Alumni',
        href: 'https://alumni.nith.ac.in/members.dz',
        isExternal: true,
      },
      {
        title: 'Alumni Registration',
        href: 'https://alumni.nith.ac.in/user/signup.dz',
        isExternal: true,
      },
      {
        title: 'Local Chapters',
        href: 'https://alumni.nith.ac.in/chapters.dz',
        disabled: true,
      },
      { title: 'Annual Alumni Meet', href: '/alumni/annual-meet' },
      { title: 'Distinguished Alumni', href: '/alumni/distinguished' },
    ],
  },
  {
    id: '03',
    category: 'Impact & Access',
    icon: Gem,
    links: [
      { title: 'Endowment Fund', href: '/alumni/endowment-fund' },
      { title: 'Awards Initiatives', href: '/alumni/awards-initiatives' },
      {
        title: 'Alumni Portal',
        href: 'https://alumni.nith.ac.in/',
        isExternal: true,
      },
    ],
  },
];

function Alumni() {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {alumniData.map((column) => (
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
                {column.links.map((link, index) => {
                  // Handle Disabled State
                  if (link.disabled) {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-between py-2 px-2 opacity-50 cursor-not-allowed select-none"
                      >
                        <div className="flex items-center gap-3">
                          <Lock size={12} className="text-gray-400" />
                          <span className="text-sm font-medium text-gray-400">
                            {link.title}
                          </span>
                        </div>
                      </li>
                    );
                  }

                  // Handle Active State
                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        target={link.isExternal ? '_blank' : '_self'}
                        rel={link.isExternal ? 'noopener noreferrer' : ''}
                        className="flex items-center justify-between group/link py-2 px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          {/* Use ExternalLink icon if external, else Chevron */}
                          {link.isExternal ? (
                            <ExternalLink
                              size={14}
                              className="text-gray-300 group-hover/link:text-[#800000] transition-colors"
                            />
                          ) : (
                            <ChevronRight
                              size={14}
                              className="text-gray-300 group-hover/link:text-[#800000] transition-colors"
                            />
                          )}

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
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Alumni;
