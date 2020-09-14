import React from 'react';
import PropTypes from 'prop-types';

import './AddNewGroupStyle.css';

const AddNewGroup = (props) => {
  let groupname = '';

  if (props.addGroup) {
    groupname = (
      <div className="g-name">
        <h3>Group name</h3>
        <div>{props.addGroup}</div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="wraper">
        <div className="add-group">
          <button type="button" onClick={props.ongroupdHandler}>
            AddGroup
          </button>
          <input
            type="text"
            value={props.newGroup}
            placeholder="Add new group"
            onChange={props.onAddGroupName}
          />
          {groupname}
        </div>
      </div>
    </div>
  );
};
AddNewGroup.propTypes = {
  addGroup: PropTypes.string.isRequired,
  ongroupdHandler: PropTypes.func.isRequired,
  newGroup: PropTypes.string.isRequired,
  onAddGroupName: PropTypes.func.isRequired,
};
export default AddNewGroup;
