'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/services', label: 'Услуги' },
    { href: '/about', label: 'О дата-центре' },
    { href: '/advantages', label: 'Преимущества' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-[999] bg-white border-b border-gray-200 shadow-sm">
      <div className="container">
        <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="YOURDC - Профессиональный дата-центр"
              width={180}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-data-blue hover:text-signal-red transition-colors duration-200 font-medium relative ${
                  pathname === link.href ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-signal-red' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacts" className="btn btn-colored">
              Консультация
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-data-blue transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-data-blue transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-data-blue transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden py-6 border-t border-gray-200 animate-in slide-in-from-top duration-300"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-4 rounded-lg transition-colors font-medium ${
                    pathname === link.href
                      ? 'bg-data-blue/10 text-data-blue'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contacts" className="btn btn-colored w-full mt-2">
                Консультация
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
