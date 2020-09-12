/*import React from 'react';

class SendMessageForm extends React.component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      message: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.message);
  }

  render() {
    console.log(this.state.message);
    return (
      <form onSubmit={this.handleSubmit} className="send-message-from">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Send Message"
          type="text"
        ></input>
      </form>
    );
  }
}
export default SendMessageForm;*/
/*import React, { useState } from 'react';

function SendMessageForm({ message }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    {
      message(value);
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
export default SendMessageForm;*/

/*import React, { useState, useEffect } from 'react';

function SendMessageForm() {
  const [message, setMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    {
      message(value);
    }
    setMessage('');
  };

  useEffect(async () => {
    fetch('/api/')
      .then((res) => res.json())
      .then((message) => console.log(message));
  });

  return (
    <div>
      <form action="../../api/message" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
export default SendMessageForm;*/
import React, { useState } from 'react';

function SendMessageForm() {
  const [input, setInput] = useState('');
  //const [messages, setMessages] = useState(['hi', 'hello', 'how are you']);
  /*const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };*/
  /*useEffect(async () => {
    fetch('/api/messages')
      .then((res) => res.json())
      .then((messages) => console.log(messages));
  sendMessage('')});*/

  const data = {
    channel_id: null,
    user_id: null,
    message: input,
    created_at: null,
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </div>
  );
}
export default SendMessageForm;
