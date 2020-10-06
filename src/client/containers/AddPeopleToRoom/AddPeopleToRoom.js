import React, { useEffect, useState } from 'react';
import AddPeopleToRoomForm from '../../components/AddPeopleToRoom/AddPeopleToRoomForm';
import '../../components/AddPeopleToRoom/AddPeopleToRoom.css';
import AddNewRoom from '../AddNewRoom/AddNewRoom';

export default function AddPeopleToRoom() {
  const [users, setUsers] = useState([]); // this is use to control the data from api
  const [addUsers, setAddUsers] = useState([]); //  this is use to add user to usersgroup
  const [input, setInput] = useState(''); //  this is use to handle the input from user to search out
  const [toAddRoom, setToAddRoom] = useState('false'); //  thi is use to move to next page
  const url = 'api/users';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((user) => setUsers(user));
  }, []);

  // Add users in group list by using click
  const addUserInGroup = (id) => {
    users.forEach((user) => {
      if (user.id === id) {
        setAddUsers([...addUsers, user]);
      }
    });

    // this is use to remove the item in list of user when click on user
    const removeUserFromUserList = users.filter((user) => user.id !== id);
    setUsers(removeUserFromUserList);
  }; //  end of addUserInGroup function

  //  this function is user to remove user from added group of user
  const onRemoveFromGroup = (id) => {
    const removeUserFromGroup = addUsers.filter((user) => user.id !== id);
    setAddUsers(removeUserFromGroup);

    //  this is use to add the user to list of user from added user in group
    addUsers.forEach((user) => {
      if (user.id === id) {
        setUsers([...users, user]);
      }
    });
  }; //  end of Remove FromGroup function

  // onChangeInput function that will be props to AddNewRoomForm
  const onChangeInput = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  // this  is function use to pass people to group component
  const nextToGroup = () => {
    if (addUsers.length !== 0) {
      setToAddRoom('true');
    }
  };
  return (
    <>
      {toAddRoom === 'true' ? (
        <AddNewRoom addUsers={addUsers} />
      ) : (
        <div>
          <AddPeopleToRoomForm
            onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
            users={users}
            input={input}
            addUserInGroup={(id) => addUserInGroup(id)}
            addUsers={addUsers}
            onChangeInput={(event) => onChangeInput(event)}
            nextToGroup={nextToGroup}
          />
        </div>
      )}
    </>
  );
}
