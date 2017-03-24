import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from './components/Main';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';

require('./styles/main.scss');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
            <IndexRoute component={Home}></IndexRoute>
        </Route>
    </Router>,
    document.getElementById('my-page')
);