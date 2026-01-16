import Link from 'next/link';

const authoritiesSections = {
  firstColumn: [
    {
      section: 'Board of Governors (BOG)',
      links: [
        {
          title: 'Composition of BOG',
          href: 'https://nith.ac.in/uploads/topics/17642163716028.pdf',
        },
        { title: 'Minutes of BOG', href: '/authorities/minutesofbg' },
      ],
    },
  ],
  secondColumn: [
    {
      section: 'Finance Committee (FC)',
      links: [
        {
          title: 'Composition of FC',
          href: 'https://nith.ac.in/uploads/topics/17642162991410.pdf',
        },
        { title: 'Minutes of FC', href: '/authorities/minutesofc' },
      ],
    },
  ],
  thirdColumn: [
    {
      section: 'Building Works Committee (BWC)',
      links: [
        {
          title: 'Composition of BWC',
          href: 'https://nith.ac.in/uploads/topics/16624339297916.pdf',
        },
        { title: 'Minutes of BWC', href: '/authorities/minutesbwc' },
      ],
    },
  ],
  fourthColumn: [
    {
      section: 'Senate',
      links: [
        {
          title: 'Composition of Senate',
          href: '/authorities/senate/composition',
        },
        { title: 'Minutes of Senate', href: '/authorities/minutesswc' },
      ],
    },
  ],
};

function Authorities() {
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
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    <span className="mr-2">›</span>
                    {link.title}
                  </Link>
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
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    <span className="mr-2">›</span>
                    {link.title}
                  </Link>
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
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    <span className="mr-2">›</span>
                    {link.title}
                  </Link>
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
                  <Link
                    key={linkIdx}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors text-sm"
                  >
                    <span className="mr-2">›</span>
                    {link.title}
                  </Link>
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
