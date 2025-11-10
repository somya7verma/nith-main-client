import React from 'react';

const Student = () => {
  return (
    <div className="w-full h-full text-black p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1: General Student Information */}
          <div>
            <div className="mb-8">
              <a
                href="/student/activities"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">Activities</span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/student/functionaries"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">Functionaries</span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/student/notices"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">
                  Student Related Notices
                </span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/student/sgrc"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium">SGRC</span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>
            </div>

            {/* Student Hostels & Management */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
                Student Hostels & Management
              </h3>
              <a
                href="/student/hostels-at-nith"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium flex items-center">
                  <span className="text-black mr-2">›</span>
                  Hostels at NITH
                </span>
              </a>

              <a
                href="/student/hostel-management"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium flex items-center">
                  <span className="text-black mr-2">›</span>
                  Hostel Management
                </span>
              </a>

              <a
                href="/student/hostel-booklet"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group mb-3"
              >
                <span className="text-base font-medium flex items-center">
                  <span className="text-black mr-2">›</span>
                  Hostel Booklet
                </span>
              </a>
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
              <a
                href="/student/cultural/introduction"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Introduction & list</span>
              </a>
              <a
                href="/student/cultural/clubs"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Cultural Activities & Clubs</span>
              </a>
              <a
                href="/student/cultural/hillfair"
                className="flex items-center p-2 bg-gray-100 hover:bg-gray-300 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">
                  Annual Cultural Festival (Hill&apos;ffair)
                </span>
              </a>
              <a
                href="/student/cultural/spic-macay"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual SPIC MACAY Activity</span>
              </a>
            </div>

            {/* Technical Activities & Clubs */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-black mb-3">
                Technical Activities & Clubs
              </h3>
              <a
                href="/student/technical/introduction"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Introduction & list</span>
              </a>
              <a
                href="/student/technical/nimbus"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">
                  Annual Technical Festival (Nimbus)
                </span>
              </a>
              <a
                href="/student/technical/innovation"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual Innovation Activity</span>
              </a>
            </div>

            {/* Sports Activities & Yoga */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-black mb-3">
                Sports Activities & Yoga
              </h3>
              <a
                href="/student/sports/introduction"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Introduction & list</span>
              </a>
              <a
                href="/student/sports/lakaar"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual Sports Meet (Lakaar)</span>
              </a>
              <a
                href="/student/sports/yoga-day"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Annual Yoga Day</span>
              </a>
            </div>

            {/* NSS Activities */}
            <div className="mb-4">
              <a
                href="/student/nss"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-base font-medium text-black">
                  NSS Activities
                </span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>
            </div>

            {/* NCC Activities */}
            <div className="mb-4">
              <a
                href="/student/ncc"
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-base font-medium text-black">
                  NCC Activities
                </span>
                <span className="text-black text-xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>
            </div>

            {/* Publication Activities */}
            <div>
              <h3 className="text-base font-semibold text-black mb-3">
                Publication Activities
              </h3>
              <a
                href="/student/publications/magazine"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">Magazine Publication</span>
              </a>
              <a
                href="/student/publications/news-bulletin"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
              >
                <span className="text-black mr-2">›</span>
                <span className="text-sm">News Bulletin Publication</span>
              </a>
            </div>
          </div>

          {/* Column 3: Student Discipline & Counselling */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
              Student Discipline & Counselling
            </h2>

            <a
              href="/student/discipline/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Discipline Rules</span>
            </a>

            <a
              href="/student/discipline/board"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Student Discipline Board</span>
            </a>

            <a
              href="/student/counselling/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Counselling Rules</span>
            </a>

            <a
              href="/student/counselling/board"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Student Counselling Board</span>
            </a>

            <a
              href="/student/council/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Council Rules</span>
            </a>

            <a
              href="/student/council/board"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Student Council Board</span>
            </a>

            <a
              href="/student/anti-ragging/rules"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Anti Ragging Rules</span>
            </a>

            <a
              href="/student/anti-ragging/committee"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Anti Ragging Committee</span>
            </a>
          </div>

          {/* Column 4: Student Welfare & Schemes */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
              Student Welfare & Schemes
            </h2>

            <a
              href="/student/welfare/scholarships"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Scholarships and Fellowships</span>
            </a>

            <a
              href="/student/welfare/prizes-medals"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Prizes & Medals</span>
            </a>

            <a
              href="/student/welfare/insurance"
              className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors duration-200 mb-2"
            >
              <span className="text-black mr-2">›</span>
              <span className="text-sm">Insurance & Mediclaims</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
