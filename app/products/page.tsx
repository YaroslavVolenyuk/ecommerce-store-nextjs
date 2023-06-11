import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/bikes';
import styles from './allProducts.module.scss';

// import { bikes } from '../../database/bikes';
// import { getCookie } from '../../util/cookies';

export const metadata = {
  title: { default: ' Switchblade' },
  description: 'Try to catch me',
};

export default async function ProductPage() {
  const bikes = await getBikes();

  return (
    <main className={styles.productPage}>
      {bikes.map((bike) => {
        return (
          <div key={`bike-div-${bike.id}`} className={styles.productPageCards}>
            <Image
              loading="lazy"
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
                <span className={styles.highlightedText}>{bike.material}</span>
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
    </main>
  );
}
