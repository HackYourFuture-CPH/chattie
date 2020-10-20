import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';
import './LastMessagesList.css';
import { object } from '@storybook/addon-knobs';

const LastMessage = ({
  messageInfo: {
    message,
    updatedAt,
    channelId,
    title,
    imageUrl,
    authorMessageId,
  },
  onGoToChatPage,
  userId,
}) => {
  const { response: channelMembers } = useFetch(
    `api/channel-members/membersInfo?channelId=${channelId}`,
  );

  if (!channelMembers) {
    return null;
  }

  const { profileImage, userName } = channelMembers.filter(
    (member) => member.id !== userId,
  )[0];

  return (
    <li
      className="last-conversation-details"
      role="presentation"
      key={channelId}
      onClick={() => onGoToChatPage(channelId)}
    >
      <div className="last-messages-image">
        {title ? (
          <img src={imageUrl} alt="room" />
        ) : (
          <img src={profileImage} alt="user profile" />
        )}
      </div>
      <div className="title-messages-container">
        <h3>{title || userName}</h3>

        <div>
          {authorMessageId === userId ? (
            <span className="latest-message-text">You: {message}</span>
          ) : (
            <span className="latest-message-text">{message}</span>
          )}
          <Moment className="message-date" format="DD.MM">
            {updatedAt}
          </Moment>
        </div>
      </div>
    </li>
  );
};

const LastMessageList = ({ messages, onGoToChatPage, userId }) => (
  <ul className="last-messages-container">
    {messages.map((m) => (
      <LastMessage
        key={m.channelId}
        messageInfo={m}
        onGoToChatPage={onGoToChatPage}
        userId={userId}
      />
    ))}
  </ul>
);

export default LastMessageList;

LastMessage.propTypes = {
  messageInfo: PropTypes.arrayOf(object).isRequired,
  onGoToChatPage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

LastMessageList.propTypes = {
  messages: PropTypes.arrayOf(object).isRequired,
  onGoToChatPage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
