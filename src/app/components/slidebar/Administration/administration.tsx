import React from 'react';

function Administration() {
  const administrationSections = {
    leftColumn: [{ title: 'Visitor', href: '/administration/visitor' }],
    secondColumn: [
      {
        section: 'Chairperson',
        links: [
          { title: 'Chairperson Message/Profile', href: '#', hasIcon: true },
          { title: 'Former Chairpersons', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Deans/Associate Deans',
        links: [],
      },
      {
        section: 'Institute Coordinator',
        links: [],
      },
    ],
    thirdColumn: [
      {
        section: 'Director',
        links: [
          { title: 'Director', href: '#', hasIcon: true },
          { title: 'Former Directors/Principals', href: '#', hasIcon: true },
          { title: 'Director Office', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Head of Departments',
        links: [],
      },
      {
        title: 'Faculty Incharges',
        href: '#',
      },
    ],
    rightColumn: [
      {
        section: 'Registrar',
        links: [
          { title: 'Registrar', href: '#', hasIcon: true },
          { title: 'Registrar Office', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Nodal Officers',
        links: [],
      },
    ],
  };

  return (
    <div className="grid grid-cols-4 gap-8">
      {/* Left Column */}
      <div className="space-y-4">
        {administrationSections.leftColumn.map((item, index) => (
          <div key={index}>
            <a
              href={item.href}
              className="block text-black font-semibold text-sm hover:text-gray-600 transition-colors"
            >
              {item.title}
            </a>
          </div>
        ))}
        <div className="mt-8">
          <a
            href="/administration/vigilance"
            className="block text-black font-semibold text-sm hover:text-gray-600 transition-colors"
          >
            Chief Vigilance Officer
          </a>
        </div>
      </div>

      {/* Second Column */}
      <div className="space-y-6">
        {administrationSections.secondColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-2 text-sm">
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
        {administrationSections.thirdColumn.map((item, idx) => {
          if (item.section) {
            return (
              <div key={idx}>
                <h3 className="font-semibold text-black mb-2 text-sm">
                  {item.section}
                </h3>
                {item.links && item.links.length > 0 && (
                  <div className="space-y-1">
                    {item.links.map((link, linkIdx) => (
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
            );
          } else {
            return (
              <div key={idx}>
                <h3 className="font-semibold text-black mb-2 text-sm">
                  {item.title}
                </h3>
              </div>
            );
          }
        })}
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {administrationSections.rightColumn.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-black mb-2 text-sm">
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

export default Administration;
