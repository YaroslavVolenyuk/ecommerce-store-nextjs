'use server';

// deleting function

import { cookies } from 'next/dist/client/components/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteProduct(bikesId: number) {
  const cartCookies = getCookie('cart');
  const cart = !cartCookies ? [] : parseJson(cartCookies);

  const filteredCart = cart.filter(
    (cartElement: { id: number }) => cartElement.id !== bikesId,
  );

  await cookies().set('cart', JSON.stringify(filteredCart));
}
