import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import LastMessagesList from '../../components/LastMessageList/LastMessagesList';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorComponent/Error';

const LastChannelsMessageList = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const id = user ? user.id : '';
  const url = `/api/channels-message/last-messages?userId=${id}`;
  const { response: lastChannels, loading, error } = useFetch(url);
  const onGoToChatPage = (channelId) => {
    history.push(`/channels/${channelId}`);
  };
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      {lastChannels && (
        <LastMessagesList
          lastChannels={lastChannels}
          onGoToChatPage={onGoToChatPage}
        />
      )}
    </>
  );
};

export default LastChannelsMessageList;
