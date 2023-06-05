import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main>
      <section>
        <Image
          data-test-id="product-image"
          className="productImageParams"
          src="/"
          width={600}
          height={375}
          alt=""
          // fill
        />
      </section>

      <section className="ckeckoutPage">
        <input data-test-id="checkout-first-name" className="input" />
        first name *{/* <br /> */}
        <input data-test-id="checkout-last-name" />
        last-name *{/* <br /> */}
        <input data-test-id="checkout-email" />
        email *{/* <br /> */}
        <input data-test-id="checkout-address" />
        address
        <br />
        <input data-test-id="checkout-address" />
        address
        <br />
        <input data-test-id="checkout-postal-code" />
        code
        <br />
        <input data-test-id="checkout-credit-card" />
        credit-card
        <br />
        <input data-test-id="checkout-expiration-date" /> expiration-date
        <br />
        <input data-test-id="checkout-security-code" /> security-code
        <br />
        <br />
        <Link data-test-id="checkout-confirm-order" href="/thankyou">
          Confirm Order
        </Link>
      </section>
    </main>
  );
}
