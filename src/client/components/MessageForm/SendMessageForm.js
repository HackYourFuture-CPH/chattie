import React, { useState } from 'react';
import './SendMessageForm.css';

function SendMessageForm() {
  const [input, setInput] = useState('');
  const data = {
    channel_id: null,
    user_id: null,
    message: input,
  };
  const handleSubmit = () => {
    fetch('/api/messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((messages) => console.log(messages));
  };

  return (
    <footer>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/List-Icon.svg/768px-List-Icon.svg.png"
            alt="icon-image"
          />
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </form>
      </div>
    </footer>
  );
}
export default SendMessageForm;
