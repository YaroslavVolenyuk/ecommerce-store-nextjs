import { cookies } from 'next/dist/client/components/headers';

export function getCookie(name) {
  return cookies().get(name)?.value;
}
