import React from 'react';
import './Overview.styles.css';
import UserList from '../../containers/UserList/UserList';
import Search from '../Search/Search';
import { UserContext } from '../../context/userContext';

function Overview() {
  return (
    <UserContext.Consumer>
      {(user) => {
        const { uid, email, displayName } = user;
        console.log(user);
        return (
          <div className="overview">
            <h3 className="chat-title">Chats</h3>
            <div className="user-details">
              <ul>
                <li>User ID: {uid}</li>
                <li>Email: {email}</li>
                <li>User Name: {displayName}</li>
              </ul>
            </div>

            <div className="search">
              <Search />
            </div>
            <div className="users-list">
              <UserList />
            </div>
            <div className="btn-and-profile">
              <a href="/profile">Profile</a>
              <a href="/chats">Chats</a>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Overview;
