import React, { useState } from 'react';
import './SendMessageForm.css';

function SendMessageForm() {
  const [input, setInput] = useState('');
  const messageInputData = {
    channelId: null,
    userId: null,
    message: input,
  };
  const handleSubmit = () => {
    fetch('/api/messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageInputData),
    }).then((res) => res.json());
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
