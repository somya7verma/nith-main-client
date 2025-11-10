import React from 'react';

function Alumni() {
  const alumniSections = {
    leftColumn: [
      { title: 'Activities', href: '#' },
      { title: 'Functionaries', href: '#' },
      { title: 'Alumni Related Notices', href: '#' },
      { title: 'Alumni Related MoU', href: '#' },
      { title: 'Alumni Assist', href: '#' },
    ],
    secondColumn: [
      {
        section: 'Alumni Affairs Activities',
        links: [
          { title: 'List of Alumni', href: '#', hasIcon: true },
          { title: 'Alumni Registration', href: '#', hasIcon: true },
          { title: 'Alumni Local Chapters of NITH', href: '#', hasIcon: true },
          { title: 'Annual Alumni Meet of NITH', href: '#', hasIcon: true },
          { title: 'Distinguished Alumni of NITH', href: '#', hasIcon: true },
        ],
      },
    ],
    thirdColumn: [
      {
        section: 'Resource Generation Activities',
        links: [
          { title: 'Endowment Fund Generation', href: '#', hasIcon: true },
          { title: 'Awards Initiatives', href: '#', hasIcon: true },
        ],
      },
    ],
    rightColumn: [
      {
        section: 'Portal',
        links: [{ title: 'Alumni Network', href: '#', hasIcon: true }],
      },
    ],
  };

  return (
    <div className="grid grid-cols-4 gap-8">
      {/* Left Column */}
      <div className="space-y-2">
        {alumniSections.leftColumn.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block text-black font-medium text-sm hover:text-gray-600 transition-colors py-1"
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* Second Column */}
      <div className="space-y-6">
        {alumniSections.secondColumn.map((section, idx) => (
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

      {/* Third Column */}
      <div className="space-y-6">
        {alumniSections.thirdColumn.map((section, idx) => (
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

      {/* Right Column */}
      <div className="space-y-6">
        {alumniSections.rightColumn.map((section, idx) => (
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

export default Alumni;
