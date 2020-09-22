import React from 'react';
import CreateANewRoomButton from '../CreateANewRoomButton/CreateANewRoomButton';
import RoomList from '../RoomList/RoomList';
import './RoomListOverview.css';
import PropTypes from 'prop-types';

function RoomListOverview(props) {
  return (
    <div className="roomlist-overview">
      <CreateANewRoomButton />
      <RoomList roomList={props.roomList} />
    </div>
  );
}

RoomListOverview.propTypes = {
  roomList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomListOverview;
