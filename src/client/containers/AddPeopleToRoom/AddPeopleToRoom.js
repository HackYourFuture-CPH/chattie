import React, { useEffect, useState } from 'react';
import AddPeopleToRoomForm from '../../components/AddPeopleToRoom/AddPeopleToRoomForm';
import '../../components/AddPeopleToRoom/AddPeopleToRoom.css';
import AddNewRoom from '../AddNewRoom/AddNewRoom';
import fetchWithAuth from '../../utils/fetchWithAuth';

export default function AddPeopleToRoom() {
  const [users, setUsers] = useState([]); // this is use to control the data from api
  const [addedUsers, setAddedUsers] = useState([]); //  this is use to add user to usersgroup
  const [input, setInput] = useState(''); //  this is use to handle the input from user to search out
  const [toAddRoom, setToAddRoom] = useState(false); //  thi is use to move to next page
  const url = 'api/users';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((user) => setUsers(user));
  }, []);

  // Add users in group list by using click
  const renderUserInGroup = (id) => {
    users.forEach((user) => {
      if (user.id === id) {
        setAddedUsers([...addedUsers, user]);
      }
    });

    // this is use to remove the item in list of user when click on user
    const removeUserFromUserList = users.filter((user) => user.id !== id);
    setUsers(removeUserFromUserList);
  };

  //  this function is user to remove user from added group of user
  const onRemoveFromGroup = (id) => {
    const removeUserFromGroup = addedUsers.filter((user) => user.id !== id);
    setAddedUsers(removeUserFromGroup);

    //  this is use to add the user to list of user from added user in group
    addedUsers.forEach((user) => {
      if (user.id === id) {
        setUsers([...users, user]);
      }
    });
  };

  // onChangeInput function that will be props to AddNewRoomForm
  const onSearch = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  // this  is function use to pass people to group component
  const onNext = () => {
    if (addedUsers.length !== 0) {
      setToAddRoom(true);
    }
  };
  return (
    <>
      {toAddRoom === true ? (
        <AddNewRoom addedUsers={addedUsers} />
      ) : (
        <div>
          <AddPeopleToRoomForm
            onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
            users={users}
            input={input}
            renderUserInGroup={(id) => renderUserInGroup(id)}
            addedUsers={addedUsers}
            onSearch={(event) => onSearch(event)}
            onNext={onNext}
          />
        </div>
      )}
    </>
  );
}
