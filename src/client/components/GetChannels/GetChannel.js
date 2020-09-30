import React, { useState, useEffect } from 'react';
import UpdateUnreadMessages from '../UnreadMessages/UpdateUnreadMessages';
import { useParams } from 'react-router-dom';

export default function GetChannel() {
  const { id } = useParams();

  const [channel, setChannel] = useState([]);
  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const getChannel = await fetch(`/api/channels/${id}`).then((response) =>
          response.json(),
        );

        setChannel(getChannel);
      } catch (error) {
        return error;
      }
    };

    fetchChannel();
  }, [id]);
  return (
    <>
      <UpdateUnreadMessages />
      {channel.map((channe) => {
        return <h5 key={channe.id}>{channe.title}</h5>;
      })}
    </>
  );
}
