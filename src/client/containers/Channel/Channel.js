import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { UserContext } from '../../context/userContext';
import ChannelMessagesView from '../ChannelMessagesView/ChannelMessagesView';

function Channel() {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);

  // const getMsg = async () => {
  //   const response = await fetch(`/api/messages?channelId=${id}`);
  //   console.log("db", response);
  //   const result = await response.json();
  //   console.log("result of db", result);
  //   setMessages(result);
  // };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const url = `/api/messages?channelId=${channelId}`;
        const response = await fetch(url);
        console.log('get response', response);
        const matchedChannel = await response.json();
        console.log('get channel id', matchedChannel);

        setMessages(matchedChannel);
      } catch (err) {
        return <p>{err}</p>;
      }

      // const interval = setInterval(getMsg, 5000);
      // return () => clearInterval(interval);
    };
    fetchMessages();
  }, [channelId]);

  // useEffect(() => {
  //     getMsg();
  //   const interval = setInterval(getMsg, 5000);
  //   return () => clearInterval(interval);
  // },[]);

  return (
    <div>
      <ChannelMessagesView messages={messages} />
      <ul className="message-list">
        {messages.map(({ id, message }) => (
          <li key={id}>{message}</li>
        ))}
      </ul>
    </div>
  );

  // if (messages.length === 0) {
  //   return (
  //     <>
  //       <ChannelMessagesView messages={messages}/>
  //       <p>Messages not found for channel with id: {id}</p>
  //       <UserContext.Consumer>
  //         {(user) => {
  //           const email = user ? user.email : '';
  //           return <div>This is a private channels for the user: {email}.</div>;
  //         }}
  //       </UserContext.Consumer>
  //     </>
  //   );
  // }
  //  return console.log(messages);
}

export default Channel;
