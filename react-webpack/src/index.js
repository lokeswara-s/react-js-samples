import React from 'react';

import ReactDOM from 'react-dom';

import Text from './Text';

const App = () => ( 
    <div>
        <h1> Hello world</h1> 
        <Text/>
    </div>
)


 
ReactDOM.render( <App/> , document.getElementById('root'));