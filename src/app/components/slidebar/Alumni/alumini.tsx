import React from 'react';

interface LinkItem {
  title: string;
  href: string;
  hasIcon?: boolean;
  disabled?: boolean;
}

function Alumni() {
  const alumniSections = {
    leftColumn: [
      { title: 'Activities', href: '/alumni/activities' },
      { title: 'Functionaries', href: '/alumni/functionaries' },
      {
        title: 'Alumni Notices',
        href: 'https://alumni.nith.ac.in/newsroom.dz',
      },
      {
        title: 'Alumni Related MoU',
        href: 'https://nith.ac.in/uploads/topics/mouepack16939083811860.pdf',
      },
      { title: 'Alumni Assist', href: '/alumni/assist' },
    ],
    secondColumn: [
      {
        section: 'Alumni Affairs Activities',
        links: [
          {
            title: 'List of Alumni',
            href: 'https://alumni.nith.ac.in/members.dz',
            hasIcon: true,
          },
          {
            title: 'Alumni Registration',
            href: 'https://alumni.nith.ac.in/user/signup.dz',
            hasIcon: true,
          },
          // disabling this link kyuki mujhe samajh nhi aara yha kya bnao
          {
            title: 'Alumni Local Chapters of NITH',
            href: 'https://alumni.nith.ac.in/chapters.dz',
            hasIcon: true,
            disabled: true,
          },
          {
            title: 'Annual Alumni Meet of NITH',
            href: '/alumni/annual-meet',
            hasIcon: true,
          },
          {
            title: 'Distinguished Alumni of NITH',
            href: '/alumni/distinguished',
            hasIcon: true,
          },
        ],
      },
    ],
    thirdColumn: [
      {
        section: 'Resource Generation Activities',
        links: [
          {
            title: 'Endowment Fund Generation',
            href: '/alumni/endowment-fund',
            hasIcon: true,
          },
          {
            title: 'Awards Initiatives',
            href: '/alumni/awards-initiatives',
            hasIcon: true,
          },
        ],
      },
    ],
    rightColumn: [
      {
        section: 'Portal',
        links: [
          {
            title: 'Alumni Portal',
            href: 'https://alumni.nith.ac.in/',
            hasIcon: true,
          },
        ],
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
                    href={(link as LinkItem).disabled ? undefined : link.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      (link as LinkItem).disabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-black hover:bg-gray-200 cursor-pointer'
                    }`}
                    onClick={
                      (link as LinkItem).disabled
                        ? (e) => e.preventDefault()
                        : undefined
                    }
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
                    href={(link as LinkItem).disabled ? undefined : link.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      (link as LinkItem).disabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-black hover:bg-gray-200 cursor-pointer'
                    }`}
                    onClick={
                      (link as LinkItem).disabled
                        ? (e) => e.preventDefault()
                        : undefined
                    }
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
                    href={(link as LinkItem).disabled ? undefined : link.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      (link as LinkItem).disabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-black hover:bg-gray-200 cursor-pointer'
                    }`}
                    onClick={
                      (link as LinkItem).disabled
                        ? (e) => e.preventDefault()
                        : undefined
                    }
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
