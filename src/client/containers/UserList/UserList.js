import React from 'react';
import Userslist from '../../components/UsersListComponent/UsersList';
import { OnStartChat } from './onStartChat';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorComponent/Error';

const UserList = () => {
  const { user, onCreateConversation } = OnStartChat();
  const { response: users, loading, error } = useFetch(`/api/users`);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error> Error! could not get users</Error>;
  }
  return (
    <>
      {users && user && onCreateConversation && (
        <Userslist
          users={users}
          user={user}
          onCreateConversation={onCreateConversation}
        />
      )}
    </>
  );
};

export default UserList;
