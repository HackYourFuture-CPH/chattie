import React from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import { useParams } from 'react-router-dom';

export default function UpdateUnreadMessages() {
  const { id, userId, channelId } = useParams();

  const update = {
    userId,
    channelId,
  };
  fetchWithAuth(`/api/unread/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(update),
  });

  return (
    <>
      <p>This channel is open</p>
    </>
  );
}
