'use client';
import React from 'react';
import './header.css';
import Aboutnith from './slidebar/aboutnith/aboutnith';
import Authorities from './slidebar/Authorities/authorities';
import Administration from './slidebar/Administration/administration';
import Department from './slidebar/Departments/department';
import Academic from './slidebar/Academics/academic';
import Student from './slidebar/Student/student';
import Faculty from './slidebar/Faculty/faculty';
import Alumni from './slidebar/Alumni/alumini';
import Downloads from './slidebar/downloads/downloads';

function Page() {
  return (
    <>
      <div id="special" className="w-full relative ">
        <div className="bg-white   box   ">
          <div className=" item-1   bg-[#631012]">
            <div className="max-w-7xl mx-auto flex items-center justify-end gap-6">
              <div className="flex items-center gap-4 text-xs text-white  ">
                <button className="hover:underline">A+</button>
                <button className="hover:underline">A-</button>
                <button className="hover:underline">Toggle Contrast</button>
                <button className="hover:underline">Grey Scale</button>
                <button className="hover:underline">Reset</button>
              </div>

              <div className="flex items-center gap-4 ml-20">
                <nav className="hidden sm:flex items-center gap-4 text-xs text-white">
                  <a className="hover:underline">Home</a>
                  <a className="hover:underline">Internet</a>
                  <a className="hover:underline">eOffice</a>
                  <a className="hover:underline">Directory</a>
                  <a className="hover:underline">Faculty Portfolio</a>
                </nav>
                <div className="border border-white rounded px-2 py-1 text-xs text-white">
                  English
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="rounded-full h-35 w-31   flex justify-center items-center absolute z-50 left-4 top-0">
              <img src="l.png" alt="" className="h-25 w-25 " />
            </div>
            <div className=" clipi h-100 w-300 bg-[#631012] absolute z-0 left-[-715] top-1 flex justify-end items-end">
              <div className=" clipi h-41 w-1 bg-[#631012]   "></div>
            </div>
            <div className="w-40 h-28.5 rounded-b-full bg-[#631012] absolute z-30 left-[0] "></div>
          </div>

          <div className="   bg-white">
            <div className=" flex flex-col justify-center items-end ">
              <h1 className="text-2xl font-bold text-gray-800 leading-tight py-4 mr-4">
                National Institute of Technology, Hamirpur
              </h1>
              <p className="text-sm text-gray-600 italic mr-4 -mt-4">
                (An institute of national importance)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-0.5 -mt-7">
          <div className="flex justify-center items-center rounf h-10 w-[85%] rounded-tl-full bg-[#631012] gap-4 text-white">
            <div className="flex items-center gap-8 py-0 text-sm text-white">
              <div id="abouth" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  About NITH
                </span>
              </div>

              <div id="authoritiesh" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Authorities
                </span>
              </div>

              <div id="administrationh" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Administration
                </span>
              </div>

              <div id="departmentsh" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Departments
                </span>
              </div>

              <div id="academicsh" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Academics
                </span>
              </div>

              <div id="studenth" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Student
                </span>
              </div>

              <div id="facultyh" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Faculty
                </span>
              </div>

              <div id="alumnih" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Alumni
                </span>
              </div>

              <div id="downloadsh" className="relative group">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500 cursor-pointer">
                  Downloads
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Menus */}
        <div
          id="about"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Aboutnith />
          </div>
        </div>

        <div
          id="authorities"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Authorities />
          </div>
        </div>

        <div
          id="administration"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Administration />
          </div>
        </div>

        <div
          id="departments"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Department />
          </div>
        </div>

        <div
          id="academics"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Academic />
          </div>
        </div>

        <div
          id="student"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Student />
          </div>
        </div>

        <div
          id="faculty"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Faculty />
          </div>
        </div>

        <div
          id="alumni"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Alumni />
          </div>
        </div>

        <div
          id="downloads"
          className="absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-sm"
          style={{ zIndex: 2147483647 }}
        >
          <div className="py-8 px-12">
            <Downloads />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
