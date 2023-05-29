'use server';

import { cookies } from 'next/dist/client/components/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

// add to cart
export async function addAndSubtractQuantity(bikesId, quantity) {
  const savedCookiesFromInput = getCookie('cart');
  const cartQuantity = !savedCookiesFromInput
    ? []
    : parseJson(savedCookiesFromInput);

  const cartToUpdate = cartQuantity.find((cartElement) => {
    return cartElement.id === bikesId;
  });

  // console.log('cartToUpdate: ', cartToUpdate);

  if (cartToUpdate) {
    cartToUpdate.quantity += quantity;
  } else {
    cartQuantity.push({ id: bikesId, quantity: quantity });
  }

  await cookies().set('cart', JSON.stringify(cartQuantity));
}

export async function increaseAndDecrease(bikesId, quantity) {
  const savedCookiesFromInput = getCookie('cart');
  const cartQuantity = !savedCookiesFromInput
    ? []
    : parseJson(savedCookiesFromInput);

  const cartToUpdate = cartQuantity.find((cartElement) => {
    return cartElement.id === bikesId;
  });

  // console.log('cartToUpdate: ', cartToUpdate);

  if (cartToUpdate) {
    cartToUpdate.quantity += quantity;
  } else {
    cartQuantity.push({ id: bikesId, quantity: quantity });
  }

  await cookies().set('cart', JSON.stringify(cartQuantity));
}
