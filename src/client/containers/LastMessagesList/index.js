import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import LastMessagesList from '../../components/LastMessageList/LastMessagesList';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorComponent/Error';

const LastChannelsMessageList = ({ user }) => {
  const id = user ? user.id : '';

  const history = useHistory();
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

LastChannelsMessageList.propTypes = {
  user: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
};
