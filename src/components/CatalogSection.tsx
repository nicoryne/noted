'use client';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import FBLogo from '@/../public/svg/fb.svg';
import ShopeeLogo from '@/../public/svg/shopee.svg';

export default function CatalogSection() {
  return (
    <motion.section
      id="products"
      aria-labelledby="products-header"
      className="h-screen bg-white text-[var(--primary)]"
      initial={{ y: 0 }}
      animate={{ y: 100 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="flex min-h-screen place-items-center items-center justify-center p-8">
        <div className="flex h-full flex-col gap-4">
          <ul className="flex gap-16 md:flex-row">
            {products.map((product, index) => (
              <li key={index}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
          <h2 id="products-header">Our Products</h2>
          <span>Items may be purchased through our platforms</span>
          <div className="flex place-items-center gap-4">
            <Link
              href={`https://shopee.ph/drywallloverkenzach`}
              target="_blank"
            >
              <Image
                src={ShopeeLogo}
                alt={`Shopee Logo`}
                className="h-auto w-8"
              />
            </Link>

            <Link href={`https://www.facebook.com/Noted69`} target="_blank">
              <Image
                src={FBLogo}
                alt={`Facebook Logo`}
                className="h-auto w-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
