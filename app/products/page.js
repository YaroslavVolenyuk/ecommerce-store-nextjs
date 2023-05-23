import { cookies } from 'next/dist/client/components/headers';
import Image from 'next/image';
import Link from 'next/link';
import { bikes } from '../../database/bikes';

export default function ProductPage() {
  // const allCookies = cookies().getAll();
  // console.log(allCookies);

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
              a
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
              </p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
