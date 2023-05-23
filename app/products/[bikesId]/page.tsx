import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import { getBikeById } from '../../../database/bikes';

type Props = { params: { bikesId: string } };

export default function BikesPage(props: Props) {
  const singleBike = getBikeById(Number(props.params.bikesId));
  console.log(props.params.bikesId);

  if (!singleBike) {
    notFound();
  }
  return (
    <main className="product">
      <div className="productImage">
        <Image
          className="productImageParams"
          src={`/images/${singleBike.name}.jpg`}
          width={600}
          height={375}
          alt=""
          // fill
        />
      </div>
      <div className="productDescription">
        <div>Switchblade Aero Pro:</div>
        <div />
        <div />

        <div>
          Material:
          <br /> Aluminium
        </div>
        <div>
          Weight: <br />
          9.00 kg
        </div>
        <div>
          Average customer rating: <br />
          4.5 / 5
        </div>
        <div className="item">{singleBike.description}</div>

        <div>$3600</div>
        <button>Add to cart</button>
      </div>
    </main>
  );
}
