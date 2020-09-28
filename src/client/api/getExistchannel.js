export async function getExistchannel(currentUser, userId) {
  const { uid } = currentUser;
  const resCurrentUser = await fetch(`/api/users/current?uid=${uid}`);
  const currentUserFromServer = await resCurrentUser.json();
  const resChannelMembers = await fetch(
    `api/channel-members/?memberIds=${currentUserFromServer.id},${userId}`,
  );
  const existChannelId = await resChannelMembers.json();
  return { existChannelId, currentUserFromServer };
}
