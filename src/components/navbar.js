import React, {Component} from 'react';

// import Signin from './signin'
// import Signup from './signup'
import DeleteListUsers from './deleteListUsers'
import Undo from './undo'


export default class Navbar extends Component{

  render(){
    return <div className="navbar navbar-info bg-info box-shadow shadow sticky-top d-flex justify-content-start">
                        <div className="nav-brand text-dark mr-5">
                            My new user app
                        </div>
                        <div>
                            {/* <Signin/>
                            <Signup/> */}
                            <DeleteListUsers deleteListUsers={this.props.deleteListUsers}/>
                            <Undo undo={this.props.undo}/>
                        </div>
    </div>
  }
}