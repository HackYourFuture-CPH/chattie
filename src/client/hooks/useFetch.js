import { useEffect, useState } from 'react';
import { getUserFirebaseToken } from '../firebase/auth';
/**
 * Fetch API
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 * Wrapper of fetch to give some extra capabilities like:
 * - Loading
 * - Error handling
 *
 * And main purpose to deal with Auth headers so it is abstracted.
 * As we use the firebase token for authN/Z
 */
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const token = await getUserFirebaseToken();
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'cache-control': 'no-cache',
        };
        const res = await fetch(url, { headers, ...options });
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
    // intentionally empty (react-hooks/exhaustive-deps)
    // eslint-disable-next-line
  }, []);
  return { response, error, loading };
};
export default useFetch;
