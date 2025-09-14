'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { FWRDNavigation } from '@/components/ui/Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              FWRD<span className="text-sm font-normal">®</span>
            </div>
            <div className="text-xs text-gray-500 hidden sm:block">
              HEADWEAR & APPAREL
            </div>
          </Link>

          {/* Navigation */}
          <FWRDNavigation className="hidden md:flex" />
            <Link href="/category/headwear" className="text-gray-700 hover:text-primary transition-colors">
              HEADWEAR
            </Link>
            <Link href="/category/apparel" className="text-gray-700 hover:text-primary transition-colors">
              APPAREL
            </Link>
            <Link href="/catalogue" className="text-gray-700 hover:text-primary transition-colors">
              CATALOGUE
            </Link>
            <Link href="/find-reseller" className="text-gray-700 hover:text-primary transition-colors">
              FIND A RESELLER
            </Link>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="SEARCH"
                className="bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none w-32"
              />
              <Search className="h-4 w-4 text-gray-500 ml-2" />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="py-4 space-y-4">
              <Link href="/category/headwear" className="block text-gray-700 hover:text-primary">
                HEADWEAR
              </Link>
              <Link href="/category/apparel" className="block text-gray-700 hover:text-primary">
                APPAREL
              </Link>
              <Link href="/catalogue" className="block text-gray-700 hover:text-primary">
                CATALOGUE
              </Link>
              <Link href="/find-reseller" className="block text-gray-700 hover:text-primary">
                FIND A RESELLER
              </Link>
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none flex-1"
                />
                <Search className="h-4 w-4 text-gray-500 ml-2" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;