import Image from 'next/image';
import Link from 'next/link';
import { bikes } from '../../database/bikes';
import { getCookie } from '../../util/cookies';

export default function ProductPage() {
  return (
    <main className="productPage">
      {bikes.map((bike) => {
        return (
          <div key={`bike-div-${bike.id}`}>
            <br />
            <Image
              src={`/images/${bike.name}.jpg`}
              width={400}
              height={240}
              alt=""
            />
            <br />

            <div>
              <Link href={`/products/${bike.id}`}>{bike.name}</Link>

              <p>
                Material: {bike.material} Weight: {bike.weight} Customer rating:
                {bike.rating}
                <br />
                Price: ${bike.price}
                <br />
                <button>Add to cart</button>
                <br />
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
