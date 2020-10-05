import React from 'react';
import './AddPeopleToRoom.css';
import PropTypes from 'prop-types';

export default function AddPeopleToRoom({
  DiplayListOFUsers,
  displayUserInGroup,
  users,
  addUsers,
  onChangeInput,
  nextToGroup,
}) {
  return (
    <div className="container">
      <div className="header">
        <div className="list-name">
          <div>click on + to add people in room</div>
          <div>
            <span>
              {addUsers.length}/{users.length}
            </span>
          </div>
        </div>
      </div>

      <div className="inputsearch">
        <input type="text" placeholder="Search" onChange={onChangeInput} />
        <button type="button" className="next-button" onClick={nextToGroup}>
          Next
        </button>
      </div>

      <div className="add-people">{displayUserInGroup()}</div>

      <div className="list-people">{DiplayListOFUsers()}</div>
    </div>
  );
}
AddPeopleToRoom.propTypes = {
  DiplayListOFUsers: PropTypes.func.isRequired,
  displayUserInGroup: PropTypes.func.isRequired,
  users: PropTypes.objectOf.isRequired,
  addUsers: PropTypes.objectOf.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  nextToGroup: PropTypes.func.isRequired,
};
