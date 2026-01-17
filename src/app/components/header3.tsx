'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';
import Aboutnith from '../components/slidebar/aboutnith/aboutnith';
import Academic from '../components/slidebar/Academics/academic';
import Administration from '../components/slidebar/Administration/administration';
import Authorities from '../components/slidebar/Authorities/authorities';
import Alumni from '../components/slidebar/Alumni/alumini';
import Department from '../components/slidebar/Departments/department';
import Downloads from '../components/slidebar/downloads/downloads';
import Faculty from '../components/slidebar/Faculty/faculty';
import Student from '../components/slidebar/Student/student';

function Header31() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Top Bar Lists
  const accessibilityItems = [
    'A+',
    'A-',
    'Toggle Contrast',
    'Grey Scale',
    'Links',
    'Reset',
  ];
  const quickLinks = [
    'Home',
    'Internet',
    'eOffice',
    'Directory',
    'Faculty Portfolio',
  ];

  return (
    <div className="flex flex-col w-full font-sans bg-white shadow-xl ">
      <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(99,16,18,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,16,18,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>

      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#500c0e] text-gray-300 text-[10px] py-2 px-4 md:px-8 border-b border-[#631012]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 tracking-widest uppercase">
          <div className="flex flex-wrap justify-center gap-4 opacity-90">
            {accessibilityItems.map((item) => (
              <button
                key={item}
                className="hover:text-white hover:underline transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 font-semibold md:ml-auto">
            {quickLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-white hover:underline decoration-white underline-offset-4 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
            <span className="hidden md:block w-px h-3 bg-white/20 my-auto hover:text-black rounded-sm hover:bg-white" />
            <Link
              href="#"
              className="hover:text-black rounded-sm hover:bg-white p-1"
            >
              English
            </Link>
          </div>
        </div>
      </div>

      {/* 2. HEADER - SEPARATED LAYOUT */}
      <div className=" py-2 px-4 md:px-8 relative z-20 overflow-hidden">
        {/* Background Texture */}

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-20 w-64 h-64 bg-[#631012]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* === LEFT SIDE: LOGO & PILLAR === */}
          <Link href="/" className="flex flex-row items-center gap-6 group">
            {/* LOGO */}
            <div className="relative p-2 transition-transform duration-500  ">
              <div className="relative h-24 w-24 lg:h-28 lg:w-28 drop-shadow-xl">
                <img
                  src="/l.png"
                  alt="NITH Logo"
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </Link>

          {/* === RIGHT SIDE: TEXT STACK === */}
          <Link
            href="/"
            className="flex flex-col justify-center items-center md:items-end text-center md:text-right group"
          >
            <div className="flex items-center gap-3">
              <span className="hidden lg:block w-12 h-[2px] bg-gradient-to-l from-[#631012] to-transparent"></span>
              <h3 className="text-xs lg:text-sm font-bold text-[#631012] uppercase tracking-[0.25em]">
                National Institute of Technology
              </h3>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-black tracking-tighter leading-[0.9] mt-2 drop-shadow-sm  transition-colors duration-300">
              HAMIRPUR
            </h1>

            <p className="text-[11px] text-gray-500 font-serif italic tracking-wide mt-2 flex items-center gap-2 justify-end">
              An Institute of National Importance
              {/* Dot color changed to Maroon */}
              <span className="w-1.5 h-1.5 bg-[#631012] rounded-full"></span>
            </p>
          </Link>
        </div>
      </div>

      {/* 3. NAVIGATION BAR - WHITE HOVER EFFECTS */}
      <div className="w-full relative z-40 px-4 md:px-8 mb-1">
        <div className="max-w-[1400px] mx-auto bg-[#631012] text-white shadow-2xl rounded-sm relative overflow-visible">
          <nav className="flex flex-nowrap items-center justify-between px-2 no-scrollbar">
            <div className="flex flex-nowrap items-center h-full">
              <div
                className="text-white  text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                About NITH
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('authorities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Authorities
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'authorities' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('administration')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Administration
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'administration' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('departments')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Departments
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'departments' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('academics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Academics
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'academics' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('student')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Student
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'student' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('faculty')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Faculty
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'faculty' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('alumni')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Alumni
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'alumni' ? 'rotate-180' : ''}`}
                />
              </div>

              <div
                className="text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] px-3 lg:px-5 h-14 flex items-center gap-1 cursor-pointer hover:text-white transition-all whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('downloads')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Downloads
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-300 ${activeDropdown === 'downloads' ? 'rotate-180' : ''}`}
                />
              </div>
            </div>
          </nav>

          {/* Single Dropdown Menu */}
          {activeDropdown && (
            <div
              className="absolute top-full left-0 right-0 bg-white  text-black shadow-2xl z-[9999] overflow-auto  "
              style={{ minHeight: '400px', maxHeight: '70vh' }}
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="p-10 max-w-[1400px] mx-auto">
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
  );
}

export default Header31;
