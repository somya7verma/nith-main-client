'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';

// --- MOCK COMPONENTS ---
const MockComponent = ({ name }: { name: string }) => (
  <div className="animate-in fade-in zoom-in-95 duration-300">
    <h2 className="text-2xl font-bold text-[#631012] mb-4">{name} Content</h2>
    <p className="text-gray-600">
      This area will load the <b>{`<${name} />`}</b> component.
    </p>
  </div>
);
const Aboutnith = () => <MockComponent name="Aboutnith" />;
const Authorities = () => <MockComponent name="Authorities" />;
const Administration = () => <MockComponent name="Administration" />;
const Department = () => <MockComponent name="Department" />;
const Academic = () => <MockComponent name="Academic" />;
const Student = () => <MockComponent name="Student" />;
const Faculty = () => <MockComponent name="Faculty" />;
const Alumni = () => <MockComponent name="Alumni" />;
const Downloads = () => <MockComponent name="Downloads" />;

// --- MENU CONFIGURATION ---
const NAV_ITEMS = [
  { id: 'about', label: 'About NITH', component: <Aboutnith /> },
  { id: 'authorities', label: 'Authorities', component: <Authorities /> },
  {
    id: 'administration',
    label: 'Administration',
    component: <Administration />,
  },
  { id: 'departments', label: 'Departments', component: <Department /> },
  { id: 'academics', label: 'Academics', component: <Academic /> },
  { id: 'student', label: 'Student', component: <Student /> },
  { id: 'faculty', label: 'Faculty', component: <Faculty /> },
  { id: 'alumni', label: 'Alumni', component: <Alumni /> },
  { id: 'downloads', label: 'Downloads', component: <Downloads /> },
];

function Page() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Top Bar Lists
  const accessibilityItems = [
    'A+',
    'A-',
    'Toggle Contrast',
    'Grey Scale',
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
    <div className="flex flex-col w-full font-sans bg-white shadow-xl min-h-screen">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#500c0e] text-gray-300 text-[10px] py-2 px-4 md:px-8 border-b border-[#631012]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 tracking-widest uppercase">
          <div className="flex flex-wrap justify-center gap-4 opacity-90">
            {accessibilityItems.map((item) => (
              <button
                key={item}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-semibold md:ml-auto">
            {quickLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-white hover:underline decoration-white underline-offset-4 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
            <span className="hidden md:block w-px h-3 bg-white/20 my-auto" />
            <Link href="#" className="hover:text-white">
              English
            </Link>
          </div>
        </div>
      </div>

      {/* 2. HEADER - SEPARATED LAYOUT */}
      <div className="bg-white py-6 px-4 md:px-8 relative z-20 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(99,16,18,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,16,18,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-20 w-64 h-64 bg-[#631012]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* === LEFT SIDE: LOGO & PILLAR === */}
          <Link href="/" className="flex flex-row items-center gap-6 group">
            {/* LOGO */}
            <div className="relative p-2 transition-transform duration-500 group-hover:scale-105">
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

            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[0.9] mt-2 drop-shadow-sm group-hover:text-[#631012] transition-colors duration-300">
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
      <div className="w-full relative z-40 px-4 md:px-8 -mb-8">
        <div
          className="max-w-[1400px] mx-auto bg-[#631012] text-white shadow-2xl rounded-sm relative"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <nav className="flex flex-nowrap items-center justify-between px-2 overflow-x-auto no-scrollbar">
            <div className="flex flex-nowrap items-center h-full">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="group relative h-full"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                >
                  <div
                    className={`
                            h-14 px-3 lg:px-5 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] flex items-center gap-1 transition-all duration-300 relative z-10 cursor-pointer whitespace-nowrap
                            ${activeDropdown === item.id ? 'text-white scale-105' : 'text-white/80 hover:text-white'}
                        `}
                  >
                    {item.label}
                    <ChevronDown
                      size={10}
                      className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-white' : ''}`}
                    />
                  </div>

                  {/* Active Indicator: WHITE Line */}
                  <div
                    className={`
                            absolute top-0 left-0 w-full h-[3px] bg-white transform origin-center transition-transform duration-300
                            ${activeDropdown === item.id ? 'scale-x-100' : 'scale-x-0'}
                        `}
                  ></div>

                  {/* Hover Background: White Glow */}
                  <div
                    className={`
                            absolute inset-0 bg-white/10 transform origin-bottom transition-transform duration-300
                            ${activeDropdown === item.id ? 'scale-y-100' : 'scale-y-0'}
                        `}
                  ></div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block pr-4 pl-4 border-l border-white/10 h-8 my-auto">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all text-white">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </nav>

          {/* MEGA MENU DROPDOWN - Updated Border Color */}
          <div
            className={`
                    absolute top-full left-0 w-full bg-white text-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-t-4 border-[#631012]
                    transition-all duration-300 ease-in-out origin-top z-50
                    ${activeDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                `}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
          >
            {activeDropdown && (
              <div className="p-10 min-h-[300px] max-w-[1400px] mx-auto overflow-auto max-h-[70vh]">
                {NAV_ITEMS.find((i) => i.id === activeDropdown)?.component}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero / Body Placeholder */}
      <div className="w-full bg-gray-100 h-[700px] pt-28 flex items-center justify-center border-b border-gray-200">
        <div className="text-center opacity-30">
          <div className="w-16 h-16 border-4 border-[#631012] mx-auto mb-4 animate-spin-slow"></div>
          <p className="text-xl font-mono text-[#631012] tracking-widest">
            CONTENT AREA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
