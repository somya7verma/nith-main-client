'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Home,
  BookOpen,
  Users,
  FlaskConical,
  Newspaper,
  Calendar,
  Bell,
  Database,
  Key,
  UserCog,
  Menu,
  X,
} from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <LayoutDashboard size={20} />,
    href: '/admin/analytics',
  },
  { id: 'home', label: 'Home', icon: <Home size={20} />, href: '/admin/home' },
  {
    id: 'academics',
    label: 'Academics',
    icon: <BookOpen size={20} />,
    href: '/admin/academics',
  },
  {
    id: 'people',
    label: 'People',
    icon: <Users size={20} />,
    href: '/admin/people',
  },
  {
    id: 'researches',
    label: 'Researches',
    icon: <FlaskConical size={20} />,
    href: '/admin/researches',
  },
  {
    id: 'news',
    label: 'News',
    icon: <Newspaper size={20} />,
    href: '/admin/news',
  },
  {
    id: 'events',
    label: 'Events',
    icon: <Calendar size={20} />,
    href: '/admin/events',
  },
  {
    id: 'announcements',
    label: 'Announcements',
    icon: <Bell size={20} />,
    href: '/admin/announcements',
  },
  {
    id: 'departmental-data',
    label: 'Departmental Data',
    icon: <Database size={20} />,
    href: '/admin/departmental-data',
  },
  {
    id: 'credentials',
    label: 'Credentials',
    icon: <Key size={20} />,
    href: '/admin/credentials',
  },
  { id: 'hod', label: 'HOD', icon: <UserCog size={20} />, href: '/admin/hod' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#631012] text-[#F9F9F9] p-2 rounded-lg shadow-lg hover:bg-[#7a1214] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen bg-[#171717] text-[#F9F9F9] 
          flex flex-col shadow-2xl z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 w-64
        `}
      >
        <div className="p-6 border-b border-[#631012]/30">
          <h1 className="text-2xl font-bold text-[#F9F9F9] tracking-tight">
            Admin Panel
          </h1>
          <p className="text-sm text-[#F9F9F9]/60 mt-1">NIT Hamirpur</p>
        </div>

        <nav className="flex-1 overflow-y-hidden py-4 px-3">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-all duration-200 group
                      ${
                        isActive
                          ? 'bg-[#631012] text-[#F9F9F9] shadow-lg'
                          : 'text-[#F9F9F9]/80 hover:bg-[#631012]/20 hover:text-[#F9F9F9]'
                      }
                    `}
                  >
                    <span
                      className={`
                      ${isActive ? 'text-[#F9F9F9]' : 'text-[#F9F9F9]/60 group-hover:text-[#F9F9F9]'}
                    `}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
