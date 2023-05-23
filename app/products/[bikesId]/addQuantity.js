'use client';
import { useState } from 'react';
import { addAndSubtractQuantity } from './actions';

export default function AddQuantity(props) {
  const [quantity, setQuantity] = useState('');
  // const

  return (
    <form>
      <textarea
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <button
        formAction={async () => {
          await addAndSubtractQuantity(props.bikesId, quantity);
        }}
      >
        AddQuantity
      </button>
    </form>
  );
}
