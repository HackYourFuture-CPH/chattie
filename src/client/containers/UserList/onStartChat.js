import { getExistchannel } from '../../api/getExistchannel';

const requestConfig = (body) => ({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(body),
});
export const onStartChat = (history) => {
  return async (userId, currentUser) => {
    const { existChannelId, currentUserFromServer } = await getExistchannel(
      currentUser,
      userId,
    );

    if (existChannelId?.length) {
      history.push(`/channel/${existChannelId}`);
    } else {
      const response = await fetch(
        '/api/channels',
        requestConfig({ title: null, channelId }),
      );
      const { channelId } = await response.json();

      await fetch('/api/channel-members', requestConfig({ channelId, userId }));
      await fetch(
        '/api/channel-members',
        requestConfig({ channelId, userId: currentUserFromServer.id }),
      );

      history.push(`/channel/${channelId}`);
    }
  };
};
