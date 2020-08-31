import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Components
import SearchPage from '../components/SearchPage';
import NotFoundPage from '../components/NotFoundPage';
import ResultsPage from '../components/ResultsPage';


export const history = require('history').createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={SearchPage} exact={true}/>
        <Route path='/results' component={ResultsPage} exact={true} />
        <Route component={NotFoundPage} />
        
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
