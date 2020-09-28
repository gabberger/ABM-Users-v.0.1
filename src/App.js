import React, {Component, Fragment} from 'react';

import uuid from 'react-uuid';
import Navbar from './components/navbar'
import NewUser from './components/newUser'
import TableUsers from './components/tableUsers'
import UserJson from './assets/samples.json'


export default class App extends Component{

  state = {
    users: UserJson,
    undoUsers: UserJson
  }

  modifyUser = (userId, user, firstname, lastname) => {
    
    this.setState({undoUsers:this.state.users})
    let newUsers = [];
    this.state.users.map(usermap => {
      if(userId === usermap.userId){
        console.log("en app")
        newUsers.push({
          userId: userId,
          user: user,
          firstname: firstname,
          lastname: lastname
        }) 
      }else{
        newUsers.push({
          userId: usermap.userId,
          user: usermap.user,
          firstname: usermap.firstname,
          lastname: usermap.lastname
        })
      }
      return user
    });
    console.log(newUsers)
    this.setState({users:newUsers})
  }

  deleteListUsers = () => {
    this.setState({undoUsers:this.state.users})
    this.setState({users: []})   
  }

  deleteUser = (userId) => {
    this.setState({undoUsers:this.state.users})
    const refreshUser = this.state.users.filter(user => user.userId !== userId);
    console.log(this.state.users);
    this.setState({users:refreshUser})
  }


  addUser = (user,firstname,lastname) => {
    this.setState({undoUsers:this.state.users})
    let newUser = {
    
        userId: uuid().split('',6),
        user: user,
        firstname: firstname,
        lastname: lastname
    }
   
    this.setState({users: [...this.state.users,newUser]})
  }

  undo = () => {
    this.setState({users:this.state.undoUsers})
  }

  render(){
    return <Fragment>
      <Navbar deleteListUsers={this.deleteListUsers} undo={this.undo}/>
      <NewUser newUser={this.addUser} />
      <TableUsers users={this.state.users} deleteUser={this.deleteUser} modifyUser={this.modifyUser}/>
    </Fragment>
  }
}