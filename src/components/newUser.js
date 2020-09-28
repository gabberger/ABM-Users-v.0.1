import React, {Component} from 'react';



export default class newUser extends Component{

  onSubmit = (event) =>{
    event.preventDefault();
    const user = document.getElementById("user").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    this.props.newUser(user,firstname,lastname);
    document.getElementById("user").value = '';
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';

  }


  render(){
    return  <div className="col-md-4 m-1 ">
        <div className="card">
            <div className="card-header bg-info">
                <h2 className="h6 card-title">New User</h2>
            </div>

            <form
                onSubmit={this.onSubmit}
            >
            <div className="card-body">
                <div className="form-group">
                    <input className="form-control" placeholder="Insert an user" id="user"></input>
                    <input className="form-control" placeholder="Insert a first name"  id="firstname"></input>
                    <input className="form-control" placeholder="Insert a last name"  id="lastname"></input>
                </div>
                <button className="btn btn-outline-info btn-block">Insert</button>
            </div>
            </form>
        </div>            
    </div>
  }
}