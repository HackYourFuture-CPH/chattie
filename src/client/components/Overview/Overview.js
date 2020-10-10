import React from 'react';
import './Overview.styles.css';
import UserList from '../../containers/UserList/UserList';
import LastChannelsMessageList from '../../containers/LastMessagesList/index';
import Search from '../Search/Search';
import RoomListOverview from '../RoomListOverview/RoomListOverview';
import { UserContext } from '../../context/userContext';

function Overview() {
  return (
    <UserContext.Consumer>
      {(user) => {
        if (user) {
          const { uid, userName, email } = user;
          return (
            <div className="overview">
              <h3 className="chat-title">Chats</h3>
              <div className="user-details">
                <ul>
                  <li>User ID: {uid}</li>
                  <li>Email: {email}</li>
                  <li>User Name: {userName}</li>
                </ul>
              </div>

              <div className="search">
                <Search />
              </div>
              <div className="room-list-overview">
                <RoomListOverview roomList={[]} />
              </div>
              <LastChannelsMessageList />
              <div className="users-list">
                <UserList />
              </div>
              <div className="btn-and-profile">
                <a href="/profile">Profile</a>
                <a href="/chats">Chats</a>
              </div>
            </div>
          );
        }
      }}
    </UserContext.Consumer>
  );
}

export default Overview;
