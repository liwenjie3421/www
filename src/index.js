import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import App from './app';
import Home from './components/home.react';
const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/404" component={Home} />
        </div>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();