import React, { useState } from 'react';
import { signUp } from '../../firebase/auth';
import UserCreationSuccess from '../../components/UserCreationSuccess/UserCreationSuccess';
import SignUp from '../../components/SignUp/SignUp';
import Loader from '../../components/Loader/Loader';
import fetchWithAuth from '../../utils/fetchWithAuth';

const getDoesPasswordsMatch = ({ password, passwordConfirm }) =>
  password === passwordConfirm;

export default function SignUpContainer() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({
    email,
    password,
    passwordConfirm,
    url,
    name,
    role,
    phone,
  }) => {
    setIsLoading(true);
    const doesPasswordsMatch = getDoesPasswordsMatch({
      password,
      passwordConfirm,
    });
    if (!doesPasswordsMatch) {
      setIsLoading(false);
      // eslint-disable-next-line no-alert
      alert("Passwords doesn't match");
      return;
    }
    const response = await signUp({
      email,
      password,
      passwordConfirm,
      url,
      name,
      role,
      phone,
    });
    if (response) {
      try {
        await fetchWithAuth('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uid: response.user.uid,
            email,
            // eslint-disable-next-line @typescript-eslint/camelcase
            profileImage: url,
            // eslint-disable-next-line @typescript-eslint/camelcase
            userName: name,
          }),
        });
        setIsSuccessful(true);
      } catch {
        // ignore for now
      }
    }
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  if (isSuccessful) return <UserCreationSuccess />;
  return <SignUp onSubmit={onSubmit} />;
}
