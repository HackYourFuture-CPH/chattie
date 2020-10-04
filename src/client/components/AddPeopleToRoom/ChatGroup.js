import React, { useState, useEffect } from 'react';
import './AddPeopleToRoom.css';
import PropTypes from 'prop-types';

// this  component is just use for demo ,i will remove when review it
export default function ChatGroup({ roomId, roomName }) {
  const [channelMembers, setChannelMembers] = useState([]);
  useEffect(() => {
    const url = `api/channel-members/${roomId}`;
    fetch(url)
      .then((res) => res.json())
      .then((getMembers) => setChannelMembers(getMembers));
  }, []);
  return (
    <>
      <div className="container-chatgroup">
        <div className="group-name">{roomName}</div>
        <div className="wraper-chatgroup">
          {channelMembers.map((user) => (
            <div className="group-members-names">{user.user_name}</div>
          ))}
        </div>
      </div>
    </>
  );
}
ChatGroup.PropTypes = {
  rroomName: PropTypes.string.isRequired,
  roomId: PropTypes.number.isRequired,
};
