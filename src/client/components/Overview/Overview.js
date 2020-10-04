import React from 'react';
import './Overview.styles.css';
import UserList from '../../containers/UserList/UserList';
import Search from '../Search/Search';
import RoomListOverview from '../RoomListOverview/RoomListOverview';
import PropTypes from 'prop-types';

function Overview(props) {
  return (
    <div className="overview">
      <h3 className="chat-title">Chats</h3>
      <div className="search">
        <Search />
      </div>
      <div className="room-list-overview">
        <RoomListOverview roomList={props.roomList} />
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

Overview.propTypes = {
  roomList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Overview;
