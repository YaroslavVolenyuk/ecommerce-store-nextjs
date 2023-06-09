// import fs from 'node:fs';

import { cache } from 'react';
import { Bike } from '../migrations/1686064992-insertBikes';
import { sql } from './connect';

// fs.readFile('../app/page.js', () => {});

// type Bike = {
//   id: number;
//   name: string;
//   type: string;
//   price: number;
//   material: string;
//   weight: number;
//   rating: string;
//   description: string;
// };

// export const bikes: Bike[] = [
//   {
//     id: 1,
//     name: 'AeroPro',
//     type: 'speedbike',
//     price: 1500,
//     material: 'Carbon',
//     weight: 7.55,
//     rating: '4.9/5',
//     description:
//       'Unleash your full potential with the Switchblade Aero Pro. Designed for the most demanding cyclists, this model features an ultra-lightweight carbon fiber frame, wind-tunnel tested aerodynamics, and high-performance components, delivering unmatched speed and efficiency on the road.',
//   },
//   {
//     id: 2,
//     name: 'TouringElite',
//     type: 'roadbike',
//     price: 750,
//     material: 'Aluminium',
//     weight: 11.4,
//     rating: '4.6/5',
//     description:
//       'Embark on unforgettable journeys with the Switchblade Touring Elite. Engineered for long-distance comfort and versatility, this model boasts a relaxed geometry, advanced shock absorption technology, and ample storage options, making it the perfect companion for epic tours and multi-day adventures.',
//   },
//   {
//     id: 3,
//     name: 'GravelPro',
//     type: 'gravelbike',
//     price: 600,
//     material: 'Aluminium',
//     weight: 10.2,
//     rating: '4.3/5',
//     description:
//       'Embrace the growing gravel riding trend with the Switchblade Gravel Pro. This model features a gravel-specific frame geometry, wider tires for enhanced traction, and disc brakes for confident stopping power, enabling you to explore new off-the-beaten-path routes and embrace the spirit of adventure.',
//   },
//   {
//     id: 4,
//     name: 'UrbanCommuter',
//     type: 'citybike',
//     price: 850,
//     material: 'Aluminium',
//     weight: 12.3,
//     rating: '4.5/5',
//     description:
//       'Navigate the city streets in style with the Switchblade Urban Commuter. Designed for urban environments, this model combines a sleek and agile frame with practical features like fenders, a rear rack, and integrated lights, providing a seamless and efficient commuting experience.',
//   },
// ];

// export function getBikeById(id: number) {
//   return bikes.find((bike) => bike.id === id);
// }

export const getBikes = cache(async () => {
  const bikes = await sql<Bike[]>`
    SELECT * FROM bikes
 `;
  return bikes;
});

export const getBikeById = cache(async (id: number) => {
  const [bike] = await sql<Bike[]>`
    SELECT
      *
    FROM
      bikes
    WHERE
      id = ${id}
  `;
  return bike;
});
