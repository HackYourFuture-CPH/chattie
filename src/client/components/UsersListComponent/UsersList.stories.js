import React from 'react';
import Userslist from './UsersList';

export default {
  title: 'user list',

  component: Userslist,
};

const people = [
  { id: 1, name: 'tariq' },
  { id: 2, name: 'javid' },
  { id: 3, name: 'peter' },
  { id: 4, name: 'jhon' },
];
export const userList = () => <Userslist people={people} />;
