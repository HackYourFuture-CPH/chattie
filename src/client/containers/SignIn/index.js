import React, { useState } from 'react';
import { signIn } from '../../firebase/auth';
import SignIn from '../../components/SignIn/SignIn';
import Loader from '../../components/Loader/Loader';
import fetchWithAuth from '../../utils/fetchWithAuth';

export default function SignInContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    const {
      user: { uid },
    } = await signIn({ email, password });
    await fetchWithAuth(`/api/users/confirm`, {
      method: 'post',
      body: JSON.stringify({
        uid,
        email,
      }),
    });
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  return <SignIn onSubmit={onSubmit} />;
}
