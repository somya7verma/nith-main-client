'use client'
import React from 'react';
import Link from 'next/link';
function Faculty() {



  return (
    <div className="w-full h-full text-black p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
              Faculty Resources
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <Link
                href="/faculty-section/Activities"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Activities</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
              <Link
                href="/faculty-section/Functionaries"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Functionaries</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>

              <Link
                href="/faculty-section/CPDA_Rules"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">CPDA Rules</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>

               <Link
                href="/faculty-section/Application_Forwarding_Rules"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Application Forwarding Rules</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
             
             <Link
                href="/faculty-section/Deputation_Rules"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Deputation Rules</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
             
              <Link
                href="/faculty-section/Rules_for_Conducting_Workshops\Conferences"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Rules for Conducting Workshops</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
             
             
             <Link
                href="/faculty-section/Faculty_Related_Notices"
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Faculty Related Notices</span>
                <span className="text-black text-2xl group-hover:translate-x-2 transition-transform duration-200">
                  ›
                </span>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
