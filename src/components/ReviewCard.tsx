'use client';

import { reviews, Review } from '@/lib/reviews';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <motion.div
      className="rounded-lg bg-white text-[var(--primaary)] drop-shadow-md"
      whileInView={{ scale: [0.6, 1], opacity: [0, 1] }}
    >
      <div className="flex flex-col place-items-center gap-2 px-4 py-2 md:flex-row">
        <Image
          className="h-16 w-16 rounded-full md:h-32 md:w-32"
          src={review.imageRef}
          alt={`${review.name} Picture`}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center gap-2 p-4">
          <p className="w-60 text-base md:w-96 md:text-xl">{review.message}</p>
          <span className="text-xs">{review.name}</span>
        </div>
      </div>
    </motion.div>
  );
}
