import { StaticImageData } from 'next/image';
import GuitarLG1MBlack from '@/../public/img/smiger-lg1m-black-guitar.jpg'
import GuitarLG1MBlack2 from '@/../public/img/smiger-lg1m-black-guitar-2.jpg'

import Drumstick7A from '@/../public/img/smiger-7a-drumstick.jpg'
import Drumstick7A2 from '@/../public/img/smiger-7a-drumstick-2.jpg'


import Strings009GSE from '@/../public/img/smiger-gse-strings.jpg'
import Strings009GSE2 from '@/../public/img/smiger-gse-strings-2.jpg'



export type Product = {
  name: string;
  imageRef: StaticImageData;
  imageRef2: StaticImageData;
  href: string;
  price: string;
};

export const products: Product[] = [
  {
    name: `Smiger L-G1M Electric Guitar (Black)`,
    imageRef: GuitarLG1MBlack,
    imageRef2: GuitarLG1MBlack2,
    href: 'https://www.facebook.com/Noted69',
    price: '5,500'
  },
  {
    name: `Smiger 7A Oakwood Drumstick`,
    imageRef: Drumstick7A,
    imageRef2: Drumstick7A2,
    href: 'https://shopee.ph/Drumsticks-Smiger-Maple-wood-with-antiskid-(5A-7A)-i.813540192.27217658751',
    price: '170'
  },
  {
    name: `Smiger GSE-009 / GSE-010 Electric Guitar Strings`,
    imageRef: Strings009GSE,
    imageRef2: Strings009GSE2,
    href: 'https://shopee.ph/Guitar-Strings-for-electric-guitar-Smiger-Nickel-Wound-%E2%80%93-Enhance-Your-Guitar%E2%80%99s-Tone--i.813540192.25173828063?sp_atk=e95256fa-0a55-40cf-a7c1-5b74d6f6989c&xptdk=e95256fa-0a55-40cf-a7c1-5b74d6f6989c',
    price: '250'
  },
];
