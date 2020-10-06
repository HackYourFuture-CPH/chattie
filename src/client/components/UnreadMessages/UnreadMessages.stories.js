import React from 'react';
import UpdateUnreadMessages from './UpdateUnreadMessages';
import CountUnreadMessages from './CountUnreadMessages';

export default {
  title: 'CountUnreadMessages',
  components: {
    component1: UpdateUnreadMessages,
    component2: CountUnreadMessages,
  },
};

export const Component1 = () => <UpdateUnreadMessages />;
export const Component2 = () => <CountUnreadMessages />;
