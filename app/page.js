import Image from 'next/image';
import Link from 'next/link';
import { bikes } from '../database/bikes';

export default function Home() {
  console.log('BIKES FROM DATABASE', bikes[0].name);
  return (
    <main>
      <section className="hero">
        <div className="mainDiv">
          <h1>Bikes perfectly attuned to your needs</h1>
        </div>
      </section>

      <section className="mainShopSection">
        {bikes.map((bike) => (
          <div className="mainShopSection" key={`bike-div-${bike.id}`}>
            <Image
              className="productImageParams"
              src={`/images/${bike.name}.jpg`}
              width={500}
              height={300}
              alt=""
            />
          </div>
        ))}
      </section>

      <section>
        <div className="mainTextSection">
          <h2>
            {/* Precision Engineering: Delve into the meticulous craftsmanship and
            attention to detail that goes into every aspect of the Switchblade,
            from the frame construction to the components selection, ensuring a
            superior riding experience. */}
          </h2>
        </div>
      </section>
    </main>
  );
}
