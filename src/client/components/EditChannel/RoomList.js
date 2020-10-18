import React from 'react';
import RoomLink from './RoomLink';

const RoomList = (props) => {
  const { channels } = props;
  return channels.map((channel) => (
    <RoomLink
      key={channel.id}
      title={channel.title}
      id={channel.id}
      imgUrl={channel.imgUrl}
    />
  ));
};
export default RoomList;
