import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Image from 'next/image';
import Link from 'next/link';
import styles from './checkout.module.scss';

export default function CheckoutPage() {
  return (
    <main>
      <section className={styles.ckeckoutPage}>
        <div className={styles.inputFields}>
          <input data-test-id="checkout-first-name" className={styles.input} />
          first name *{/* <br /> */}
          <input className={styles.input} data-test-id="checkout-last-name" />
          last-name *{/* <br /> */}
          <input className={styles.input} data-test-id="checkout-email" />
          email *{/* <br /> */}
          <input className={styles.input} data-test-id="checkout-address" />
          address
          <input className={styles.input} data-test-id="checkout-address" />
          address
          <input className={styles.input} data-test-id="checkout-postal-code" />
          code
          <input className={styles.input} data-test-id="checkout-credit-card" />
          credit-card
          <input
            className={styles.input}
            data-test-id="checkout-expiration-date"
          />{' '}
          expiration-date
          <input
            className={styles.input}
            data-test-id="checkout-security-code"
          />{' '}
          security-code
          <div className={styles.link}>
            <Link data-test-id="checkout-confirm-order" href="/thankyou">
              Confirm Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
