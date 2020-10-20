import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Index';
import Opportunities from '../pages/Opportunities/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/opportunities/:email/:name" component={Opportunities} />
  </Switch>
);

export default Routes;