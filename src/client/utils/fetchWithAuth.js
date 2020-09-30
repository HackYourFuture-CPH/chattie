import { getUserFirebaseToken } from '../firebase/auth';

export default async function fetchWithAuth(url, options) {
  const token = await getUserFirebaseToken();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'cache-control': 'no-cache',
  };

  const response = await fetch(url, {
    headers,
    ...(options || {}),
  });

  const data = await response.json();
  return data;
}
