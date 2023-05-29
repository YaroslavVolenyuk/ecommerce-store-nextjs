import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import { bikes, getBikeById } from '../../../database/bikes';
import { parts } from '../../../database/parts';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import AddQuantity from './AddQuantity';

type Props = { params: { bikesId: string } };

// type Cookie = {
//   id: number;
//   comment?: string;
// };

export default function BikesPage(props: Props) {
  const singleBike = getBikeById(Number(props.params.bikesId));
  // console.log('TEST 123', props.params.bikesId);

  if (!singleBike) {
    notFound();
  }

  return (
    <main>
      <div className="product">
        {' '}
        <div className="productImage">
          <Image
            data-test-id="product-image"
            className="productImageParams"
            src={`/images/${singleBike.name}.jpg`}
            width={600}
            height={375}
            alt=""
            // fill
          />
        </div>
        <div className="productDescription">
          <div>
            <h1>{singleBike.name}</h1>
          </div>
          <div />
          <div />

          <div>
            Material:
            <br /> {singleBike.material}
          </div>
          <div>
            Weight: <br />
            {singleBike.weight} kg
          </div>
          <div>
            Average customer rating: <br />
            {singleBike.rating}
          </div>
          <div className="item">{singleBike.description}</div>

          <div data-test-id="product-price">${singleBike.price}</div>

          <div>
            <AddQuantity
              data-test-id="product-quantity"
              bikesId={singleBike.id}
            />
          </div>
        </div>
      </div>
      <div className="partsSection">
        {parts.map((part) => {
          return (
            <div key={`part-div-${part.id}`}>
              <Image
                // layout="fill"
                // objectFit="contain"
                src={`/images/bike-parts-${part.id}.jpg`}
                alt=""
                width={100}
                height={77}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
