import React from 'react';

function Authorities() {
  const authoritiesSections = {
    firstColumn: [
      {
        section: 'Board of Governors (BOG)',
        links: [
          { title: 'Composition of BOG', href: '#', hasIcon: true },
          { title: 'Minutes of BOG', href: '#', hasIcon: true },
        ],
      },
    ],
    secondColumn: [
      {
        section: 'Finance Committee (FC)',
        links: [
          { title: 'Composition of FC', href: '#', hasIcon: true },
          { title: 'Minutes of FC', href: '#', hasIcon: true },
        ],
      },
    ],
    thirdColumn: [
      {
        section: 'Building Works Committee (BWC)',
        links: [
          { title: 'Composition of BWC', href: '#', hasIcon: true },
          { title: 'Minutes of BWC', href: '#', hasIcon: true },
        ],
      },
    ],
    fourthColumn: [
      {
        section: 'Senate',
        links: [
          { title: 'Composition of Senate', href: '#', hasIcon: true },
          { title: 'Minutes of Senate', href: '#', hasIcon: true },
        ],
      },
    ],
  };

  return (
    <div className="grid grid-cols-4 gap-8">
      {/* First Column - Board of Governors */}
      <div className="space-y-4">
        {authoritiesSections.firstColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-3 text-sm">
              {section.section}
            </h3>
            {section.links && section.links.length > 0 && (
              <div className="space-y-1">
                {section.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    {link.hasIcon && <span className="mr-2">›</span>}
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Second Column - Finance Committee */}
      <div className="space-y-4">
        {authoritiesSections.secondColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-3 text-sm">
              {section.section}
            </h3>
            {section.links && section.links.length > 0 && (
              <div className="space-y-1">
                {section.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    {link.hasIcon && <span className="mr-2">›</span>}
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Third Column - Building Works Committee */}
      <div className="space-y-4">
        {authoritiesSections.thirdColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-3 text-sm">
              {section.section}
            </h3>
            {section.links && section.links.length > 0 && (
              <div className="space-y-1">
                {section.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    {link.hasIcon && <span className="mr-2">›</span>}
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fourth Column - Senate */}
      <div className="space-y-4">
        {authoritiesSections.fourthColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-3 text-sm">
              {section.section}
            </h3>
            {section.links && section.links.length > 0 && (
              <div className="space-y-1">
                {section.links.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    {link.hasIcon && <span className="mr-2">›</span>}
                    {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Authorities;
