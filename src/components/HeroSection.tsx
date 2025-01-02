'use client';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import guitar_closeup from '@/../public/img/guitar-closeup.jpg';
import smiger_drumsticks from '@/../public/img/smiger-7a-drumstick.jpg';
import smiger_strings from '@/../public/img/smiger-gse-strings.jpg';

export default function HeroSection() {
  return (
    <>
      <motion.section
        id="hero"
        className="sticky top-0 h-screen bg-[var(--primary)] text-white"
        initial={{ y: 0 }}
        animate={{ y: 100 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className="grid h-screen md:grid-cols-2">
          <div className="mx-auto flex flex-col gap-8 p-16 md:w-[80%] md:justify-evenly md:gap-0 md:p-0 2xl:p-16">
            <header>
              <h1 className="text-5xl font-bold uppercase leading-tight tracking-wide md:text-7xl 2xl:text-8xl">
                Take your music to the next level!
              </h1>
            </header>
            <div className="flex place-items-center justify-end gap-2 px-8">
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 2, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <ChevronDoubleRightIcon className="h-auto w-4 md:w-8" />
              </motion.span>
              <Link
                href="/#products"
                className="border-b-2 border-transparent text-lg transition-colors duration-300 ease-in-out hover:border-white md:text-xl"
              >
                View Products
              </Link>
            </div>
            <div className="flex justify-between text-xs md:flex-col md:text-base lg:flex-row">
              <strong className="font-normal">Noted Musical Accessories</strong>
              <address className="not-italic">Cebu City, Philippines</address>
            </div>
          </div>
          <div className="overflow-y-auto">
            <Image
              src={guitar_closeup}
              alt="Guitar Closeup"
              className="h-screen object-cover"
            />
            <Image
              src={smiger_drumsticks}
              alt="Smiger 7A Oakwood Drumstick"
              className="h-screen object-cover"
            />
            <Image
              src={smiger_strings}
              alt="Smiger GSE-009 / GSE-010 Electric Guitar Strings"
              className="h-screen object-cover"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
