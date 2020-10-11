import React, { useEffect, useState } from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import RoomList from '../../components/EditRoom/RoomList';
import RoomItemView from '../../components/EditRoom/RoomItemView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RoomItemEdit from '../../components/EditRoom/RoomItemEdit';

const RoomListPage = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const url = `/api/channels`;
        const resultedChannels = await fetchWithAuth(url);
        setChannels(resultedChannels);
      } catch (err) {
        return <p>{err}</p>;
      }
    };
    fetchChannels();
  }, []);

  if (channels)
    return (
      <Router>
        <>
          <Route
            exact
            path="/channels"
            render={(routerProps) => <RoomList channels={channels} />}
          />
          <Route
            exact
            path="/channels/:id"
            component={() => <RoomItemView channels={channels} />}
          />
          <Route exact path="/channels/:id/edit" component={RoomItemEdit} />
        </>
      </Router>
    );
};
export default RoomListPage;
