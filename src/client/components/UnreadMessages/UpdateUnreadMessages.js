import fetchWithAuth from '../../utils/fetchWithAuth';

export default function UpdateUnreadMessages(props) {
  const { userId, channelId } = props;
  const update = {
    userId,
    channelId,
  };

  fetchWithAuth(`/api/unread/:`, {
    method: 'PATCH',
    body: JSON.stringify(update),
  });

  return null;
}
