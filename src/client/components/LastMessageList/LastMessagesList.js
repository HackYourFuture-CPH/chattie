import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import './LastMessagesList.css';
import { object } from '@storybook/addon-knobs';

const LastMessageList = ({ messages, onGoToChatPage, userId }) => (
  <ul className="last-messages-container">
    {messages.map(
      ({
        message,
        updatedAt,
        channelId,
        title,
        userName,
        imageUrl,
        profileImage,
        authorMessageId,
      }) => (
        <li
          className="last-conversation-details"
          role="presentation"
          key={channelId}
          onClick={() => {
            onGoToChatPage(channelId);
          }}
        >
          <div className="last-messages-image">
            {title ? (
              <img src={imageUrl} alt="room" />
            ) : (
              <img src={profileImage} alt="user profile" />
            )}
          </div>
          <div className="title-messages-container">
            {title ? <h3>{title}</h3> : <h3>{userName}</h3>}
            <div>
              {authorMessageId === userId ? (
                <span>You: {message} </span>
              ) : (
                <span>{message}</span>
              )}
              <Moment className="message-date" format="DD.MM">
                {updatedAt}
              </Moment>
            </div>
          </div>
        </li>
      ),
    )}
  </ul>
);

export default LastMessageList;

LastMessageList.propTypes = {
  messages: PropTypes.arrayOf(object).isRequired,
  onGoToChatPage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
