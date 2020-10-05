import React from 'react';
import GetChannels from './OverviewChannels';
import GetChannel from './OverviewChannel';

export default {
  title: 'Get Channels',
  components: {
    component1: GetChannels,
    component2: GetChannel,
  },
};

export const Component1 = () => <GetChannels />;
export const Component2 = () => <GetChannel />;
