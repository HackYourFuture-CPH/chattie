import React from 'react';
import MessageList from './MessageList/MessageList';

export default { title: 'MessageList', component: MessageList };
const testData = [
  {
    text: 'Hey, how is it going?',
  },
  {
    text: 'Great! How about you?',
  },
  {
    text: 'Good to hear! I am great as well',
  },
];
export const Component = () => <MessageList messages={testData} />;
