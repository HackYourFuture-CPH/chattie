import React from 'react';
import PropTypes from 'prop-types';

function DisplaypeopleInGroup({ addUsers }) {
  if (addUsers !== 0) {
    return addUsers.map((user) => (
      <div key={user.id} className="wraper-roomform">
        <img key={user.id + 1} src={user.profile_image} alt="users_image" />
        <div key={user.id + 2}>{user.user_name}</div>
      </div>
    ));
  }
}

DisplaypeopleInGroup.propTypes = {
  addUsers: PropTypes.arrayOf(Object).isRequired,
};

export default DisplaypeopleInGroup;
