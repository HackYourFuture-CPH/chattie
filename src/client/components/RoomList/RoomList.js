import React from 'react';
import './RoomList.css';
import PropTypes from 'prop-types';
const RoomList = ({ roomList }) => {
  return (
    <ul className="outside">
      {roomList.map((room) => {
        return (
          <li key={room.id} className="list">
            <img className="room-image" src={room.imageUrl} alt="" />
            <label className="room-title">{room.title}</label>
          </li>
        );
      })}
    </ul>
  );
};
RoomList.propTypes = {
  roomList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default RoomList;
