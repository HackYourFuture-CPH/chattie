import React from 'react';
import './RoomList.css';

import PropTypes from 'prop-types';

const RoomList = ({ roomList }) => {
  return (
    <div className="outside">
      {roomList.map((room) => {
        return (
          <div key={room.title}>
            <li className="list">
              <div className="pic-and-title">
                <img className="Room-image" src={room.imageUrl} alt="" />
                <label className="Room-title">{room.title}</label>
              </div>
            </li>
          </div>
        );
      })}
    </div>
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
