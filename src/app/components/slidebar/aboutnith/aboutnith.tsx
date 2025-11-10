import React from 'react';

function Aboutnith() {
  const links = [
    { label: 'History', href: '#' },
    { label: 'Vision & Mission', href: '#' },
    { label: 'Goals', href: '#' },
    { label: 'Core Values', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Connectivity', href: '#' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="block px-6 py-4 text-black hover:bg-gray-200 text-center transition-colors font-medium text-base rounded-lg border border-gray-300 hover:border-black"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default Aboutnith;
