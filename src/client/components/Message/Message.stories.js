import React from 'react';
import MessageList from '../MessageList/MessageList';

export default { title: 'MessageList' };

export const OneMessage = () => (
  <MessageList
    messages={[
      {
        username: 'evan',
        text: 'whats up',
      },
    ]}
  />
);
export const EmptyMessage = () => <MessageList messages={[]} />;
export const BigMessage = () => (
  <MessageList
    messages={[
      {
        username: 'anna',
        text:
          'whats up.?this is a sample text to see how the text will be rendered',
      },
    ]}
  />
);
export const Messages = () => (
  <MessageList
    messages={[
      {
        username: 'anna',
        text: 'hiiii',
      },
      {
        username: 'ivy',
        text:
          'whats up.?this is a sample text to see how the chats will look when stacked below each other',
      },
      {
        username: 'evan',
        text: 'sample text',
      },
    ]}
  />
);
