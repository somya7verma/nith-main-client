import React from 'react';

function Department() {
  const departmentSections = {
    firstColumn: [
      {
        section: 'Engineering',
        links: [
          { title: 'Computer Science & Engineering', href: '#', hasIcon: true },
          { title: 'Civil Engineering', href: '#', hasIcon: true },
          { title: 'Chemical Engineering', href: '#', hasIcon: true },
          {
            title: 'Electronics & Communication Engineering',
            href: '#',
            hasIcon: true,
          },
          { title: 'Electrical Engineering', href: '#', hasIcon: true },
          { title: 'Mechanical Engineering', href: '#', hasIcon: true },
          { title: 'Material Science & Engineering', href: '#', hasIcon: true },
        ],
      },
    ],
    secondColumn: [
      {
        section: 'Sciences',
        links: [
          { title: 'Chemistry', href: '#', hasIcon: true },
          {
            title: 'Mathematics & Scientific Computing',
            href: '#',
            hasIcon: true,
          },
          { title: 'Physics & Photonics Science', href: '#', hasIcon: true },
        ],
      },
      {
        section: 'Centre',
        links: [
          { title: 'Centre For Energy Studies', href: '#', hasIcon: true },
        ],
      },
    ],
    thirdColumn: [
      {
        section: 'Other Departments',
        links: [
          { title: 'Architecture', href: '#', hasIcon: true },
          { title: 'Humanities & Social Sciences', href: '#', hasIcon: true },
          { title: 'Management Studies', href: '#', hasIcon: true },
        ],
      },
    ],
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {/* First Column - Engineering */}
      <div className="space-y-4">
        {departmentSections.firstColumn.map((section, idx) => (
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

      {/* Second Column - Sciences & Centre */}
      <div className="space-y-6">
        {departmentSections.secondColumn.map((section, idx) => (
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

      {/* Third Column - Other Departments */}
      <div className="space-y-4">
        {departmentSections.thirdColumn.map((section, idx) => (
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

export default Department;
