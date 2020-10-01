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
      const { id } = await fetchWithAuth('/api/channels', {
        method: 'POST',
        body: JSON.stringify({ title: null, id }),
      });
      const newlyCreatedChannelId = id;
      await fetchWithAuth('/api/channel-members', {
        method: 'POST',
        body: JSON.stringify({ channelId: newlyCreatedChannelId, userId }),
      });
      await fetchWithAuth('/api/channel-members', {
        method: 'POST',
        body: JSON.stringify({
          channelId: newlyCreatedChannelId,
          userId: currentUserFromServer.id,
        }),
      });

      history.push(`/channel/${newlyCreatedChannelId}`);
    }
  };
  return { user, onCreateConversation };
};
