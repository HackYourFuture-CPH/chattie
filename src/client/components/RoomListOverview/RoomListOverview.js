import React from 'react';
import Channels from '../../containers/Channels/Channels';
import './RoomListOverview.css';
import CreateANewRoomButton from '../CreateANewRoomButton/CreateANewRoomButton';

function RoomListOverview() {
  return (
    <div className="roomlist-overview">
      <CreateANewRoomButton />
      <Channels />
    </div>
  );
}
export default RoomListOverview;
