import React from 'react';
import RoomListOverview from './RoomListOverview';

export default { title: 'RoomListOverview' };

export const BasicStory = () => (
  <RoomListOverview roomList={['Kitchen', 'FoH', 'Maintenance', 'Delivery']} />
);
