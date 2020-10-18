import React, { useContext } from 'react';
import './Overview.styles.css';
import 'react-toastify/dist/ReactToastify.css';
import LastChannelsMessageList from '../../containers/LastMessagesList/index';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import Error from '../ErrorComponent/Error';
import Search from '../Search/Search';
import RoomListOverview from '../RoomListOverview/RoomListOverview';
import { UserContext } from '../../context/userContext';
import { ToastContainer } from 'react-toastify';
import FooterChatProfile from '../footerChatProfile/FooterChatProfile';

function Overview() {
  const user = useContext(UserContext);
  const { response: roomList, loading, error } = useFetch(`/api/channels`);
  if (loading || !user) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <div className="overview">
        <h3 className="chat-title">Chats</h3>
        <div className="search">
          <Search />
        </div>
        <div className="room-list-overview">
          <RoomListOverview roomList={roomList || []} />
        </div>
        <div className="new-messages-list-overview">
          <LastChannelsMessageList userId={user.id} />
        </div>
        <FooterChatProfile />
      </div>
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
