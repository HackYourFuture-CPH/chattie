import React, { useState, useEffect, useContext } from 'react';
import '../../components/UnreadMessages/Unread.style.css';
import FetchWithAuth from '../../utils/fetchWithAuth';
import PropTypes from 'prop-types';
import { UserContext } from '../../context/userContext';

function CountUnreadMessages({ channelId }) {
  const [unreadMessages, setUnreadMessages] = useState([]);
  const [error, setError] = useState(null);
  const user = useContext(UserContext);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchUnreadMessages = async () => {
        try {
          const getUnreadMessages = await FetchWithAuth(
            `/api/unread?userId=${user.id}&channelId=${channelId}`,
          );

          setUnreadMessages(getUnreadMessages);
        } catch (e) {
          setError(e);
        }
      };

      fetchUnreadMessages();
    }

    return () => {
      mounted = false;
    };
  }, [user, channelId]);

  if (unreadMessages.length === 0) {
    return (
      <>
        <div className="number-of-unread-messages">
          {unreadMessages
            .map((u) => {
              return u.unread;
            })
            .reduce((a, b) => a + b, 0)}
        </div>
        <p>{error}</p>
      </>
    );
  }
  return null;
}

CountUnreadMessages.propTypes = {
  channelId: PropTypes.number.isRequired,
};
export default CountUnreadMessages;
