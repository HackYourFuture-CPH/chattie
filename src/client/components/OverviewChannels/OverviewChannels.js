import React, { useState, useEffect } from 'react';
import UpdateUnreadMessages from '../UnreadMessages/UpdateUnreadMessages';
import { useParams } from 'react-router-dom';

export default function OverviewChannels() {
  const { id } = useParams();

  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const getChannels = await fetch(
          `/api/channels/${id}`,
        ).then((response) => response.json());

        setChannels(getChannels);
      } catch (error) {
        return error;
      }
    };

    fetchChannels();
  }, [id]);
  return (
    <>
      <UpdateUnreadMessages />
      {channels.map((channel) => {
        return <h5 key={channel.id}>{channel.title}</h5>;
      })}
    </>
  );
}
