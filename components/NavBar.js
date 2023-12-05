"use client"
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* ... Mobile menu button and other UI elements ... */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link href={link.href} key={link.name}>
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Project Details', href: '/projectDetails' },
  { name: 'To Do List', href: '/toDoList' },
  { name: 'Visualization', href: '/visualization' },
];

export default NavBar;
