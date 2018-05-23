import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main, DefaultLayout } from './container/index';

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
