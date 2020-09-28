import React, {Component, Fragment} from 'react';

import DeleteUser from './deleteUser';
import ModifyUser from './modifyUser';

export default class RowUser extends Component{

  render(){
    return <Fragment>
        <tr>
            <td>{this.props.user.userId}</td>
            <td>{this.props.user.user}</td>
            <td>{this.props.user.firstname}</td>
            <td>{this.props.user.lastname}</td>
            <td>
                <ModifyUser user={this.props.user} modifyUser={this.props.modifyUser}/>
                <DeleteUser user={this.props.user} deleteUser={this.props.deleteUser}
                />
            </td>
        </tr>
    </Fragment>
  }
}