import React from 'react';
import './RoomList.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CountUnreadMessages from '../../containers/CountUnreadMessages/CountUnreadMessages';

const RoomList = ({ roomList }) => {
  return (
    <ul className="outside">
      {roomList.map((room) => {
        return (
          <li key={room.id} className="list">
            <Link to={`/channels/${room.id}`}>
              <div className="room-list-image-title">
                <div className="room-image-cropper">
                  <CountUnreadMessages channelId={room.id} />
                  <img
                    className="room-profile-pic"
                    src={room.imageUrl}
                    alt=""
                  />
                </div>
                <label className="room-title">{room.title}</label>
              </div>
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
