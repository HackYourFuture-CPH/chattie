import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { UserContext } from '../../context/userContext';
import './UsersListStyle.css';

const requestConfig = (body) => ({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(body),
});

export default function Userslist() {
  const history = useHistory();
  // const { user } = useContext(UserContext);
  const createConversation = async (userId) => {
    const response = await fetch(
      '/api/channels',
      requestConfig({ title: null, channelId }),
    );
    const { channelId } = await response.json();

    await fetch('/api/channel-members', requestConfig({ channelId, userId }));
    // await fetch('/api/channel-members', requestConfig({ channelId, user }));

    history.push(`/channel/${channelId}`);
  };

  const [users, setUsers] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setUsers(result);
    })();
  }, [users]);
  return (
    <ul className="container">
      {users &&
        users.map(({ id, user_name }) => (
          <li key={id} onClick={() => createConversation(id)}>
            {user_name}
          </li>
        ))}
    </ul>
  );
}
