import JoshPicture from '@/../public/img/josh.jpg';
import MakiPicture from '@/../public/img/maki.jpg';
import { StaticImageData } from 'next/image';

export type Review = {
    name: string;
    imageRef: StaticImageData;
    message: string;
  };
  
export const reviews: Review[] = [
    {
    name: `Maki Mendoza Vaño`,
    imageRef: MakiPicture,
    message: `“Having several guitars need upkeep. Always affordable. Always dependable. 👍”`
    },
    {
    name: `Josh Mabini`,
    imageRef: JoshPicture,
    message: `“bass strings ayos!! recommended sulit pa! thank you!!”`
    }
];