import React from 'react';
import MessageList from './MessageList/MessageList';

export default { title: 'MessageList', component: MessageList };
const msgs = ['hi', 'hello', 'how  ru ', 'c u soon'];
export const Component = () => <MessageList message={msgs} />;
