import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function GetChannels({ users }) {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    let mounted = true;
    // if (!users) return;

    if (mounted) {
      const fetchData = async () => {
        try {
          const getChannels = await fetch(`api/channels`).then((response) =>
            response.json(),
          );

          setChannels(getChannels);
        } catch (error) {
          return error;
        }
      };

      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, []);
  console.log(channels);
  //   if (!users) {
  //     return <p>No channels</p>;
  //   }
  if (!channels) {
    return (
      <>
        <p>No Channel!</p>
        <Redirect to="/" />
      </>
    );
  }
  if (channels.length === 0) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {channels.map((channel) => {
          return (
            <li key={channel.id}>
              <Link to={`/overview/${channel.id}`}>{channel.title} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

GetChannels.propTypes = {
  users: PropTypes.objectOf(
    PropTypes.shape({
      user_name: PropTypes.string,
      profile_image: PropTypes.string,
    }),
  ).isRequired,
};

export default GetChannels;
