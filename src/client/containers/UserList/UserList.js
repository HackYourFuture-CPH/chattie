import React, { useEffect, useState } from 'react';
import Userslist from '../../components/UsersListComponent/UsersList';
import '../../components/UsersListComponent/UsersListStyle.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const baseUrl = `/api/users`;
        const response = await fetch(baseUrl);
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        return <p>{error}</p>;
      }
    };
    fetchUsers();
  }, []);
  return <div>{users && <Userslist users={users} />}</div>;
};

export default UserList;
