import React from 'react';
import RoomList from '../../components/RoomList/RoomList';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorComponent/Error';

const Channels = () => {
  const { response: channels, loading, error } = useFetch(`/api/channels`);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return <>{channels && RoomList(<RoomList roomList={channels} />)}</>;
};

export default Channels;
