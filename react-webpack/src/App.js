import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home=()=>{
    console.log("E")
    return (<div>Home page</div>)
}

class App extends Component{
    render(){
        return(
        <div>
            <Link to="/home">Home</Link>
                <Switch>                
                <Route exact path="/home" component={Home}/>
            </Switch>        
        </div>
        )
    }
}

export default App;