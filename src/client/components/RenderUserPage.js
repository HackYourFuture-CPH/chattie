/* eslint-disable react/prop-types */
import React from 'react';

// Should lead to the chat-page instead of Home-page //

export const RenderUserPage = ({ user }) => {
  return (
    <div>
      <a className="userLinkInSearch" href={`/Home/${user.login}`}>
        {user.login}
      </a>
    </div>
  );
};
