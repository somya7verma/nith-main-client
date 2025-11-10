import React from 'react';

const Faculty = () => {
  return (
    <div className="w-full h-full text-black p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {/* Faculty Links Section */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
              Faculty Resources
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <a
                href="/faculty/activities"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Activities</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/faculty/functionaries"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Functionaries</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/faculty/cpda-rules"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">CPDA Rules</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/faculty/deputation-rules"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Deputation Rules</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/faculty/application-forwarding-rules"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">
                  Application Forwarding Rules
                </span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/faculty/workshop-conference-rules"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">
                  Rules for Conducting Workshops/Conferences
                </span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>

              <a
                href="/faculty/related-notices"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">
                  Faculty Related Notices
                </span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
