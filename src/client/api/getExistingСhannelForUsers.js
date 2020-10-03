import fetchWithAuth from '../utils/fetchWithAuth';

export async function getExistingChannelForUsers(currentUser, userId) {
  const { uid } = currentUser;
  const resCurrentUser = await fetch(`/api/users/current?uid=${uid}`);
  const currentUserFromServer = await resCurrentUser.json();
  const existChannelId = await fetchWithAuth(
    `api/channel-members/?memberIds=${currentUserFromServer.id},${userId}`,
  );
  return { existChannelId, currentUserFromServer };
}
