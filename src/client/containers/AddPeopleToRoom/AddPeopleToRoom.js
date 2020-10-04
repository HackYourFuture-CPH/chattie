import React, { useEffect, useState } from 'react';
import AddPeopleToRoomForm from '../../components/AddPeopleToRoom/AddPeopleToRoomForm';
import '../../components/AddPeopleToRoom/AddPeopleToRoom.css';
import AddNewRoom from '../AddNewRoom/AddNewRoom';

export default function AddPeopleToRoom(props) {
  const [users, setUsers] = useState([]); //this is use to control the data from api
  const [addUsers, setAddUsers] = useState([]); // this is use to add user to usersgroup
  const [input, setInput] = useState([]); // this is use to handle the input from user to search out
  const [toAddRoom, setToAddRoom] = useState('false'); // thi is use to move to next page

  //console.log(props);
  // fetch user from api
  const url = 'api/users';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((user) => setUsers(user));
  }, []);

  // Add users in group list by using click
  const addUserInGroup = (e, id) => {
    users.filter((user) => {
      if (user.id === id) {
        setAddUsers([...addUsers, user]);
      }
    });
    //this is use to remove the item in list of user when click on user
    const getUser = users.filter((user) => user.id !== id);
    setUsers(getUser);
  }; //end of addUserInGroup function

  // this function is user to remove user from added group of user
  const onRemoveFromGroup = (id) => {
    const getUser = addUsers.filter((user) => user.id !== id);
    setAddUsers(getUser);

    // this is use to add the user to list of user from added user in group
    addUsers.filter((user) => {
      if (user.id == id) {
        setUsers([...users, user]);
      }
    });
  }; // end of Remove FromGroup function

  //onChangeInput function that will be props to AddNewRoomForm
  const onChangeInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  //searching fuction
  const search = () => {
    return users.filter(
      (user) => user.user_name.toLowerCase().indexOf(input) !== -1,
    );
  };

  //function to display and search in  list of user  that will be props to AddNewRoomForm
  const DiplayListOFUsers = () => {
    const userSearch = search();
    if (userSearch.length !== 0) {
      return userSearch.map((user) => (
        <div key={user.id} className="wraper">
          <img
            className="profile-img"
            key={user.id + 2}
            src={user.profile_image}
          />
          <div key={user.id + 3}>{user.user_name}</div>
          <div
            key={user.id + 4}
            className="plusSign"
            onClick={(e) => addUserInGroup(e, user.id)}
          >
            +
          </div>
        </div>
      ));
    }
  };

  // function to add user in group that will be props to AddNewRoomForm
  const displayUserInGroup = () => {
    if (addUsers.length !== 0) {
      return addUsers.map((user) => (
        <div className="selectedpeople-wraper" key={user.id + 1}>
          <img key={user.id + 2} src={user.profile_image} />
          <div key={user.id + 3}>{user.user_name}</div>
          <div className="xSign" onClick={() => onRemoveFromGroup(user.id)}>
            X
          </div>
        </div>
      ));
    }
  };

  //this  is function use to pass people to group component

  const nextToGroup = () => {
    if (addUsers.length !== 0) {
      setToAddRoom('true');
    }
  };

  return (
    <>
      {toAddRoom == 'true' ? (
        <AddNewRoom addUsers={addUsers} />
      ) : (
        <div>
          <AddPeopleToRoomForm
            DiplayListOFUsers={DiplayListOFUsers}
            displayUserInGroup={displayUserInGroup}
            users={users}
            addUsers={addUsers}
            onChangeInput={(e) => onChangeInput(e)}
            nextToGroup={nextToGroup}
          />
        </div>
      )}
    </>
  );
}
