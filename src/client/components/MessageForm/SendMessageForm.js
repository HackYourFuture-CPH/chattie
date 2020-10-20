import React, { useState } from 'react';
import './SendMessageForm.css';
import PropTypes from 'prop-types';
import fetchWithAuth from '../../utils/fetchWithAuth';

function SendMessageForm({ channelId, userId }) {
  const [input, setInput] = useState('');

  const messageInputData = {
    channelId,
    userId,
    message: input,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWithAuth('/api/messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageInputData),
    }).then((res) => res.json());
    setInput('');
    // .then((messages) => console.log(messages));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="send-new-message-form">
        <div className="new-message-form-input">
          {' '}
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Write your message 🚀"
          />
        </div>
      </form>
    </>
  );
}

SendMessageForm.propTypes = {
  userId: PropTypes.number.isRequired,
  channelId: PropTypes.string.isRequired,
};
export default SendMessageForm;
