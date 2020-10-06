/* eslint-disable no-alert */
import React from 'react';
import { Redirect } from 'react-router-dom';

export default function UserCreationSuccess() {
  alert('Your account was successfully created');
  return <Redirect to="/overview" />;
}

UserCreationSuccess.propTypes = {};
