import React from 'react';
import RoomList from './RoomList';

export default { title: 'RoomList' };

export const BasicStory = () => (
  <RoomList roomList={['Kitchen', 'FoH', 'Maintenance', 'Delivery']} />
);
