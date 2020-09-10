import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AddNewGroup from './AddNewGroup';

const GroupHandler = () => {
  const [newGroup, setNewGroup] = useState('');
  const [addGroup, setaddGroup] = useState('');

  const AddGroupName = (groupName) => {
    setNewGroup(groupName.target.value);
  };

  const groupdHandler = () => {
    setaddGroup(newGroup);
    setNewGroup('');
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/channel"
            render={() => (
              <AddNewGroup
                AddGroupName={(groupName) => AddGroupName(groupName)}
                groupdHandler={() => groupdHandler()}
                addGroup={addGroup}
                newGroup={newGroup}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default GroupHandler;
