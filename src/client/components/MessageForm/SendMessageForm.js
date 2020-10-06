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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/List-Icon.svg/768px-List-Icon.svg.png"
          alt=""
        />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </>
  );
}

SendMessageForm.propTypes = {
  userId: PropTypes.number.isRequired,
  channelId: PropTypes.string.isRequired,
};
export default SendMessageForm;
