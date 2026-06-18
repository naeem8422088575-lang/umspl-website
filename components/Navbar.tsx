'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { COMPANY_METADATA } from '../lib/constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/vessel-types' },
    { name: 'Vacancies', href: '/vacancies' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-slate-900 rounded p-1">
              <Image 
                src="/logo.png" 
                alt={COMPANY_METADATA.abbreviation} 
                width={48} 
                height={48} 
                className="rounded-full"
              />
              <span className="text-xl font-black tracking-wider text-white group-hover:text-ocean-light transition-colors">
                {COMPANY_METADATA.abbreviation}
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-ocean",
                    isActive 
                      ? "bg-slate-800 text-white font-bold" 
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pl-4 ml-2 border-l border-slate-700">
              <Link 
                href="/apply" 
                className="bg-ocean text-white px-5 py-2.5 rounded-lg font-bold hover:bg-ocean-dark transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Apply Online
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-ocean transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "lg:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-200 ease-in-out shadow-2xl overflow-hidden",
          isOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 h-full overflow-y-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive 
                    ? "bg-slate-800 text-white font-bold" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t border-slate-800">
            <Link 
              href="/apply" 
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-ocean text-white px-4 py-4 rounded-lg font-bold shadow-md hover:bg-ocean-dark transition-colors"
            >
              Submit Application
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
