import React from 'react';
import MessageList from './MessageList.js';

export default { title: 'MessageList', component: MessageList };

const testData = [
  {
    username: 'Anna',
    message: 'Hey, how is it going?',
  },
  { username: 'Anju', message: 'Cool fine' },
  {
    username: 'Anna',
    message: 'Good to hear! I am great as well',
  },
  { username: 'Anju', message: 'C u soon' },
];

export const Component = () => {
  return (
    <div>
      <MessageList messages={testData} />
    </div>
  );
};
