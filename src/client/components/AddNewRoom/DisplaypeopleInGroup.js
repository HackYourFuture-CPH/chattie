import React from 'react';
import PropTypes from 'prop-types';

function DisplaypeopleInGroup({ addedUsers }) {
  if (addedUsers !== 0) {
    return addedUsers.map((user) => (
      <div key={user.id} className="wraper-roomform">
        <img key={user.id + 1} src={user.profile_image} alt="users_image" />
        <div key={user.id + 2}>{user.user_name}</div>
      </div>
    ));
  }
}

DisplaypeopleInGroup.propTypes = {
  addedUsers: PropTypes.arrayOf(Object).isRequired,
};

export default DisplaypeopleInGroup;
