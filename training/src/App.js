import React, {Component} from 'react';

import Header from './Sections/Header';
import Body from './Sections/Body';

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}

export default App