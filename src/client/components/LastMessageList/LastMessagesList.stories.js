import React from 'react';
import LastMessageList from './LastMessagesList.js';

export default { title: 'LastMessagesList' };

const lastChannels = [
  {
    message: 'are you busy Malek',
    updated_at: '2020-09-20T13:35:06.000Z',
    fk_channel_id: 1,
    title: 'Afrouz&Malek',
  },
  {
    message: 'Hello kati&Malek',
    updated_at: '2020-09-20T13:33:45.000Z',
    fk_channel_id: 6,
    title: 'Afrouz&kati&Malek',
  },
  {
    message: 'Hello kati',
    updated_at: '2020-09-20T13:33:07.000Z',
    fk_channel_id: 5,
    title: 'Afrouz&kati',
  },
];

export const BasicStory = () => <LastMessageList lastChannels={lastChannels} />;
