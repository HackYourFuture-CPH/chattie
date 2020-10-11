import React from 'react';
import './Overview.styles.css';
import UserList from '../../containers/UserList/UserList';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import Error from '../ErrorComponent/Error';
import Search from '../Search/Search';
import RoomListOverview from '../RoomListOverview/RoomListOverview';
import { UserContext } from '../../context/userContext';
import FooterChatProfile from '../footerChatProfile/FooterChatProfile';

function Overview() {
  const { response: roomList, loading, error } = useFetch(`/api/channels`);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <UserContext.Consumer>
      {(user) => {
        // eslint-disable-next-line no-console
        console.log(user);
        return (
          <div className="overview">
            <h3 className="chat-title">Chats</h3>

            <div className="search">
              <Search />
            </div>

            <div className="room-list-overview">
              <RoomListOverview roomList={roomList || []} />
            </div>

            <div className="users-list">
              <UserList />
            </div>

            <FooterChatProfile />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Overview;
