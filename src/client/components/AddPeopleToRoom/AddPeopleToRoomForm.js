import React from 'react';
import { Link } from 'react-router-dom';
import './AddPeopleToRoom.css';
import PropTypes from 'prop-types';
import DisplayUserInGroup from './DisplayUserInGroup';
import DiplayListOFUsers from './DiplayListOFUsers';

export default function AddPeopleToRoom({
  onRemoveFromGroup,
  users,
  input,
  renderUserInGroup,
  addedUsers,
  onSearch,
  onNext,
}) {
  const isUserAdded = (id) =>
    Boolean(addedUsers.find((user) => user.id === id));
  const users2 = users.map((user) => ({
    ...user,
    isAddedUser: isUserAdded(user.id),
  }));
  return (
    <div className="container">
      <div className="header-search-container">
        <div className="header">
          <Link to="/overview" className="next-cancel-button">
            Cancel
          </Link>
          <div className="list-name">
            <div className="font-bold">Add people</div>
            <span>
              {addedUsers.length}/{users.length}
            </span>
          </div>
          <div
            role="presentation"
            className="next-cancel-button"
            onClick={onNext}
          >
            Next
          </div>
        </div>
        <div className="input-search">
          <input type="text" placeholder="Search" onChange={onSearch} />
        </div>
      </div>
      <div className="add-people">
        <DisplayUserInGroup
          addedUsers={addedUsers}
          onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
        />
      </div>
      <div className="list-people">
        <DiplayListOFUsers
          users={users2}
          input={input}
          renderUserInGroup={(id) => renderUserInGroup(id)}
          onRemoveFromGroup={(id) => onRemoveFromGroup(id)}
        />
      </div>
    </div>
  );
}

AddPeopleToRoom.propTypes = {
  onRemoveFromGroup: PropTypes.func.isRequired,
  addedUsers: PropTypes.arrayOf(Object).isRequired,
  users: PropTypes.arrayOf(Object).isRequired,
  renderUserInGroup: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
