import React from 'react';
import ChannelHeadNav from './ChannelHeadNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default { title: 'Channel head nav', component: ChannelHeadNav };
export const Component = () => (
  // if we call ChannelHeadNav in app we don't need to import router and switch
  <Router>
    <ChannelHeadNav
      channelName="2ndUserName"
      urlBack="/chat"
      imgUrl="https://loremflickr.com/320/240"
    />
    <Switch>
      <Route path="/chat">
        <h1>chat</h1>
      </Route>
    </Switch>
  </Router>
);
