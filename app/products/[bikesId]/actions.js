'use server';

import { cookies } from 'next/dist/client/components/headers';

export async function addAndSubtractQuantity(bikesId, quantity) {
  await cookies().set(
    'cart',
    JSON.stringify([{ id: bikesId, quantity: quantity }]),
  );
  // const allCookies = await cookies().getAll();
  // console.log(allCookies);
  console.log('hello ne ');
}
