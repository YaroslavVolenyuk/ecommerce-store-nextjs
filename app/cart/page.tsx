import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/bikes';
import { Bike } from '../../migrations/1686064992-insertBikes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './cart.module.scss';
import Remove from './Remove';

// type Props = {
//   params: { price: number };
// };

export type ProductWithQuantity = Bike & {
  quantity: number;
};

export default async function CartPage() {
  const bikes = await getBikes();

  const savedCookiesFromInput = await getCookie('cart');
  const cartQuantity = !savedCookiesFromInput
    ? []
    : parseJson(savedCookiesFromInput);

  const bikesAddedToCart = bikes.map((bike) => {
    const matchingBikeFromCookie = cartQuantity.find(
      (oneBike: ProductWithQuantity) => bike.id === oneBike.id,
    );

    return { ...bike, quantity: matchingBikeFromCookie?.quantity };
  });

  const totalPrice = bikesAddedToCart.reduce(
    (accum, bikesAtCart) => accum + bikesAtCart.price,
    0,
  );

  return (
    <main>
      <section className={styles.cartMainSection}>
        <div className={styles.cart}>
          {bikesAddedToCart
            .filter((bikeAtCart) => bikeAtCart.quantity > 0)
            .map((bikeAtCart) => (
              <section
                className={styles.cartItems}
                key={`bike-div-${bikeAtCart.id}`}
              >
                <div>
                  <Image
                    className={styles.productImageParams}
                    src={`/images/${bikeAtCart.name}.jpg`}
                    width={100}
                    height={60}
                    alt=""
                  />
                  <div>
                    {' '}
                    <div>
                      <h2>{bikeAtCart.name}</h2>
                    </div>
                    <div>Quantity: {bikeAtCart.quantity}</div>
                    {/* <div>Price: ${bikeAtCart.price}</div> */}
                    <Remove id={bikeAtCart.id} />
                  </div>
                </div>
                <div>
                  <div>${bikeAtCart.price * bikeAtCart.quantity}</div>
                </div>
              </section>
            ))}
        </div>
        <div className={styles.totalSection}>
          <div className={styles.checkoutSection}>
            <div>Total Price: ${totalPrice}</div>
            <hr />
            <div>
              <Link href="/checkout">Checkout</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
