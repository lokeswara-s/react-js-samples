import React,{Component} from 'react';
import {
    connect
} from 'react-redux';

import UserList from '../Pages/Partials/About/UserList';
import { fetchContentAction, fetchContentSuccess } from '../Actions/ContentActions';

class About extends Component {

    componentDidMount(){
        this.props.fetchAllContent()
    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }
    
    render(){
        return(
            <div>
                <h1>About Page</h1>
                <UserList users = {this.props.content}/>
            </div>
        );
    }
}

function mapStateToProps(state){   
    console.log(state) 
    return{
        content: state.content.content,
    }
}

function mapDispatchToProps(dispatch, state){
    console.log(state)
    return{
        fetchAllContent:()=>{
            fetchContentAction()
            .then((success)=>{
                let content = (success && success.data && success.data.data && success.data.data) || [];
                dispatch(fetchContentSuccess(content), state)
            })
            .catch((error)=>{

            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)