import React from 'react';
import { ChannelInformationComponent } from './ChannelInnformation';

export default {
  title: 'Channel Information',
  component: ChannelInformationComponent,
};

export const Component = () => (
  <ChannelInformationComponent
    image="https://loremflickr.com/320/240"
    title="Room"
    Link="/add-people"
    members={[
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
      { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
    ]}
  />
);
