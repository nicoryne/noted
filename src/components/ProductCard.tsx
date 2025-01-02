'use client';

import { Product } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <div className="flex flex-col gap-1">
        <Link href={product.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={product.imageRef}
            alt={`${product.name} Picture`}
            className="absolute h-[300px] w-[100px] object-cover transition-opacity duration-300 group-hover:opacity-0 md:h-[700px] md:w-[500px]"
          />
          {/* Secondary Image */}
          <Image
            src={product.imageRef2}
            alt={`${product.name} Hover Picture`}
            className="h-[300px] w-[100px] object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:h-[700px] md:w-[500px]"
          />
        </Link>
        <span className="text-xs md:text-base">{product.name}</span>
        <span className="text-xs md:text-base">₱{product.price}</span>
      </div>
    </div>
  );
}
