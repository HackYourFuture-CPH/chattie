import React from 'react';
import './Overview.styles.css';
import UsersList from '../UsersListComponent/UsersList';
import Search from '../Search/Search';

function Overview({ users }) {
  return (
    <div className="overview">
      <h3 className="chat-title">Chats</h3>
      <div className="search">
        <Search />
      </div>
      <div className="users-list">
        <UsersList users={users} />
      </div>

      <div className="btn-and-profile">
        <a href="/profile">Profile</a>
        <a href="/chats">Chats</a>
      </div>
    </div>
  );
}

export default Overview;
