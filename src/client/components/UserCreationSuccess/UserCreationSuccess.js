/* eslint-disable no-alert */
import React from 'react';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

export default function UserCreationSuccess() {
  toast.success('Your account was successfully created');
  return (
    <>
      <Redirect to="/overview" />
    </>
  );
}

UserCreationSuccess.propTypes = {};
