import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function addToCart() {
  const allCookies = document.cookie;

  console.log(allCookies);

  return <button onClick={console.log(addToCart)}>CONSOLE LOG</button>;
}
