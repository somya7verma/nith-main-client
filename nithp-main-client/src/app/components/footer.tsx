import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#3d0f12] via-[#4d1a1d] to-[#5b2226] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left side - Logo, Institute Info, Contact, Map, Social Icons */}
          <div className="flex-shrink-0 space-y-4 max-w-xs">
            {/* Logo and Institute Name */}
            <div className="flex items-start gap-3">
              <img
                src="/logo.png"
                alt="NITH logo"
                className="h-12 w-12 rounded-full ring-2 ring-white bg-white p-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-sm leading-tight text-white">
                  National Institute Of Technology, Hamirpur
                </h3>
              </div>
            </div>

            {/* Address and Phone */}
            <div className="space-y-2 text-xs text-gray-200">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>NIT, Hamirpur, Himachal Pradesh 177005</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Phone: +91-12345-67890</span>
              </div>
            </div>

            {/* Map and Social Row */}
            <div className="flex items-start gap-3">
              {/* Map Thumbnail */}
              <div className="h-16 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src="/map-thumb.png"
                  alt="map"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Social Icons and Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold hover:bg-white/30 transition-colors cursor-pointer">
                    f
                  </div>
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold hover:bg-white/30 transition-colors cursor-pointer">
                    in
                  </div>
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold hover:bg-white/30 transition-colors cursor-pointer">
                    x
                  </div>
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold hover:bg-white/30 transition-colors cursor-pointer">
                    ig
                  </div>
                </div>

                <button className="bg-white/20 text-gray-200 rounded-full px-3 py-1 text-xs border border-white/30 hover:bg-white/30 transition-colors">
                  Write Email
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Three columns of links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 lg:max-w-2xl lg:ml-auto">
            <div>
              <h4 className="text-yellow-400 font-semibold mb-3 text-sm">
                Rules and Reports
              </h4>
              <ul className="text-gray-200 text-xs space-y-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Recruitment Rule
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-3 text-sm">
                GOI Initiatives@nith
              </h4>
              <ul className="text-gray-200 text-xs space-y-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Recruitment Rule
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-3 text-sm">
                Important Links
              </h4>
              <ul className="text-gray-200 text-xs space-y-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    Recruitment Rule
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-6 pt-4 text-center">
          <p className="text-gray-300 text-xs">Thank You For Visiting Us!!!!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
