import React, { Component } from 'react';

class UserList extends Component{
    
    render(){
        const {
            users
        } = this.props;
        return(
            <div>
                <ul>
                {
                    users && users.map((user, index) => {
                        return(
                            <li key={index}>{user.first_name}</li>
                        );
                    })
                }
                </ul>
            </div>
        )
    }
}

export default UserList;