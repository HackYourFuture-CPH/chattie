/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './LastMessagesList.css';
import { object } from '@storybook/addon-knobs';

export default function LastMessageList({ lastChannels, onGoToChatPage }) {
  if (!lastChannels) {
    return <p>No channels, start a conversation to see it here</p>;
  }

  return (
    <ul>
      {lastChannels &&
        lastChannels.map(({ message, updatedAt, channelId, title }) => (
          <li
            role="presentation"
            key={channelId}
            onClick={() => {
              onGoToChatPage(channelId);
            }}
            onKeyDown={() => {
              onGoToChatPage(channelId);
            }}
          >
            <p>{title}</p>
            <h6>{message}</h6>
            <span>
              <h6>{updatedAt}</h6>
            </span>
          </li>
        ))}
    </ul>
  );
}

LastMessageList.propTypes = {
  lastChannels: PropTypes.arrayOf(object).isRequired,
  onGoToChatPage: PropTypes.func.isRequired,
};
