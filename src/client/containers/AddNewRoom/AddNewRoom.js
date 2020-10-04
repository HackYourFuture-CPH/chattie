import React, { useState } from 'react';
import RoomForm from '../../components/AddNewRoom/RoomForm';
import '../../components/AddNewRoom/AddNewRoomStyle.css';
import fetchWithAuth from '../../utils/fetchWithAuth';

const AddNewRoom = ({ addUsers }) => {
  const [roomName, setNewRoom] = useState('');
  const [roomId, setRoomId] = useState('');
  const inputChange = (e) => {
    setNewRoom(e.target.value);
  };

  // send data fucntion
  const createRoom = async (name) => {
    const response = await fetch('api/channels', {
  const createRoom = async (data) => {
    const response = await fetchWithAuth('api/channels', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: name }),
    });
    return response;
  };
  const onCreate = async (event) => {
    event.preventDefault();
    const responseFromServer = await createRoom(roomName);
    setRoomId(responseFromServer.id);
  };

  //Add user of group in server
  if (roomId !== '') {
    addUsers.map((user) => {
      fetch('api/channel-members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ channelId: roomId, userId: user.id }),
      });
    });
  } // end  if statement

  // add dispaly people in group
  const displaypeopleInGroup = () => {
    return addUsers.map((user) => (
      <div className="wraper-roomform">
        <img src={user.profile_image} alt="user image" />
        <div>{user.user_name}</div>
      </div>
    ));
  };

  //back button that is move to back app people to room page
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
export default AddNewRoom;
