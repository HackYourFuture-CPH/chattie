import React from 'react';
import PropTypes from 'prop-types';
import '../Search/Search.styles.css';

// Should lead to the chat-page instead of Home-page //

export const UserDetails = ({ user }) => {
  return <div className="search-name">{user}</div>;
};

UserDetails.propTypes = {
  user: PropTypes.string.isRequired,
};
