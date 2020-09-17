import React from 'react';
import './RoomList.css';
import PropTypes from 'prop-types';

const RoomList = ({ roomList }) => {
  return (
    <div>
      {roomList.map((room) => {
        const firstToChar = room.split('');
        const firstChar = firstToChar[0];
        return (
          <div className="room-list">
            <li className="list">
              <div>
                <button type="submit">{firstChar}</button>

                <div>{room}</div>
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
