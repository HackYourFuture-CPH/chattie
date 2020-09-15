import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Overview.styles.css';
import Profile from '../../containers/Profile/index';
// import UsersList from '../UsersListComponent/UsersList';

import OverviewSearchMessagesBtn from './OverviewSearchMessagesBtn';

function Overview() {
  return (
    <div className="overview">
      <h3 className="chatTitle">Chats</h3>
      <div className="btnAndProfile">
        <Router>
          <Link to="/profile">Profile</Link>
          <Switch>
            {/* <Route>
              <UsersList />
            </Route> */}
            <Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <OverviewSearchMessagesBtn />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Overview;
