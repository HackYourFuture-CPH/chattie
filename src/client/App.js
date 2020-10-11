import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Overview from './components/Overview/Overview';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import Header from './components/NavigationHeader/NavigationHeader';
import Profile from './containers/Profile';
import Channel from './containers/Channel/Channel';
import Loader from './components/Loader/Loader';
import fetchWithAuth from './utils/fetchWithAuth';
import { UserContext } from './context/userContext';
import AddPeopleToRoom from './containers/AddPeopleToRoom/AddPeopleToRoom';
import ChannelInfo from './containers/ChannelInformationContainer/ChannelInfo';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState({});
  const { isAuthenticated, isLoading, user } = useAuthentication();

  useEffect(() => {
    const fetchUserFromDatabase = () => {
      try {
        const { uid } = user;
        const url = `/api/users/current/?uid=`;
        fetchWithAuth(`${url}${uid}`).then((userData) =>
          setCurrentUser(userData),
        );
      } catch (err) {
        setError(err);
      }
    };
    if (user) {
      fetchUserFromDatabase();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, user]);

  if (isLoading) return <Loader />;
  return (
    <UserContext.Provider value={currentUser}>
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <SignIn exact path="/sign-in" />
          <SignUp exact path="/sign-up" />
          <ResetPassword exact path="/reset-password" />
          <AuthenticatedRoute
            exact
            path="/profile"
            isAuthenticated={isAuthenticated}
          >
            <Profile />
          </AuthenticatedRoute>
          <Route exact path="/overview" isAuthenticated={isAuthenticated}>
            <Overview />
          </Route>
          <Route
            exact
            path="/channels/:channelId"
            isAuthenticated={isAuthenticated}
          >
            <Channel />
          </Route>
          <Route
            exact
            path="/channels/:id/about"
            // isAuthenticated={isAuthenticated}
          >
            <ChannelInfo />
          </Route>
        </Switch>
        <Route
          exact
          path="/add-people"
          component={AddPeopleToRoom}
          isAuthenticated={isAuthenticated}
        />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
