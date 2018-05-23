import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main, DefaultLayout } from './container/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route render={() => 
          <React.Fragment>
            <DefaultLayout/>
            <Switch>
              <Route path="/main" component={Main} exact />
              <Route path="/" component={Main} exact />
            </Switch>
          </React.Fragment> 
        } />
      </Switch>
  </Router>
, document.getElementById('root'));
