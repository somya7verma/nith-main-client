import React from 'react';

function Footer() {
  // --- Data Arrays for Links ---

  const rulesLinks = [
    { name: 'Recruitment Rules', href: '#' },
    { name: 'Employee Rules', href: '#' },
    { name: 'Institute Rules', href: '#' },
    { name: 'Annual Reports', href: '#' },
    { name: 'Notices/Office Orders', href: '#' },
    { name: 'Act & Statutes', href: '#' },
    { name: 'Photo/Video Gallery', href: '#' },
    { name: 'Research & Publications @ NITH', href: '#' },
    { name: 'Media Coverage @ NITH', href: '#' },
    { name: 'RTI', href: '#' },
    { name: 'New Criminal Laws', href: '#' },
  ];

  const goiLinks = [
    { name: 'DST NIDHI (i-TBI@NITH)', href: '#' },
    { name: 'CM Startup @ NITH', href: '#' },
    { name: 'MOOC @ NITH', href: '#' },
    { name: 'GIAN @ NITH', href: '#' },
    { name: 'NIRF@NITH', href: '#' },
    { name: 'ARIIA@NITH', href: '#' },
    { name: 'SKill India @ NITH', href: '#' },
    { name: 'SBA @ NITH', href: '#' },
    { name: 'UBA @ NITH', href: '#' },
    { name: 'RAA @ NITH', href: '#' },
    { name: 'EBSB @ NITH', href: '#' },
    { name: 'Literacy Mission @ NITH', href: '#' },
    { name: 'NAD @ NITH', href: '#' },
  ];

  const importantLinks = [
    { name: 'Newsletter', href: '#' },
    { name: 'MoE', href: '#' },
    { name: 'PMRF', href: '#' },
    { name: 'NIT Council', href: '#' },
    { name: 'Digital India', href: '#' },
    { name: 'National Career Service', href: '#' },
    { name: 'Vittiya Saksharta Abhiyan', href: '#' },
    { name: 'CEC', href: '#' },
    { name: 'MyGov', href: '#' },
    { name: 'PMNRF', href: '#' },
    { name: 'TIFAC-CORE@NITH', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'BIS', href: '#' },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[#3d0f12] via-[#4d1a1d] to-[#5b2226] text-white py-10 font-sans border-t-4 border-white/20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col xl:flex-row items-start justify-between gap-12">
          {/* Left side - Logo, Institute Info, Contact, Map, Social Icons */}
          <div className="flex-shrink-0 space-y-6 max-w-sm">
            {/* Logo and Institute Name */}
            <div className="flex items-start gap-4">
              <img
                src="/logo.png"
                alt="NITH logo"
                className="h-16 w-16 rounded-full ring-2 ring-white/20 bg-white p-1 shadow-lg"
              />
              <div>
                <h3 className="font-bold text-lg leading-tight text-white tracking-wide">
                  National Institute Of Technology
                </h3>
                <p className="text-sm font-medium text-white/80">
                  Hamirpur, Himachal Pradesh
                </p>
              </div>
            </div>

            {/* Address and Phone */}
            <div className="space-y-3 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-white mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="leading-relaxed">
                  NIT Hamirpur, Anu, Hamirpur,
                  <br />
                  Himachal Pradesh 177005, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-white shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91-1972-254011</span>
              </div>
            </div>

            {/* Map and Social Row */}
            <div className="flex items-center gap-4 pt-2">
              {/* Social Icons */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  {['f', 'in', 'x', 'ig'].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white hover:bg-white hover:text-[#3d0f12] transition-all duration-300 border border-white/20"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:registrar@nith.ac.in"
                  className="inline-block text-xs font-semibold text-white hover:text-white/80 transition-colors underline underline-offset-4"
                >
                  Write to Registrar
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Three columns of links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
            {/* Column 1: Rules & Reports */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base border-b border-white/20 pb-2 inline-block">
                Rules and Reports
              </h4>
              <ul className="text-white/80 text-xs space-y-2.5">
                {rulesLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: GOI Initiatives */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base border-b border-white/20 pb-2 inline-block">
                GOI Initiatives@nith
              </h4>
              <ul className="text-white/80 text-xs space-y-2.5">
                {goiLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Important Links */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base border-b border-white/20 pb-2 inline-block">
                Important Links
              </h4>
              <ul className="text-white/80 text-xs space-y-2.5">
                {importantLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-xs tracking-wider">
            © {new Date().getFullYear()} National Institute of Technology,
            Hamirpur. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
