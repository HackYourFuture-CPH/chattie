import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SignUp({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handlePasswordConfirmInput = (e) => setPasswordConfirm(e.target.value);
  const handleImageInput = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile.size > 2048000) {
      // eslint-disable-next-line no-alert
      return alert('Your file is too big. Máx. file size 2Mb');
    }
    // Here you must return setProfileImage(HandleUploadImage(imageFile))
    // HandleUploadImage() must return a string with URL to the image from firebase
    return setProfileImage('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, passwordConfirm, profileImage });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email:{' '}
          <input
            type="email"
            name="email"
            placeholder="Write your email"
            value={email}
            onChange={handleEmailInput}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:{' '}
          <input
            type="password"
            name="password"
            placeholder="Write your password"
            value={password}
            onChange={handlePasswordInput}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password - confirm:{' '}
          <input
            type="password"
            name="password"
            placeholder="Write your password again"
            value={passwordConfirm}
            onChange={handlePasswordConfirmInput}
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="profileImage">
          Profile Image:{' '}
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            multiple={false}
            files={profileImage}
            onChange={handleImageInput}
            required
          />
        </label>
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
