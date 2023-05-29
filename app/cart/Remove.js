'use client';

import { deleteProduct } from './actions';

export default function Remove(props) {
  return (
    <form>
      <button
        formAction={async () => {
          await deleteProduct(props.id);
        }}
      >
        Delete
      </button>
    </form>
  );
}
