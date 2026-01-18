import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import {
  ChevronRight,
  ArrowUpRight,
  Smile,
  Trophy,
  Scale,
  HandCoins,
  Tent,
  Guitar,
  Cpu,
  HeartHandshake,
} from 'lucide-react';

const studentData = [
  {
    id: '01',
    category: 'Campus Life',
    icon: Smile,
    sections: [
      {
        title: 'Essentials',
        links: [
          { title: 'Student Activities', href: '/student/activities' },
          { title: 'Functionaries', href: '/student/functionaries' },
          { title: 'Student Notices', href: '/student/notices' },
          { title: 'SGRC', href: '/student/sgrc' },
        ],
      },
      {
        title: 'Accommodation',
        icon: Tent,
        links: [
          { title: 'Hostels at NITH', href: '/student/hostels-at-nith' },
          { title: 'Hostel Management', href: '/student/hostel-management' },
          { title: 'Hostel Booklet', href: '/student/hostel-booklet' },
        ],
      },
    ],
  },
  {
    id: '02',
    category: 'Extracurriculars',
    icon: Trophy,
    sections: [
      {
        title: 'Cultural',
        icon: Guitar,
        links: [
          { title: 'Clubs List', href: '/student/cultural/introduction' },
          { title: 'Societies', href: '/student/cultural/clubs' },
          {
            title: "Hill'ffair (Festival)",
            href: '/student/cultural/hillfair',
          },
          { title: 'SPIC MACAY', href: '/student/cultural/spic-macay' },
        ],
      },
      {
        title: 'Technical',
        icon: Cpu,
        links: [
          { title: 'Clubs List', href: '/student/technical/introduction' },
          { title: 'Nimbus (Tech Fest)', href: '/student/technical/nimbus' },
          { title: 'Innovation', href: '/student/technical/innovation' },
        ],
      },
      {
        title: 'Sports & Wellness',
        links: [
          {
            title: 'Sports Introduction',
            href: '/student/sports/introduction',
          },
          { title: 'Lakaar (Sports Meet)', href: '/student/sports/lakaar' },
          { title: 'Yoga Day', href: '/student/sports/yoga-day' },
        ],
      },
      {
        title: 'Service & Publishing',
        links: [
          { title: 'NSS Activities', href: '/student/nss' },
          { title: 'NCC Activities', href: '/student/ncc' },
          { title: 'Magazine', href: '/student/publications/magazine' },
          {
            title: 'News Bulletin',
            href: '/student/publications/news-bulletin',
          },
        ],
      },
    ],
  },
  {
    id: '03',
    category: 'Conduct',
    icon: Scale,
    sections: [
      {
        title: 'Discipline',
        links: [
          { title: 'Discipline Rules', href: '/student/discipline/rules' },
          { title: 'Discipline Board', href: '/student/discipline/board' },
        ],
      },
      {
        title: 'Counselling',
        links: [
          { title: 'Counselling Rules', href: '/student/counselling/rules' },
          { title: 'Counselling Board', href: '/student/counselling/board' },
        ],
      },
      {
        title: 'Governance',
        links: [
          { title: 'Student Council Rules', href: '/student/council/rules' },
          { title: 'Student Council Board', href: '/student/council/board' },
        ],
      },
      {
        title: 'Anti-Ragging',
        links: [
          { title: 'Anti-Ragging Rules', href: '/student/anti-ragging/rules' },
          {
            title: 'Anti-Ragging Committee',
            href: '/student/anti-ragging/committee',
          },
        ],
      },
    ],
  },
  {
    id: '04',
    category: 'Welfare',
    icon: HandCoins,
    sections: [
      {
        title: 'Benefits',
        links: [
          { title: 'Scholarships', href: '/student/welfare/scholarships' },
          { title: 'Prizes & Medals', href: '/student/welfare/prizes-medals' },
          { title: 'Insurance', href: '/student/welfare/insurance' },
        ],
      },
    ],
  },
];

const Student = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {studentData.map((column) => (
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

              {/* Sections Loop */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    {/* Sub-Section Title */}
                    <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest">
                        {section.title}
                      </h4>
                    </div>

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
};

export default Student;
