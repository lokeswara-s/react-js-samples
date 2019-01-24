import React, {Component } from 'react';

class Text extends Component{
    // state = {
    //     something:""
    // }

    constructor(props){
        super(props);
        this.state = {
            something:"Hellod world",
            someArray:[
                0,1,2,3,4
            ]
        }
    }

    doSomething(){
        console.log(this)
    }
    render(){
        const func = this.doSomething;
        return(
            <div>
                <button onClick={()=>{
                    this.doSomething()
                }}>
                Click
                </button>
                <h1>{this.state.something}</h1>
            </div>
        );
    }
}

export default Text;