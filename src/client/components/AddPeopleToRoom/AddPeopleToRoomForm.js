import React from 'react';
import './AddPeopleToRoom.css';
import PropTypes from 'prop-types';
import DisplayUserInGroup from './DisplayUserInGroup';
import DiplayListOFUsers from './DiplayListOFUsers';

export default function AddPeopleToRoom({
  onRemoveFromGroup,
  users,
  input,
  addUserInGroup,
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

      <div className="input-search">
        <input
          type="text"
          placeholder="Search for user"
          onChange={onChangeInput}
        />
        <button type="button" className="next-button" onClick={nextToGroup}>
          Next
        </button>
      </div>

      <div className="add-people">
        <DisplayUserInGroup
          addUsers={addUsers}
          onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
        />
      </div>
      <div className="list-people">
        <DiplayListOFUsers
          users={users}
          input={input}
          addUserInGroup={(id) => addUserInGroup(id)}
        />
      </div>
    </div>
  );
}

AddPeopleToRoom.propTypes = {
  onRemoveFromGroup: PropTypes.func.isRequired,
  addUsers: PropTypes.arrayOf(Object).isRequired,
  users: PropTypes.arrayOf(Object).isRequired,
  addUserInGroup: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  nextToGroup: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
