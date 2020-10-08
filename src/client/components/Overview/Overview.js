import React from 'react';
import './Overview.styles.css';
import 'react-toastify/dist/ReactToastify.css';
import UserList from '../../containers/UserList/UserList';
import Search from '../Search/Search';
import { UserContext } from '../../context/userContext';
import { ToastContainer } from 'react-toastify';

function Overview() {
  return (
    <>
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Overview;
