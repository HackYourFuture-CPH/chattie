/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './LastMessagesList.css';
import { object } from '@storybook/addon-knobs';

export default function LastMessageList({ lastChannels }) {
  if (!lastChannels) {
    return <p>No channels, start a conversation to see it here</p>;
  }
  return (
    <ul>
      {lastChannels.map(({ message, updatedAt, ChannelId, title }) => (
        <li
          key={ChannelId}
          // onClick={()=>{}} //must open the channel
          // onKeyDown={()=>{}}
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
};
