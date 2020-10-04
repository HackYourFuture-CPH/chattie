import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid';

export default function SignUp({ onSubmit }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handleNameInput = (e) => setName(e.target.value);
  const handleRoleInput = (e) => setRole(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handlePasswordConfirmInput = (e) => setPasswordConfirm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, role, email, phone, password,passwordConfirm });
  };
  return (
    <div>
      <FontAwesomeIcon icon={faAngleLeft} className="return-icon" />
      <h3>Sign Up</h3>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameInput}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Your role"
          value={role}
          onChange={handleRoleInput}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={handleEmailInput}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number eg:12345678"
          value={phone}
          pattern="[0-9]{8}"
          onChange={handlePhoneInput}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordInput}
          required
        />
         <input
          type="password"
          name="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={handlePasswordConfirmInput}
          required
        />
        <div className="sign-up-button">
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

