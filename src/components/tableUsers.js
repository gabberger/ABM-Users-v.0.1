import React, {Component, Fragment} from 'react';

import RowUser from './rowUser'

export default class TableUsers extends Component{

  render(){
    return <Fragment>
       <table className="table table-striped mt-5">
        <thead>
            <tr>
            <th scope="col">User ID</th>
            <th scope="col">User</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {this.props.users.map(user => <RowUser 
                                            user={user}
                                            modifyUser={this.props.modifyUser}
                                            deleteUser={this.props.deleteUser}
                                            key={user.userId}
                                          />)}
       
        </tbody>
       </table>
    </Fragment>
  }
}