'use client';

import { deleteProduct } from './actions';

type Props = { id: number };

export default function Remove(props: Props) {
  console.log(props);
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
  s;
}
