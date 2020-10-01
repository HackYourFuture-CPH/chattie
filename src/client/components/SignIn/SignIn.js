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
    <div>
      <div className="signIn-icon-title">
        <div className="signIn-icon">
          <Link to="/">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
        </div>
        <div className="signIn-title">
          <h3>Sign In</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="signIn">
          <div className="signIn-inputs">
            <div className="signIn-email">
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
            <div className="signIn-password">
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
            <button className="signIn-button" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
