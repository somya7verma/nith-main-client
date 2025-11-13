import React from 'react';
import Link from 'next/link';

function Aboutnith() {
  const links = [
    { label: 'History', href: '/about/history' },
    { label: 'About the City', href: '/about/the-city' },
    { label: 'Vision & Mission', href: '#' },
    { label: 'Goals', href: '#' },
    { label: 'Core Values', href: '/about/core-values' },
    { label: 'Connectivity', href: '/about/connectivity' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="block px-6 py-4 text-black hover:bg-gray-200 text-center transition-colors font-medium text-base rounded-lg border border-gray-300 hover:border-black"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Aboutnith;
