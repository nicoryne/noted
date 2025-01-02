'use client';

import { reviews } from '@/lib/reviews';
import ReviewCard from '@/components/ReviewCard';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-us-header"
      className="h-screen bg-[var(--secondary)] text-[var(--primary)]"
      initial={{ y: 0 }}
      animate={{ y: 100 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="mx-auto flex min-h-full w-[80%] flex-col place-items-center justify-center gap-16 p-8">
        <ul className="flex flex-col space-y-8 md:space-y-16">
          {reviews.map((review, index) => (
            <li key={index}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
        <p className="border-t-[1px] border-[var(--primary)] py-4 text-xs sm:text-base md:text-2xl">
          Noted Musical Accessories is your trusted music shop for all your
          needs—from high-quality guitar straps and strings to premium guitars.
          We've got everything to fuel your passion for music.
        </p>
        <h2 id="about-us-header">About Us</h2>
      </div>
    </motion.section>
  );
}
