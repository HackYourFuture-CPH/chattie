import React from 'react';
import './RoomList.css';

import PropTypes from 'prop-types';

const RoomList = ({ roomList }) => {
  return (
    <div className="outside">
      {roomList.map((room) => {
        return (
          <div>
            <li className="list">
              <div>
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
  roomList: PropTypes.func.isRequired,
};
export default RoomList;
