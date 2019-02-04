import React from 'react';

import ReactDOM from 'react-dom';

import Text from './Text';
import App from './App';
import {
    BrowserRouter as Router,
} from "react-router-dom";




ReactDOM.render( <Router>
  <App/>
</Router>, document.getElementById('root'));
