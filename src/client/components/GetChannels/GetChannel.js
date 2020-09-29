import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function GetChannel({ match }) {
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const getChannel = await fetch(
          `/api/channels/${match.params.id}`,
        ).then((response) => response.json());

        setChannel(getChannel);
      } catch (error) {
        return error;
      }
    };

    fetchChannel();
  }, [match]);

  return (
    <>
      {channel.map((channe) => {
        return <h5 key={channe.id}>{channe.title}</h5>;
      })}
    </>
  );
}
GetChannel.propTypes = {
  match: PropTypes.arrayOf(
    PropTypes.shape({
      params: PropTypes.object,
      id: PropTypes.integer,
    }),
  ).isRequired,
};
