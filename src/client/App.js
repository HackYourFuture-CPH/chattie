import React from 'react';
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
import { UserContext } from './context/userContext';
import OverviewChannels from './components/OverviewChannels/OverviewChannels';
import { RenderChannelInformation } from './components/ChannelInformation/ChannelInnformation';

function App() {
  const { isAuthenticated, isLoading, user } = useAuthentication();
  const loginUser =
    user === null
      ? {}
      : {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        };

  if (isLoading) return <Loader />;

  return (
    <UserContext.Provider value={loginUser}>
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
          <Route exact path="/overview">
            <Overview />
          </Route>
          <Route
            exact
            path="/channels/:channelId"
            isAuthenticated={isAuthenticated}
          >
            <Channel />
          </Route>
          <Route exact path="/overview/:id" component={OverviewChannels} />
          <Route
            exact
            path="/channels/:id/about"
            isAuthenticated={isAuthenticated}
          >
            <RenderChannelInformation />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
