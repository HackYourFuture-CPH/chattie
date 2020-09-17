import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Overview.styles.css';
import Profile from '../../containers/Profile/index';
import UsersList from '../UsersListComponent/UsersList';
import Search from '../Search/Search';

function Overview() {
  return (
    <div className="overview">
      <h3 className="chatTitle">Chats</h3>
      <Search />
      <UsersList />
      <div className="btn-and-profile">
        <Router>
          <Link to="/profile">Profile</Link>
          <Switch>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
        <h3 className="chatTitle">Chats</h3>
      </div>
    </div>
  );
}

export default Overview;
