import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
    <div>
        {
        routes.map((route, index) => 
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.components} />)
        }
    </div>
</Router>, document.getElementById('root'));

registerServiceWorker();