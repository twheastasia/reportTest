import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Report from './components/report';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/report" component={Report}/>
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
