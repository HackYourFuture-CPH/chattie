import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignIn.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

export default function SignIn({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <>
      <div className="sign-in-icon">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
      </div>

      <div className="sign-in">
        <div className="sign-in-title">
          <h3>Sign In</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signin-inputs">
            <div className="sign-in-email">
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailInput}
                  required
                />
              </label>
            </div>
            <div className="sign-in-password">
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordInput}
                  required
                />
              </label>
            </div>
          </div>
          <div>
            <button className="sign-in-button" type="submit">
              Sign in
            </button>
          </div>
          <div>
            <button
              className="sign-in-button-test-user"
              type="submit"
              onClick={() => {
                setEmail('test-user1@testdomain.com');
                setPassword('User1@123');
              }}
            >
              Sign in as Test User1
            </button>
          </div>
          <div>
            <button
              className="sign-in-button-test-user"
              type="submit"
              onClick={() => {
                setEmail('test-user2@testdomain.com');
                setPassword('User2@123');
              }}
            >
              Sign in as Test User2
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
