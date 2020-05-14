import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Repos from './components/Repos';

ReactDOM.render(
    (   //生成路由器 注册路由 所有路由都注册在这里
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path='/about' component={About}></Route>
                <Route path='/repos' component={Repos}></Route>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);