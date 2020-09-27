import React, { useState } from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import './SendMessageForm.css';

function SendMessageForm() {
  const [input, setInput] = useState('');
  const messageInputData = {
    channelId: null,
    userId: null,
    message: input,
  };

  const handleSubmit = async () => {
    await fetchWithAuth('/api/messages', {
      method: 'post',
      body: JSON.stringify(messageInputData),
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/List-Icon.svg/768px-List-Icon.svg.png"
          alt=""
        />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </div>
  );
}
export default SendMessageForm;
