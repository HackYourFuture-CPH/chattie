import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import { UserContext } from '../../context/userContext';
import Loader from '../Loader/Loader';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messageUrl = 'http://localhost:3000/api/messages';
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMessages();
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchMessages = async () => {
    // set loading Before API operation starts
    setIsLoading(true);
    setError(false);

    const responseFromApi = await fetch(messageUrl);
    const jsonData = await responseFromApi.json();
    setMessages(jsonData);
    setError(true);

    // After API operation end
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;

  if (error) {
    return (
      <div style={{ color: `red` }}>
        some error occurred, while fetching api
      </div>
    );
  }
  return (
    <UserContext.Consumer>
      {(user) => {
        const currentUserId = user ? user.id : '';
        return (
          <div className="chat-message__container">
            {messages.map((message) => (
              <div className="chat-message__list">
                <Message currentUser={currentUserId} message={message} />
              </div>
            ))}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default MessageList;
