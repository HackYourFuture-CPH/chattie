import React from 'react';
import MessageList from './MessageList/MessageList';

export default { title: 'MessageList', component: MessageList };

const testData = [
  {
    username: 'Anna',
    message: { name: 'Anna', message: 'Hey, how is it going?' },
  },
  { username: 'Anju', message: { name: 'Evan', message: 'Cool fine' } },
  {
    username: 'Anna',
    message: { name: 'Anna', message: 'Good to hear! I am great as well' },
  },
  { username: 'Anju', message: { name: 'Evan', message: 'C u soon' } },
];

export const Component = () => {
  return (
    <div>
      <MessageList messages={testData} />
    </div>
  );
};
