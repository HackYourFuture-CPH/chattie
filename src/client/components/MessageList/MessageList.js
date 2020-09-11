import React, { useState } from 'react';
import Message from './components/Messages/Message';

function MessageList() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'anna', text: 'hi' },
    { username: 'aswini', text: 'how are you' },
  ]);
  const [username, setUsername] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  };
  return (
    <div>
      {messages.map((msgfromUser, index) => (
        <Message username={msgfromUser.username} text={msgfromUser.text} />
      ))}
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
      </form>
    </div>
  );
}
export default MessageList;
