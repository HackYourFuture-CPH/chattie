import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signOut } from '../../firebase/auth';

export default function NavigationHeader({ isAuthenticated = false }) {
  if (isAuthenticated) {
    return (
      <nav className="header-profile">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/channel">Chats</Link>
          </li>
          <li>
            <Link to="/channels">Channels</Link>
          </li>
          <li>
            <button type="button" onClick={signOut}>
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign in</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign up</Link>
        </li>
        <li>
          <Link to="/reset-password">Reset password</Link>
        </li>
      </ul>
    </nav>
  );
}

NavigationHeader.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
