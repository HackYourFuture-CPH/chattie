import React, { useState, useEffect } from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import LastMessagesList from '../../components/LastMessageList/LastMessagesList';
import PropTypes from 'prop-types';

const LastChannelsMessageList = ({ user }) => {
  const [lastChannels, setLastChannels] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchLastChannels = () => {
      try {
        const { id } = user;
        const url = `/api/channels-message/`;
        fetchWithAuth(`${url}${id}`).then((lastChannelsData) =>
          setLastChannels(lastChannelsData),
        );
      } catch (err) {
        setError(err);
      }
    };
    if (user) {
      fetchLastChannels();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, lastChannels]);

  return <LastMessagesList lastChannels={lastChannels} />;
};

LastChannelsMessageList.propTypes = {
  user: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default LastChannelsMessageList;
