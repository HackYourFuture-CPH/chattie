import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Error from './Error';

export default { title: 'Error', decorators: [withKnobs] };

export const Component = () => (
  <Router>
    <Error />
    <Route path="/home">
      <h1>Home</h1>
    </Route>
  </Router>
);
