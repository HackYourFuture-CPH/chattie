import React, { useState, useEffect } from 'react';
import Userslist from '../UsersListComponent/UsersList';
import { OnStartChat } from './onStartChat';
import PropTypes from 'prop-types';
import fetchWithAuth from '../../utils/fetchWithAuth';
import Loader from '../Loader/Loader';
import Error from '../ErrorComponent/Error';

const baseUrl = `/api/users?userName=`;

async function getUserData(search) {
  const result = await fetchWithAuth(`${baseUrl}${encodeURIComponent(search)}`);
  return result;
}

export const Fetcher = ({ search }) => {
  const { user, onCreateConversation } = OnStartChat();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(search);
  const [error, setError] = useState('');
  const [noUserMatch, setNoUserMatch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await getUserData(search);

      setLoading(false);

      if (result.error) {
        setError(true);
      } else {
        setData(result.user);
        setError(false);
        setNoUserMatch(false);
      }

      if (result.length === 0) {
        setNoUserMatch(true);
      } else {
        setData(result);
        setError(false);
        setNoUserMatch(false);
      }
    };

    if (search !== '' && search.length >= 2) {
      getData();
    } else {
      setError(false);
      setData(false);
      setNoUserMatch(false);
    }
  }, [search]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (noUserMatch) {
    return <div className="user-details">No users found</div>;
  }

  return (
    <>
      {data && user && onCreateConversation && (
        <Userslist
          data={data}
          user={user}
          onCreateConversation={onCreateConversation}
        />
      )}
    </>
  );
};

Fetcher.propTypes = {
  search: PropTypes.string.isRequired,
};
