'use client';
import { useState } from 'react';
import { addAndSubtractQuantity } from './actions';

type Props = { bikesId: number };

export default function AddQuantity(props: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.currentTarget.value));
        }}
      />
      <button
        formAction={async () => {
          await addAndSubtractQuantity(props.bikesId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
