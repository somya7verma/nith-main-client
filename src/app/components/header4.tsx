'use client';
import React, { useState } from 'react';
import './header2.css';
import '../components/header.css';
import Aboutnith from '../components/slidebar/aboutnith/aboutnith';
import Academic from '../components/slidebar/Academics/academic';
import Administration from '../components/slidebar/Administration/administration';
import Authorities from '../components/slidebar/Authorities/authorities';
import Alumni from '../components/slidebar/Alumni/alumini';
import Department from '../components/slidebar/Departments/department';
import Downloads from '../components/slidebar/downloads/downloads';
import Faculty from '../components/slidebar/Faculty/faculty';
import Student from '../components/slidebar/Student/student';

import Link from 'next/link';

function Header31() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <div className=" max-w-screen  relative overflow-visible">
        <div className="bg-white  gridan overflow-visible">
          <div
            id="st"
            className="!bg-[#631012] flex flex-row items-center justify-end gap-6 px-4 h-full"
          >
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                A+
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                A-
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                Toggle Contrast
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                Grey Scale
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                Reset
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                Home
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                Internet
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                eOffice
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                Directory
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                Faculty Portfolio
              </span>
            </div>
            <div className="relative group cursor-pointer !bg-[#631012]">
              <span className="hover:underline hover:text-yellow-300 transition-all duration-500 !bg-[#631012] text-white text-sm">
                English
              </span>
            </div>
          </div>
          <div id="st2" className="overflow-hidden relative">
            <div className="rounded-full !bg-[#631012] h-100 w-100 absolute -top-66 -left-10"></div>
            <div className="absolute left-20 rounded-full">
              <Link href="/">
                <img src="/l.png" alt="" className="h-30 w-30   " />
              </Link>
            </div>
          </div>
          <div id="st3 relative">
            <div id="clipi"></div>
          </div>
          <div id="st4">
            <div className="bg-white    ">
              <div className="flex flex-col items-end   gap-1   ">
                <div className=" items-end mt-5 ">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800  pr-2   xl:w-full    ">
                    National Institute of Technology, Hamirpur
                  </h1>
                  <p className="text-sm text-gray-600 italic  ">
                    (An institute of national importance)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="navbar" className="relative overflow-visible z-40">
            <div
              id="navbar-child"
              className="flex flex-row h-full relative overflow-visible"
            >
              <div id="navbar-child1" className="w-[10%] h-full"></div>
              <div className="w-[90%] h-full !bg-[#631012] flex flex-row gap-1 items-center px-5 overflow-visible">
                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('about')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  About NITH
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('authorities')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Authorities
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('administration')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Administration
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('departments')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Departments
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('academics')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Academics
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('student')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Student
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('faculty')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Faculty
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('alumni')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Alumni
                </div>

                <div
                  className="text-white !bg-[#631012] text-sm md:text-md px-4 py-2 cursor-pointer hover:underline hover:text-yellow-300 transition-all"
                  onMouseEnter={() => setActiveDropdown('downloads')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Downloads
                </div>
              </div>
            </div>

            {/* Single Dropdown Menu */}
            {activeDropdown && (
              <div
                className="absolute top-full -left-60 w-[95vw] h-[60vh] bg-white text-black shadow-2xl z-[9999] overflow-auto"
                onMouseEnter={() => setActiveDropdown(activeDropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-8">
                  {activeDropdown === 'about' && <Aboutnith />}
                  {activeDropdown === 'authorities' && <Authorities />}
                  {activeDropdown === 'administration' && <Administration />}
                  {activeDropdown === 'departments' && <Department />}
                  {activeDropdown === 'academics' && <Academic />}
                  {activeDropdown === 'student' && <Student />}
                  {activeDropdown === 'faculty' && <Faculty />}
                  {activeDropdown === 'alumni' && <Alumni />}
                  {activeDropdown === 'downloads' && <Downloads />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header31;

// <nav
//     className="sticky top-0 z-50 bg-[#631012] shadow-xl"
//     onMouseLeave={() => setActiveDropdown(null)}
//   >
//     <div className="max-w-[1600px] mx-auto px-6">
//       <div className="flex items-center justify-between h-14">

//         {/* Navigation Items */}
//         <div className="flex h-full">
//           {NAV_ITEMS.map((item) => (
//             <div
//               key={item.id}
//               className="group relative h-full flex items-center"
//               onMouseEnter={() => setActiveDropdown(item.id)}
//             >
//               <button className={`
//                 px-6 h-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center gap-1
//                 ${activeDropdown === item.id
//                   ? 'bg-white text-[#631012]'
//                   : 'text-white hover:bg-white/10'}
//               `}>
//                 {item.label}
//                 {/* Tiny stylistic chevron */}
//                 <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
//               </button>

//               {/* Futuristic "Active" Line indicator (Top) */}
//               <span className={`
//                 absolute top-0 left-0 w-full h-[2px] bg-white transform origin-left transition-transform duration-300
//                 ${activeDropdown === item.id ? 'scale-x-100' : 'scale-x-0'}
//               `} />
//             </div>
//           ))}
//         </div>
