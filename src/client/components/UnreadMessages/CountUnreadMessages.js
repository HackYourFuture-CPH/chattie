import React, { useState, useEffect } from 'react';
import './Unread.style.css';
import { useParams } from 'react-router-dom';

function CountUnreadMessages() {
  const { userId, channelId } = useParams();

  const [unreadMessages, setUnreadMessages] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchUnreadMessages = async () => {
        try {
          const getUnreadMessages = await fetch(
            `/api/unread?userId=${userId}&channelId=${channelId}`,
          );
          const getResult = await getUnreadMessages.json();
          setUnreadMessages(getResult);
        } catch (error) {
          console.log(error);
        }
      };

      fetchUnreadMessages();
    }

    return () => {
      mounted = false;
    };
  }, [userId, channelId]);

  const courentUnreadMessages = [];
  const unreads = unreadMessages
    .map((u) => {
      return u.unread;
    })
    .reduce((a, b) => a + b, 0);
  courentUnreadMessages.push(unreads);

  return (
    <div className="number-of-unread-messages">
      <p>{courentUnreadMessages} </p>
    </div>
  );
}

export default CountUnreadMessages;
