import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import fetchWithAuth from '../../utils/fetchWithAuth';
import { UserContext } from '../../context/userContext';
import { getExistingChannelForUsers } from '../../api/getExistingСhannelForUsers';

export const OnStartChat = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const onCreateConversation = async (userId, currentUser) => {
    const {
      existChannelId,
      currentUserFromServer,
    } = await getExistingChannelForUsers(currentUser, userId);

    if (existChannelId?.length) {
      history.push(`/channel/${existChannelId}`);
    } else {
      const { channelId } = await fetchWithAuth('/api/channels', {
        method: 'POST',
        body: JSON.stringify({ title: null, channelId }),
      });
      await fetchWithAuth('/api/channel-members', {
        method: 'POST',
        body: JSON.stringify({ channelId, userId }),
      });

      await fetchWithAuth('/api/channel-members', {
        method: 'POST',
        body: JSON.stringify({ channelId, userId: currentUserFromServer.id }),
      });

      history.push(`/channel/${channelId}`);
    }
  };
  return { user, onCreateConversation };
};
