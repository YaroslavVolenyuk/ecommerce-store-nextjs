import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../database/bikes';
import styles from './page.module.scss';

export default async function Home() {
  const bikes = await getBikes();
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.mainDiv}>
          <h1>Bikes perfectly attuned to your needs</h1>
        </div>
      </section>

      <section className={styles.productPage}>
        {bikes.map((bike) => {
          return (
            <div
              key={`bike-div-${bike.id}`}
              className={styles.productPageCards}
            >
              <Image
                className={styles.productImage}
                src={`/images/${bike.name}.jpg`}
                width={400}
                height={240}
                alt=""
              />

              <div className={styles.descriptionBackground}>
                <p>
                  <Link href={`/products/${bike.id}`}>{bike.name}</Link>
                </p>
                <p>
                  Material:{' '}
                  <span className={styles.highlightedText}>
                    {bike.material}
                  </span>
                </p>
                <p>
                  Weight:{' '}
                  <span className={styles.highlightedText}>
                    {bike.weight} kg{' '}
                  </span>
                </p>{' '}
                <p>
                  {' '}
                  Customer rating:{' '}
                  <span className={styles.highlightedText}>{bike.rating}</span>
                </p>
                <p>
                  Price:{' '}
                  <span className={styles.highlightedText}>${bike.price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* <section className={styles.heroNext}>
        <div className={styles.mainTextSection}>
          <h2>
            Precision Engineering: Delve into the meticulous craftsmanship and
            attention to detail that goes into every aspect of the Switchblade,
            from the frame construction to the components selection, ensuring a
            superior riding experience.
          </h2>
        </div>
      </section> */}
    </main>
  );
}
