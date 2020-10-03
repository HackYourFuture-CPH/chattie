import fetchWithAuth from '../utils/fetchWithAuth';

export async function getExistingChannelForUsers(currentUser, userId) {
  const { uid } = currentUser;
  const currentUserFromServer = await fetchWithAuth(
    `/api/users/current?uid=${uid}`,
  );
  const existChannelId = await fetchWithAuth(
    `api/channel-members/?memberIds=${currentUserFromServer.id},${userId}`,
  );
  return { existChannelId, currentUserFromServer };
}
