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
  return <Message message={testMsg} username="Anna" />;
};
const message1 = {
  message: 'Test',
  name: 'Evan',
};
const message2 = {
  message: 'Test the left side',
  name: 'Anna',
};
export const DisplayMessagesOnLeft = () => {
  return (
    <div>
      <Message message={message1} username="Anna" />
      <Message message={message2} username="Evan" />
    </div>
  );
};
const msg1 = {
  message: 'Test right side',
  name: 'Anna',
};
const msg2 = {
  message: 'Test right side',
  name: 'Jayden',
};
export const DisplayMessagesOnRightSides = () => {
  return (
    <div>
      <Message message={msg1} username="Anna" />
      <Message message={msg2} username="Jayden" />
    </div>
  );
};
const check2 = {
  name: 'Anna',
  message: 'What season is it',
};

const check3 = {
  name: 'Evan',
  message: 'Its autumn',
};
const check4 = {
  name: 'Anna',
  message: 'Enjoy the season',
};

export const DisplayMessagesOnBothSides = () => {
  return (
    <div>
      <Message message={check2} username="Anna" />
      <Message message={check3} username="Jayden" />
      <Message message={check4} username="Anna" />
    </div>
  );
};
