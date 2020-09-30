import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateUnreadMessages() {
  const { id, userId, channelId } = useParams();
  useEffect(() => {
    const isActive = true;
    if (isActive) {
      const baseUrl = `/api/unread/${id}`;
      const update = {
        userId,
        channelId,
      };
      axios
        .patch(baseUrl, update, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        })
        .catch((error) => error);
    }
  });

  return (
    <>
      <p>This channel is open</p>
    </>
  );
}
