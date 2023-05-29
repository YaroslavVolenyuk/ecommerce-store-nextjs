import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { bikes } from '../../database/bikes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import Remove from './Remove.js';

export default function CartPage() {
  const savedCookiesFromInput = getCookie('cart');
  const cartQuantity = !savedCookiesFromInput
    ? []
    : parseJson(savedCookiesFromInput);

  const bikesAddedToCart = bikes.map((bike) => {
    const matchingBikeFromCookie = cartQuantity.find(
      (oneBike) => bike.id === oneBike.id,
    );

    return { ...bike, quantity: matchingBikeFromCookie?.quantity };
  });

  // usestate doesn't work

  return (
    <main className="cart">
      {bikesAddedToCart
        .filter((bikeAtCart) => bikeAtCart.quantity > 0)
        .map((bikeAtCart) => (
          <div key={`bike-div-${bikeAtCart.id}`}>
            <Image
              className="productImageParams"
              src={`/images/${bikeAtCart.name}.jpg`}
              width={150}
              height={90}
              alt=""
            />
            <div>
              {bikeAtCart.name}
              <br />
              Total quantity: {bikeAtCart.quantity}
              <Remove id={bikeAtCart.id} />
            </div>
          </div>
        ))}
      <div>Total Price: $</div>
      <Link href="/checkout">Checkout</Link>
    </main>
  );
}
