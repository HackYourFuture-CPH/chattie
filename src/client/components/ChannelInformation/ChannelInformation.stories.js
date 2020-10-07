import React from 'react';
import { RenderChannelInformation } from './ChannelInnformation';

export default {
  title: 'Channel Information',
  component: RenderChannelInformation,
};

export const Component = () => (
  <RenderChannelInformation
    image="https://loremflickr.com/320/240"
    title="Room"
    members={[
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
    ]}
  />
);