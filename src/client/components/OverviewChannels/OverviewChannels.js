import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function OverviewChannels() {
  const { channelId } = useParams();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchData = async () => {
        try {
          const getChannels = await fetch(
            `api/channels/${channelId}`,
          ).then((response) => response.json());

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
  }, [channelId]);
  if (!channels) {
    return <p>Opps no channel!</p>;
  }
  if (channels.length === 0) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {channels.map((channel) => {
          return (
            <>
              <li key={channel.id}>
                <Link to={`/overview/${channel.id}`}>{channel.title} </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default OverviewChannels;
