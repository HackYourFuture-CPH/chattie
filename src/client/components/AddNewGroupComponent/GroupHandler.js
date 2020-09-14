import React, { useState } from 'react';
import AddNewGroup from './AddNewGroup';

const GroupHandler = (props) => {
  const [newGroup, setNewGroup] = useState('');
  const [addGroup, setaddGroup] = useState('');

  const onAddGroupName = (e) => {
    setNewGroup(e.target.value);
  };

  const ongroupdHandler = () => {
    setaddGroup(newGroup);
    setNewGroup('');
  };
  return (
    <AddNewGroup
      ongroupdHandler={ongroupdHandler}
      onAddGroupName={(e) => onAddGroupName(e)}
      newGroup={newGroup}
      addGroup={addGroup}
    />
  );
};
export default GroupHandler;
