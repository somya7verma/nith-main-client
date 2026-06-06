'use client';

import React from 'react';
import Sidebar from './sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      <Sidebar />

      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
