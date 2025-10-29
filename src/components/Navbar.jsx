import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400" />
            <span className="font-semibold tracking-tight">Minh Clone</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <button className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium md:px-5 hover:bg-white/90 active:scale-[0.98] transition">
            <span>Let’s talk</span>
          </button>

          <button className="md:hidden rounded-xl border border-white/10 p-2 text-white/80"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
