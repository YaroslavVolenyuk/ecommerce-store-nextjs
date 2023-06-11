import './globals.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import payment from '../public/images/icons/payment.png';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export const metadata = {
  title: { default: ' Switchblade' },
  description: 'Try to catch me',
};

export default function RootLayout({ children }) {
  const savedCookiesFromInput = getCookie('cart');
  const cartQuantity = !savedCookiesFromInput
    ? []
    : parseJson(savedCookiesFromInput);
  console.log('cart page:', cartQuantity);

  const totalQuantiy = cartQuantity.reduce(
    (accum, bikesAtCart) => accum + bikesAtCart.quantity,
    0,
  );
  console.log('total in the cart: ', totalQuantiy);

  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div>
            <Link href="/">SWITCHBLADE</Link>

            {/* <Image src={logo} width={200} height={20} alt="" /> */}
          </div>
          <div className="bikesNav">
            <Link href="/products">ALL BIKES</Link>

            <Link className="ishidden" href="/products/1">
              AERO PRO
            </Link>
            <Link className="ishidden" href="/products/2">
              TOURING ELITE
            </Link>
            <Link className="ishidden" href="/products/3">
              GRAVEL PRO
            </Link>

            <Link className="ishidden" href="/products/4">
              URBAN COMMUTER
            </Link>
          </div>

          <div className="aboutNav">
            <Link href="/about">ABOUT</Link>

            <Link href="/cart" data-test-id="cart-count">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{
                  color: '#ffffff',
                  width: '30px',
                  alignItems: 'flex-end',
                }}
              />

              <i className="cartQuantity">{totalQuantiy}</i>
            </Link>
          </div>
        </nav>
        {children}
        <footer>
          <section className="footerBlock">
            <div>
              <p>Switchblade Headquarters:</p>
              <p> Super-Duper-Straße 10</p>
              <p>Vienna, Austria, 1010</p>
              <p>Phone: +43 (677) 123-4567</p>

              <p>Customer Support: +43 (677) 987-6543</p>
              <p>sales@switchbladebikes.com</p>
            </div>
            <br />
            <div>
              <h2>
                Each Switchblade model is crafted with meticulous attention to
                detail, pushing the boundaries of performance and providing
                riders with a unique cycling experience tailored to their
                specific needs and preferences. Choose the model that matches
                your riding style and embark on your next adventure with
                confidence.
              </h2>
            </div>
            <br />
            <div>
              {/* <input className="inputFooter" /> */}
              PAYMENT METHODS:
              <br />
              <Image src={payment} alt="payment" width={250} height={50} />
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
