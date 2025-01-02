'use client';

import React from 'react';
import NotedLogo from '@/../public/svg/noted-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Bars4Icon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export type NavigationLink = {
  text: string;
  href: string;
};

export const navLinks: NavigationLink[] = [
  { text: 'About Us', href: '/#about' },
  { text: 'Products', href: '/#products' }
];

export default function Header() {
  const [isMobileMenuOpen, toggleMobileMenu] = React.useState(false);

  return (
    <header
      aria-label="Site Header"
      className="fixed inset-x-0 top-0 z-50 bg-white"
    >
      <div className="mx-auto flex h-24 w-full justify-between px-4 md:w-[70vw]">
        <Image
          src={NotedLogo}
          alt="Noted Musical Accessories Logo"
          className="h-auto w-24"
        />

        <button
          className="block md:hidden"
          onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
        >
          <Bars4Icon className="fill-[var(--primary) h-auto] w-8" />
        </button>

        <nav className="hidden place-items-center md:flex">
          <ul className="flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-lg">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="fixed inset-x-0 -z-10 h-max min-h-screen w-full justify-center bg-white transition-colors duration-300"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-32 pt-60 text-center text-2xl">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="font-extrabold transition-colors duration-300"
                      onClick={() => toggleMobileMenu(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
