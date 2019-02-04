import React from 'react';

class ClassComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      someValue :""
    }
  }


  doSomething=()=>{
    this.props.history.push('messages');
    console.log(this.props)
    // this.setState({
    //   someValue:Math.random()
    // })
  }


  render(){
    return (
      <div>
      <h1>{this.state.someValue}</h1>
      <button onClick={()=>{
        this.doSomething()
      }}>Navigate to Messages</button>
      </div>
    )

  }

}

export default ClassComponent;
