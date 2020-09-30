import React, { useState, useEffect } from 'react';
import './Unread.style.css';
import { useParams } from 'react-router-dom';

function CountUnreadMessages() {
  const { channelId } = useParams();

  const [unreadMessages, setUnreadMessages] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const unReadedMessages = async () => {
        try {
          const getUnreadMessages = await fetch(
            `/api/unread?channelId=${channelId}`,
          ).then((response) => response.json());

          setUnreadMessages(getUnreadMessages);
        } catch (erro) {
          return erro;
        }
      };

      unReadedMessages();
    }

    return () => {
      mounted = false;
    };
  }, [channelId]);

  const courentUnreadMessages = [];
  const unreads = unreadMessages
    .map((unreadM) => {
      return unreadM.unread;
    })
    .reduce((a, b) => a + b, 0);
  courentUnreadMessages.push(unreads);

  return (
    <div className="number-of-unread-messages">
      <p className="font-weight">{courentUnreadMessages} </p>
    </div>
  );
}

export default CountUnreadMessages;
