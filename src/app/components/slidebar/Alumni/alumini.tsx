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
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {alumniData.map((column) => (
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
                {column.links.map((link, index) => {
                  // Handle Disabled State
                  if (link.disabled) {
                    return (
                      <li
                        key={index}
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

                  // Handle Active State
                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        target={link.isExternal ? '_blank' : '_self'}
                        rel={link.isExternal ? 'noopener noreferrer' : ''}
                        className="flex items-center justify-between group/link py-1.5 sm:py-2 px-1 sm:px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          {/* Use ExternalLink icon if external, else Chevron */}
                          {link.isExternal ? (
                            <ExternalLink
                              size={12}
                              className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                            />
                          ) : (
                            <ChevronRight
                              size={12}
                              className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                            />
                          )}

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
    </section>
  );
}

export default Alumni;
