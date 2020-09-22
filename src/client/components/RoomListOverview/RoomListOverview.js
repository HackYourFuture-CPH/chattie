import React from 'react';
import RoomList from '../RoomList/RoomList';
import './RoomListOverview.css';
import PropTypes from 'prop-types';
import CreateNewRoomButton from '../CreateNewRoomButton/CreateNewRoomButton';

function RoomListOverview(props) {
  return (
    <div className="roomlist-overview">
      <CreateNewRoomButton />
      <RoomList roomList={props.roomList} />
    </div>
  );
}
RoomListOverview.propTypes = {
  roomList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default RoomListOverview;
