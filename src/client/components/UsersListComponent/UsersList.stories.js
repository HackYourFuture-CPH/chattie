import React from 'react';
import Userslist from './UsersList';

export default {
  title: 'user list',

  component: Userslist,
};

const people = [
  { id: 1, user_name: 'tariq' },
  { id: 2, user_name: 'javid' },
  { id: 3, user_name: 'peter' },
  { id: 4, user_name: 'jhon' },
];
export const userList = () => <Userslist users={people} />;
