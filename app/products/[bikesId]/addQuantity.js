'use client';
import { useState } from 'react';
import { addAndSubtractQuantity } from './actions';

export default function AddQuantity(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <button
        formAction={async () => {
          await addAndSubtractQuantity(props.bikesId, Number(quantity));
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
