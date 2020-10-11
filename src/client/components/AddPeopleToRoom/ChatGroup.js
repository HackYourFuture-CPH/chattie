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
  }, [roomId]);
  return (
    <>
      <div className="container-chatgroup">
        <div className="group-name">{roomName}</div>
        <ul className="wraper-chatgroup">
          {channelMembers.map((user) => (
            <li key={user.userName} className="group-members-names">
              {user.userName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
ChatGroup.propTypes = {
  roomName: PropTypes.string.isRequired,
  roomId: PropTypes.number.isRequired,
};
