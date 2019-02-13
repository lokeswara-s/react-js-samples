import React,{Component} from 'react';
import {
     Switch,
     Route
 } from 'react-router-dom'

import Home from '../Pages/Home';
import About from '../Pages/About';

class Header extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
            </Switch>
        );
    }
}

export default Header;