import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main'

require('./styles/main.scss');

ReactDOM.render(
    <Main/>,
    document.getElementById('my-page')
);