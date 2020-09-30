import { getUserFirebaseToken } from '../firebase/auth';

/**
 * Hook to POST/PUT/DELETE/PATCH to the server with auth.
 *
 * @example
 * ```
 * // create a mutator that will POST to /api/channels
 * const createChannel = useMutation('/api/channels');
 *
 * // call it with body
 * createChannel({id: 1, name: 'Channel name'})
 * ```
 *
 * @example
 *
 * ```
 * // create a mutator that will delete an channel
 * const id = 1;
 * const deleteChannel = useMutation(`/api/channels/${id}`, "DELETE");
 *
 * // call it with body
 * deleteChannel();
 * ```
 *
 * @param {string} url A relative path including `/api`
 */

function useMutation(url, method = 'POST') {
  return async function mutator(body) {
    const token = await getUserFirebaseToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'cache-control': 'no-cache',
    };

    return fetch(url, {
      ...headers,
      method: method || 'POST',
      body,
    });
  };
}

export default useMutation;
