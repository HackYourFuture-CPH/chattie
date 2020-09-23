import React, { useState, useEffect, useContext, useDebugValue } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from '../../context/userContext';
import './UsersListStyle.css';

const requestConfig = (body) => ({
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(body),
});

const useGetRequest = (url) => {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const result = await response.json();
      setState(result);
    })();
  }, [url]);

  return state;
};

export default function Userslist() {
  const history = useHistory();
  const user = useContext(UserContext);
  const users = useGetRequest('/api/users');

  const createConversation = async (userId, currentUser) => {
    const response = await fetch(
      '/api/channels',
      requestConfig({ title: null, channelId }),
    );
    const { channelId } = await response.json();
    const { uid } = currentUser;
    const resCurrentUser = await fetch(`/api/users/current?uid=${uid}`);
    const currentUserFromServer = await resCurrentUser.json();

    await fetch('/api/channel-members', requestConfig({ channelId, userId }));
    await fetch(
      '/api/channel-members',
      requestConfig({ channelId, userId: currentUserFromServer.id }),
    );

    history.push(`/channel/${channelId}`);
  };

  if (!user || !users) {
    return <ul className="container" />;
  }

  return (
    <ul className="container">
      {users.map(({ id, user_name }) => (
        <li key={id} onClick={() => createConversation(id, user)}>
          {user_name}
        </li>
      ))}
    </ul>
  );
}
