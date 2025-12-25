import React from 'react';
import Link from 'next/link';

const Student = () => {
  return (
    <div className="w-full h-full text-black p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1: General Student Information */}
          <div>
            <div className="mb-8">
              <Link
                href="/student/activities"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">Activities</span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200"></span>
              </Link>

              <Link
                href="/student/functionaries"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">Functionaries</span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>

              <Link
                href="/student/notices"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">
                  Student Related Notices
                </span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>

              <Link
                href="/student/sgrc"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">SGRC</span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
            </div>

            {/* Student Hostels & Management */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
                Student Hostels & Management
              </h3>
              <Link
                href="/student/hostels-at-nith"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium flex items-center">
                  <span className="text-black mr-2">›</span>
                  Hostels at NITH
                </span>
              </Link>

              <Link
                href="/student/hostel-management"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium flex items-center">
                  <span className="text-black mr-2">›</span>
                  Hostel Management
                </span>
              </Link>

              <Link
                href="/student/hostel-booklet"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium flex items-center">
                  <span className="text-black mr-2">›</span>
                  Hostel Booklet
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Student Activities & Sports */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
              Student Activities & Sports
            </h2>

            {/* Cultural Activities & Clubs */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-black mb-3">
                Cultural Activities & Clubs
              </h3>
              <Link
                href="/student/cultural/introduction"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Introduction & list</span>
              </Link>
              <Link
                href="/student/cultural/clubs"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Cultural Activities & Clubs</span>
              </Link>
              <Link
                href="/student/cultural/hillfair"
                className="flex items-center p-2 bg-gray-100 hover:bg-gray-300 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">
                  Annual Cultural Festival (Hill&apos;ffair)
                </span>
              </Link>
              <Link
                href="/student/cultural/spic-macay"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual SPIC MACAY Activity</span>
              </Link>
            </div>

            {/* Technical Activities & Clubs */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-black mb-3">
                Technical Activities & Clubs
              </h3>
              <Link
                href="/student/technical/introduction"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Introduction & list</span>
              </Link>
              <Link
                href="/student/technical/nimbus"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">
                  Annual Technical Festival (Nimbus)
                </span>
              </Link>
              <Link
                href="/student/technical/innovation"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual Innovation Activity</span>
              </Link>
            </div>

            {/* Sports Activities & Yoga */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-black mb-3">
                Sports Activities & Yoga
              </h3>
              <Link
                href="/student/sports/introduction"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Introduction & list</span>
              </Link>
              <Link
                href="/student/sports/lakaar"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual Sports Meet (Lakaar)</span>
              </Link>
              <Link
                href="/student/sports/yoga-day"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual Yoga Day</span>
              </Link>
            </div>

            {/* NSS Activities */}
            <div className="mb-4">
              <Link
                href="/student/nss"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-base font-medium text-black">
                  NSS Activities
                </span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
            </div>

            {/* NCC Activities */}
            <div className="mb-4">
              <Link
                href="/student/ncc"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-base font-medium text-black">
                  NCC Activities
                </span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
            </div>

            {/* Publication Activities */}
            <div>
              <h3 className="text-base font-semibold text-black mb-3">
                Publication Activities
              </h3>
              <Link
                href="/student/publications/magazine"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Magazine Publication</span>
              </Link>
              <Link
                href="/student/publications/news-bulletin"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">News Bulletin Publication</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Student Discipline & Counselling */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
              Student Discipline & Counselling
            </h2>

            <Link
              href="/student/discipline/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Discipline Rules</span>
            </Link>

            <Link
              href="/student/discipline/board"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Student Discipline Board</span>
            </Link>

            <Link
              href="/student/counselling/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Counselling Rules</span>
            </Link>

            <Link
              href="/student/counselling/board"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Student Counselling Board</span>
            </Link>

            <Link
              href="/student/council/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Council Rules</span>
            </Link>

            <Link
              href="/student/council/board"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Student Council Board</span>
            </Link>

            <Link
              href="/student/anti-ragging/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Anti Ragging Rules</span>
            </Link>

            <Link
              href="/student/anti-ragging/committee"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Anti Ragging Committee</span>
            </Link>
          </div>

          {/* Column 4: Student Welfare & Schemes */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
              Student Welfare & Schemes
            </h2>

            <Link
              href="/student/welfare/scholarships"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Scholarships and Fellowships</span>
            </Link>

            <Link
              href="/student/welfare/prizes-medals"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Prizes & Medals</span>
            </Link>

            <Link
              href="/student/welfare/insurance"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Insurance & Mediclaims</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
