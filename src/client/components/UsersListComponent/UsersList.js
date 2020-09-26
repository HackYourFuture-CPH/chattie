/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext } from 'react';
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

export default function Userslist({ users }) {
  const history = useHistory();
  const user = useContext(UserContext);

  const createConversation = async (userId, currentUser) => {
    const { uid } = currentUser;
    const resCurrentUser = await fetch(`/api/users/current?uid=${uid}`);
    const currentUserFromServer = await resCurrentUser.json();
    const resChannelMembers = await fetch(
      `api/channel-members/?memberIds=${currentUserFromServer.id},${userId}`,
    );
    const existChannelId = await resChannelMembers.json();

    if (existChannelId?.length) {
      history.push(`/channel/${existChannelId}`);
    } else {
      const response = await fetch(
        '/api/channels',
        requestConfig({ title: null, channelId }),
      );
      const { channelId } = await response.json();

      await fetch('/api/channel-members', requestConfig({ channelId, userId }));
      await fetch(
        '/api/channel-members',
        requestConfig({ channelId, userId: currentUserFromServer.id }),
      );

      history.push(`/channel/${channelId}`);
    }
  };

  if (!user || !users) {
    return <ul className="user-list-container" />;
  }

  return (
    <ul className="user-list-container">
      {users.map(({ id, user_name, profile_image }) => (
        <li
          key={id}
          className="user-list"
          onClick={() => createConversation(id, user)}
        >
          <img src={profile_image} alt={profile_image} />
          <span>{user_name} </span>
        </li>
      ))}
    </ul>
  );
}

Userslist.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      user_name: PropTypes.string,
      profile_image: PropTypes.string,
    }),
  ).isRequired,
};
