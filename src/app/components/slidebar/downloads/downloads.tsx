import React from 'react';

const Downloads = () => {
  return (
    <div className="w-full h-full text-black p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 max-w-2xl">
          {/* Downloads for Students */}
          <a
            href="/downloads/students"
            className="flex items-center justify-between p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
          >
            <span className="text-xl font-medium">Downloads for Students</span>
            <span className="text-black text-3xl group-hover:translate-x-2 transition-transform duration-200">
              ›
            </span>
          </a>

          {/* Downloads for Faculty & Staff */}
          <a
            href="/downloads/faculty-staff"
            className="flex items-center justify-between p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
          >
            <span className="text-xl font-medium">
              Downloads for Faculty & Staff
            </span>
            <span className="text-black text-3xl group-hover:translate-x-2 transition-transform duration-200">
              ›
            </span>
          </a>

          {/* Miscellaneous Downloads */}
          <a
            href="/downloads/miscellaneous"
            className="flex items-center justify-between p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
          >
            <span className="text-xl font-medium">Miscellaneous Downloads</span>
            <span className="text-black text-3xl group-hover:translate-x-2 transition-transform duration-200">
              ›
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
