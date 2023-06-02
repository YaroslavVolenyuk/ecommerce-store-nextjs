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

  console.log('bikesAddedToCart', bikesAddedToCart);

  const totalPrice = bikesAddedToCart.reduce(
    (accum, bikesAtCart) => accum + bikesAtCart.price,
    0,
  );

  // const totalPriceProBike = bikesAddedToCart.reduce(
  //   (accum, bikesAtCart) => accum + bikesAtCart.price,
  //   0,
  // );

  const priceForBikes = function (id) {
    const price = bikesAddedToCart.price;
    const quantity = bikesAddedToCart.quantity;
    const priceProBike = price * quantity;
    return priceProBike;
  };

  console.log(totalPrice, 'total price');
  console.log(priceForBikes(1), 'price pro bike');
  // usestate doesn't work

  return (
    <main>
      <div className="cart">
        {bikesAddedToCart
          .filter((bikeAtCart) => bikeAtCart.quantity > 0)
          .map((bikeAtCart) => (
            <div className="cartItems" key={`bike-div-${bikeAtCart.id}`}>
              <Image
                className="productImageParams"
                src={`/images/${bikeAtCart.name}.jpg`}
                width={100}
                height={60}
                alt=""
              />

              <div>
                <h2>{bikeAtCart.name}</h2>
              </div>
              <div>Quantity: {bikeAtCart.quantity}</div>
              <div>Price: ${bikeAtCart.price}</div>

              <div>
                <Remove id={bikeAtCart.id} />
              </div>
            </div>
          ))}
      </div>
      <div className="checkoutSection">
        <div>Total Price: ${totalPrice}</div>
        <div>
          <Link href="/checkout">Checkout</Link>
        </div>
      </div>
    </main>
  );
}
