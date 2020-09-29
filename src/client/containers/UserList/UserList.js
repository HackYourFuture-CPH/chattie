import React from 'react';
import Userslist from '../../components/UsersListComponent/UsersList';
import '../../components/UsersListComponent/UsersListStyle.css';
import useFetch from '../../hooks/useFetch';

const UserList = () => {
  const { response: users, loading, error } = useFetch(`/api/users`);

  if (loading) {
    return <>Loading..., please wait!</>;
  }

  if (error) {
    return <>An error has occurred ☹️</>;
  }
  return <div>{users && <Userslist users={users} />}</div>;
};

export default UserList;
