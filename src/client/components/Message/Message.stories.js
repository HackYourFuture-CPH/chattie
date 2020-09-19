import React from 'react';
import Message from './Message/Message';

export default {
  title: 'Message',
  component: Message,
};

export const OneMessage = () => (
  <Message
    message={{
      message: 'whats up',
    }}
  />
);
export const EmptyMessage = () => (
  <Message
    message={{
      message: '',
    }}
  />
);
export const BigMessage = () => (
  <Message
    message={{
      message:
        'whats up.?this is a sample text to see how the text will be rendered',
    }}
  />
);
