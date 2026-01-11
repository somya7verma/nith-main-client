'use client';
import React, { useState } from 'react';
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
import Link from 'next/link';

function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const[mobop,setmobop]=useState(false)

  return (
    <>
      <div id="special" className="w-full">
        {/* Top bar: Accessibility + Links (responsive layout) */}
        <div className="bg-white">
          <div className="items-1 h-8 p-1 bg-[#631012] relative z-50  ">
            <div className="hidden lg:flex justify-end gap-6 lg:gap-8 flex-1 text-sm  text-white mr-9">
              <div id="Aplus" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">A+</span>
              </div>
              <div id="Aminus" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">A-</span>
              </div>
              <div id="toggle" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Toggle Contrast</span>
              </div>
              <div id="grey" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Grey Scale</span>
              </div>
              <div id="reset" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Reset</span>
              </div>
              <div id="home" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Home</span>
              </div>
              <div id="internet" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Internet</span>
              </div>
              <div id="office" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">eOffice</span>
              </div>
              <div id="directory" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Directory</span>
              </div>
              <div id="portfolio" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Faculty Portfolio</span>
              </div>
              <div id="english" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">English</span>
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="flex justify-end w-full">
  <button
    className="lg:hidden mr-3 flex flex-col justify-center gap-1 p-1 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
    onClick={() => setmobop(!mobop)}
    aria-label="Toggle menu"
  >
    <span className="w-5 h-0.5 bg-white rounded" />
    <span className="w-5 h-0.5 bg-white rounded" />
    <span className="w-5 h-0.5 bg-white rounded" />
  </button>
</div>

          </div>
        </div>

        {/* Mobile menu */}
        {mobop && (
          <div className="  lg:hidden w-full bg-[#631012] text-white px-4 py-4 space-y-2 text-sm border-t border-[#631012]/50 relative z-50">
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">A+</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">A-</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Toggle Contrast</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Grey Scale</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Reset</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Home</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Internet</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">eOffice</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Directory</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Faculty Portfolio</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">English</button>
          </div>
        )}

        {/* Desktop Dropdown Panels (responsive width) */}
        <div
          id="about"
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-b-lg border border-gray-200"
          style={{ zIndex: 2147483647 }}
         >


          <div className="p-6 sm:p-8 md:p-12">
            <Aboutnith />
          </div>
         </div>
         {/* Repeat for other dropdowns with same classes */}
         <div
          id="authorities"
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white text-black shadow-2xl overflow-y-auto max-h-[80vh] rounded-b-lg border border-gray-200"
          style={{ zIndex: 2147483647 }}
         >
          <div className="p-6 sm:p-8 md:p-12">
            <Authorities />
          </div>
        
          
        </div>
        <div className=''>
           <div className="rounded-full h-35 w-31   flex justify-center items-center absolute z-50 left-4 top-0">
              <Link href="/">
                <img src="/l.png" alt="" className="h-20 w-20   " />
              </Link>
            </div>
           <div>
  <div className="flex -mt-5">
    <div
      className="
        w-[500px] sm:w-[500px] md:w-[500px] lg:w-[400px] xl:w-[500px]
        h-[145px] lg:h-[220px]
        bg-[#631012]
        clipi
      "
    >
      {/* Content */}
    </div>
  </div>
</div>


            {/* Title section */}
           <div className="bg-white    ">
            <div className="flex flex-col items-end   gap-1   ">
              <div className="-mt-25 items-end lg:-mt-35">  {/* Valid: 24=6rem, 12=3rem, 8=2rem */}

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 pl-75 pr-2   xl:w-full   items-end  ">
                  National Institute of Technology, Hamirpur
                </h1>
                {/* <p className="text-sm text-gray-600 italic  ">
                  (An institute of national importance)
                </p> */}
              </div>
            </div>
            </div>
          </div>
</div>
        {/* Main Navigation Bar */}
        <div className=' sm:mb-10 lg:-mt-15 '>
         <div className="w-full flex justify-end ">
          <div className="   h-9 flex items-center rounded-tl-full bg-[#631012] px-4 sm:px-6 gap-4 text-white relative">
            {/* Desktop menu */}
            <div className="hidden lg:flex  gap-6 lg:gap-10 flex-1 text-sm  justify-end">
              <div id="abouth" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">About NITH</span>
              </div>
              <div id="authoritiesh" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Authorities</span>
              </div>
              <div id="administrationh" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Administration</span>
              </div>
              <div id="departmentsh" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Departments</span>
              </div>
              <div id="academicsh" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Academics</span>
              </div>
              <div id="studenth" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Student</span>
              </div>
              <div id="facultyh" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Faculty</span>
              </div>
              <div id="alumnih" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Alumni</span>
              </div>
              <div id="downloadsh" className="relative group cursor-pointer">
                <span className="hover:underline hover:text-yellow-300 transition-all duration-500">Downloads</span>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center gap-1 p-1 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-5 h-0.5 bg-white rounded" />
              <span className="w-5 h-0.5 bg-white rounded" />
              <span className="w-5 h-0.5 bg-white rounded" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="  lg:hidden w-full bg-[#631012] text-white px-4 py-4  text-sm border-t border-[#631012]/50 -mt-10">
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">About NITH</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Authorities</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Administration</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Departments</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Academics</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Student</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Faculty</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Alumni</button>
            <button className="block w-full text-left py-2 hover:text-yellow-300 transition-colors">Downloads</button>
          </div>
        )}
        </div>
        {/* Desktop Dropdown Panels (responsive width) */}
        {/* Desktop Dropdown Panels */}
<div
  id="about"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Aboutnith />
</div>

<div
  id="authorities"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Authorities />
</div>

<div
  id="administration"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Administration />
</div>

<div
  id="departments"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Department />
</div>

<div
  id="academics"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Academic />
</div>

<div
  id="student"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Student />
</div>

<div
  id="faculty"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Faculty />
</div>

<div
  id="alumni"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Alumni />
</div>

<div
  id="downloads"
  className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-7xl mx-auto bg-white/95 backdrop-blur-xl text-black shadow-2xl border border-gray-200 rounded-xl overflow-y-auto max-h-[70vh] p-6 sm:p-8 md:p-12"
  style={{ zIndex: 1000 }}
>
  <Downloads />
</div>

        {/* ... same pattern for administration, departments, academics, student, faculty, alumni, downloads ... */}
      
    </>
  );
}

export default Page;
