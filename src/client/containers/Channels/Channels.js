import React from 'react';
import RoomList from '../../components/RoomList/RoomList';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorComponent/Error';

const Channels = () => {
  const { response: roomList, loading, error } = useFetch(`/api/channels`);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return <>{roomList && <RoomList roomList={roomList} />}</>;
};
export default Channels;
