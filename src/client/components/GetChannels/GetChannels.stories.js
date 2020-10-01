import React from 'react';
import GetChannels from './GetChannels';
import GetChannel from './GetChannel';

export default {
  title: 'Get Channels',
  components: {
    component1: GetChannels,
    component2: GetChannel,
  },
};

export const Component1 = () => <GetChannels title="GetChannels" />;
export const Component2 = () => <GetChannel title="GetChannel" />;
