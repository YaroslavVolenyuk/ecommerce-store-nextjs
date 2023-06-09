import { Sql } from 'postgres';

// import { bikes } from '../database/bikes';

export type Bike = {
  id: number;
  name: string;
  type: string;
  price: number;
  material: string;
  weight: string;
  rating: string;
  description: string;
};

const bikes: Bike[] = [
  {
    id: 1,
    name: 'AeroPro',
    type: 'speedbike',
    price: 1500,
    material: 'Carbon',
    weight: '7.55',
    rating: '4.9/5',
    description:
      'Unleash your full potential with the Switchblade Aero Pro. Designed for the most demanding cyclists, this model features an ultra-lightweight carbon fiber frame, wind-tunnel tested aerodynamics, and high-performance components, delivering unmatched speed and efficiency on the road.',
  },
  {
    id: 2,
    name: 'TouringElite',
    type: 'roadbike',
    price: 750,
    material: 'Aluminium',
    weight: '11.4',
    rating: '4.6/5',
    description:
      'Embark on unforgettable journeys with the Switchblade Touring Elite. Engineered for long-distance comfort and versatility, this model boasts a relaxed geometry, advanced shock absorption technology, and ample storage options, making it the perfect companion for epic tours and multi-day adventures.',
  },
  {
    id: 3,
    name: 'GravelPro',
    type: 'gravelbike',
    price: 600,
    material: 'Aluminium',
    weight: '10.2',
    rating: '4.3/5',
    description:
      'Embrace the growing gravel riding trend with the Switchblade Gravel Pro. This model features a gravel-specific frame geometry, wider tires for enhanced traction, and disc brakes for confident stopping power, enabling you to explore new off-the-beaten-path routes and embrace the spirit of adventure.',
  },
  {
    id: 4,
    name: 'UrbanCommuter',
    type: 'citybike',
    price: 850,
    material: 'Aluminium',
    weight: '12.3',
    rating: '4.5/5',
    description:
      'Navigate the city streets in style with the Switchblade Urban Commuter. Designed for urban environments, this model combines a sleek and agile frame with practical features like fenders, a rear rack, and integrated lights, providing a seamless and efficient commuting experience.',
  },
];

export async function up(sql: Sql) {
  for (const bike of bikes) {
    await sql`

    INSERT INTO bikes
    ( name,
      type,
      price,
      material,
      weight,
      rating,
      description
    )
    VALUES
    (
      ${bike.name},
      ${bike.type},
      ${bike.price},
      ${bike.material},
      ${bike.weight},
      ${bike.rating},
      ${bike.description}
    )
    `;
  }
}

export async function down(sql: Sql) {
  for (const bike of bikes) {
    await sql`
    DELETE FROM bikes WHERE id = ${bike.id}
    `;
  }
}
