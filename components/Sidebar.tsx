// src/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, BookOpen, Brain, MessageSquare, BarChart3 } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/' },
  { name: 'Testy ABCD', icon: <BookOpen size={20} />, href: '/testy' },
  { name: 'Fiszki', icon: <Brain size={20} />, href: '/fiszki' },
  { name: 'Egzamin AI', icon: <MessageSquare size={20} />, href: '/egzamin-ai' },
  { name: 'Statystyki', icon: <BarChart3 size={20} />, href: '/statystyki' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#111118] border-r border-[#1e1e2e] fixed left-0 top-0 flex flex-col p-6 z-50">
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6c63ff] to-[#ff6584] font-syne">
          Studiq
        </h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-[#6b6b85] hover:text-[#e8e8f0] hover:bg-[#6c63ff]/10 rounded-xl transition-all group"
          >
            <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="font-medium text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-[#1e1e2e]">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#ff6584]" />
          <div className="text-xs">
            <p className="text-[#e8e8f0] font-semibold">Student</p>
            <p className="text-[#6b6b85]">Wersja Pro</p>
          </div>
        </div>
      </div>
    </aside>
  );
};