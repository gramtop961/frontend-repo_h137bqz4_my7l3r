import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-rose-500" />
            <span className="font-semibold tracking-tight text-neutral-900">Sundari Sarees</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#collections" className="hover:text-rose-600 transition-colors">Collections</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-neutral-300">
              <Search size={16} />
              <span>Search</span>
            </button>
            <button className="relative p-2 rounded-full border border-neutral-200 hover:border-neutral-300">
              <ShoppingBag size={18} />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-rose-600 text-white text-xs grid place-content-center">2</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
