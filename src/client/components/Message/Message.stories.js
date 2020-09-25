import React from 'react';
import Message from './Message.js';

export default {
  title: 'Message',
  component: Message,
};
const testMsg = {
  message: 'Hey, how are you?',
  name: 'Evan',
};
export const OneMsg = () => {
  return <Message text={testMsg.message} username="Anna" />;
};

const check2 = {
  username: 'Anna',
  message: 'What season is it',
};

const check3 = {
  username: 'Evan',
  message: 'Its autumn',
};
const check4 = {
  username: 'Anna',
  message: 'Enjoy the season',
};

export const DisplayMessages = () => {
  return (
    <div>
      <Message text={check2.message} username="Evan" />
      <Message text={check3.message} username="Jayden" />
      <Message text={check4.message} username="Anna" />
    </div>
  );
};
