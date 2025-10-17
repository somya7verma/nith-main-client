import React from 'react';
import './header2.css';

function Header2() {
  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="bg-[#631012] text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-6">
          <div className="flex items-center gap-4 text-xs">
            <button className="hover:underline">A+</button>
            <button className="hover:underline">A-</button>
            <button className="hover:underline">Toggle Contrast</button>
            <button className="hover:underline">Grey Scale</button>
            <button className="hover:underline">Reset</button>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex items-center gap-4 text-xs">
              <a className="hover:underline">Home</a>
              <a className="hover:underline">Internet</a>
              <a className="hover:underline">eOffice</a>
              <a className="hover:underline">Directory</a>
              <a className="hover:underline">Faculty Portfolio</a>
            </nav>
            <div className="border border-white rounded px-2 py-1 text-xs">
              English
            </div>
          </div>
        </div>
      </div>

      {/* Main header with curved design */}
      <div className="relative h-24">
        {/* Maroon curved section */}
        <div className="absolute inset-0 curved-maroon"></div>

        {/* White curved section */}
        <div className="absolute inset-0 white-curved"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center z-20">
            <img
              src="/logo.png"
              alt="NITH Logo"
              className="h-16 w-16 rounded-full bg-white shadow-lg ring-2 ring-white"
            />
          </div>

          {/* Institute name - positioned to the right */}
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              National Institute of Technology, Hamirpur
            </h1>
            <p className="text-sm text-gray-600 italic">
              (An institute of national importance)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <nav className="bg-[#631012] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center gap-8 py-3 text-sm">
            <li>
              <a className="hover:underline transition-colors">About NITH</a>
            </li>
            <li>
              <a className="hover:underline transition-colors">Authorities</a>
            </li>
            <li>
              <a className="hover:underline transition-colors">
                Administration
              </a>
            </li>
            <li>
              <a className="hover:underline transition-colors">Departments</a>
            </li>
            <li>
              <a className="hover:underline transition-colors">Academics</a>
            </li>
            <li>
              <a className="hover:underline transition-colors">Student</a>
            </li>
            <li>
              <a className="hover:underline transition-colors">Faculty</a>
            </li>
            <li>
              <a className="hover:underline transition-colors">Alumni</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header2;
