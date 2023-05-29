// import fs from 'node:fs';

// fs.readFile('../app/page.js', () => {});

type Parts = {
  id: number;
  name: string;
  type: string;
  price: number;
  material: string;
  weight: string;
  rating: string;
  description: string;
};

export const parts: Part[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];

export function getPartById(id: number) {
  return parts.find((part) => part.id === id);
}
