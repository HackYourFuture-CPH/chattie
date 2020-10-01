import React from 'react';
import PropTypes from 'prop-types';

// Should lead to the chat-page instead of Home-page //

export const UserDetails = ({ user }) => {
  return (
    <div>
      <a className="userLinkInSearch" href={`/Home/${user}`}>
        {user}
      </a>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.string.isRequired,
};
