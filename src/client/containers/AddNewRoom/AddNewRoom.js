import React, { useState } from 'react';
import RoomForm from '../../components/AddNewRoom/RoomForm';
import '../../components/AddNewRoom/AddNewRoomStyle.css';
import PropTypes from 'prop-types';

const AddNewRoom = ({ addUsers }) => {
  const [roomName, setNewRoom] = useState('');
  const [roomId, setRoomId] = useState('');

  const inputChange = (e) => {
    setNewRoom(e.target.value);
  };

  // send data fucntion
  const createRoom = async (name) => {
    const response = await fetch('api/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: name }),
    });
    return response.json();
  };
  const onCreate = async (event) => {
    event.preventDefault();
    const responseFromServer = await createRoom(roomName);
    setRoomId(responseFromServer.id);
  };

  // Add user of group in server
  if (roomId !== '') {
    addUsers.forEach((user) => {
      fetch('api/channel-members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ channelId: roomId, userId: user.id }),
      });
    });
  } //  end  if statement

  // add dispaly people in group
  const displaypeopleInGroup = () => {
    return addUsers.map((user) => (
      <div className="wraper-roomform">
        <img src={user.profile_image} alt="user pic" />
        <div>{user.user_name}</div>
      </div>
    ));
  };

  // back button that is move to back app people to room page
  const backToAddPeople = () => {
    window.location.assign('./addpeople');
  };

  return (
    <>
      <RoomForm
        onCreate={onCreate}
        inputChange={(e) => inputChange(e)}
        roomName={roomName}
        roomId={roomId}
        displaypeopleInGroup={displaypeopleInGroup}
        backToAddPeople={backToAddPeople}
      />
    </>
  );
};
AddNewRoom.propTypes = {
  addUsers: PropTypes.objectOf.isRequired,
};

export default AddNewRoom;
