import React from 'react';
import './FooterChatProfile.styles.css';
import { NavLink } from 'react-router-dom';

const FooterChatProfile = () => (
  <nav className="footer-chat-profile">
    <NavLink
      exact
      activeClassName="footer-link-active"
      className="footer-link"
      to="/Overview"
    >
      Chat
      <div
        activeclassname="footer-dot-active"
        className="footer-dot"
        to="/Overview"
      >
        {' '}
      </div>
    </NavLink>
    <NavLink
      activeClassName="footer-link-active"
      className="footer-link"
      to="/profile"
    >
      Profile
      <div
        activeclassname="footer-dot-active"
        className="footer-dot"
        to="/profile"
      >
        {' '}
      </div>
    </NavLink>
  </nav>
);

export default FooterChatProfile;
