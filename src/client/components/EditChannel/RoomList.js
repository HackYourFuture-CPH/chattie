import React from 'react';
import RoomLink from './RoomLink';
import PropTypes from 'prop-types';

const RoomList = (props) => {
  const { channels } = props;
  return channels.map((channel) => (
    <RoomLink
      key={channel.id}
      title={channel.title}
      id={channel.id}
      imageUrl={channel.imageUrl}
    />
  ));
};
RoomList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ).isRequired,
};
RoomList.defaultProps = {
  title: '',
  imageUrl: '',
};
export default RoomList;
