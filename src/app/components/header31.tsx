import React from 'react';
import './header.css';

function Page() {
  return (
    <>
      <div className="w-full relative ">
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
        <div className=" flex justify-end mb-0.5 -mt-7 ">
          <div className="flex justify-center items-center rounf h-10 w-[85%] rounded-tl-full  bg-[#631012] gap-4 text-white">
            <ul className="flex  items-center gap-8 py-0 text-sm text-white">
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  About NITH
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  Authorities
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  Administration
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  Academics
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  Student
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  Faculty
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-yellow-300 transition-colors">
                  Alumni
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
