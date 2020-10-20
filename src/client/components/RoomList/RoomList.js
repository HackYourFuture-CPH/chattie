import React from 'react';
import './RoomList.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoomList = ({ roomList }) => {
  return (
    <ul className="outside">
      {roomList.map((room) => {
        return (
          <li key={room.id} className="list">
            <Link to={`/channels/${room.id}`}>
              <div className="room-image-cropper">
                <img className="room-profile-pic" src={room.imageUrl} alt="" />
              </div>
              <label className="room-title">{room.title}</label>
            </Link>
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
