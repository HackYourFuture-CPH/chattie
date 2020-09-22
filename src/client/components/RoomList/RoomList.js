import React from 'react';
import './RoomList.css';

import PropTypes from 'prop-types';

const RoomList = ({ roomList }) => {
  return (
    <div className="outside">
      {roomList.map((room) => {
        /* const firstTochar = room.split('');
        const firstChar = firstTochar[0]; */

        return (
          <div>
            <li className="list">
              <div>
                <img src={room.imageUrl} alt="" />
                <label className="room-title">{room.title}</label>
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
