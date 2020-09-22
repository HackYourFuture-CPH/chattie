import React from 'react';
import './RoomList.css';
import PropTypes from 'prop-types';

const RoomList = ({ roomList }) => {
  return (
    <div className="outside">
      {roomList.map((room) => {
        const firstToChar = room.split('');
        const firstChar = firstToChar[0];
        return (
          <div>
            <li className="list">
              <div>
                <button type="submit">{firstChar}</button>

                <div className="room-name">{room}</div>
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
