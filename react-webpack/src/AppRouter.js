import React, {Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Index from './Root.js';
import About from './About.js';
import Users from './Users.js';


const AppRouter = () => (
  <Router>
      <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about/">About</Link>
           </li>
           <li>
             <Link to="/users/">Users</Link>
           </li>
         </ul>
       </nav>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      </Router>
);

export default AppRouter;
