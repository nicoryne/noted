'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-[var(--primary)] bg-white">
      <div className="flex h-12 place-items-center justify-between px-8 text-xs md:text-base">
        <small>
          &copy; {currentYear} Noted Musical Accessories. All Rights Reserved.
        </small>
        <div className="flex gap-4">
          <Link href={`https://www.facebook.com/Noted69`} target="_blank">
            Facebook
          </Link>
          <Link href={`https://shopee.ph/drywallloverkenzach`} target="_blank">
            Shopee
          </Link>
        </div>
      </div>
    </footer>
  );
}
