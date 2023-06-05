import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import { getBikeById } from '../../../database/bikes';
import { parts } from '../../../database/parts';
import AddQuantity from './AddQuantity';

type Props = { params: { bikesId: string } };

// type Cookie = {
//   id: number;
//   comment?: string;
// };

export const dynamic = 'force-dynamic';

export default async function BikesPage(props: Props) {
  const singleBike = await getBikeById(Number(props.params.bikesId));
  console.log('singleBike is :', singleBike);

  if (!singleBike) {
    notFound();
  }

  return (
    <main>
      <div className="product">
        <div className="productImage">
          <Image
            data-test-id="product-image"
            className="productImageParams"
            src={`/images/${singleBike.name}.jpg`}
            width={600}
            height={375}
            alt=""
          />
        </div>
        <div className="productDescription">
          <div>
            <h1 style={{ color: '#ffac12' }}>{singleBike.name}</h1>
          </div>
          <div />
          <div />

          <div>
            Material:
            <br /> <p style={{ color: '#a4a4a4' }}>{singleBike.material}</p>
          </div>
          <div>
            Weight: <br />
            <p style={{ color: '#a4a4a4' }}>{singleBike.weight} kg</p>
          </div>
          <div>
            Average customer rating: <br />
            <p style={{ color: '#a4a4a4' }}>{singleBike.rating}</p>
          </div>
          <div className="item">{singleBike.description}</div>

          <div
            data-test-id="product-price"
            style={{ color: '#ffac12', fontWeight: 'bold' }}
          >
            ${singleBike.price}
          </div>

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
