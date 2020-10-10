import React, { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import LastMessagesList from '../../components/LastMessageList/LastMessagesList';
import { UserContext } from '../../context/userContext';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorComponent/Error';

const LastChannelsMessageList = () => {
  const user = useContext(UserContext);
  const id = user ? user.id : '';
  const url = `/api/channels-message/last-messages?userId=${id}`;
  const { response: lastChannels, loading, error } = useFetch(url);
  console.log(lastChannels);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>{lastChannels && <LastMessagesList lastChannels={lastChannels} />}</>
  );
};

export default LastChannelsMessageList;
