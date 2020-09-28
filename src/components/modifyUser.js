import React, {Component, Fragment} from 'react';
import { Button, Modal, ModalTitle, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


export default class ModifyUser extends Component{

  state = {
      isOpen: false,
 
  }



  onSubmit = (event) => {
    event.preventDefault();  

    let user1 = document.getElementById("user1").value;
    if(user1 === ""){user1 = this.props.user.user}

    let firstname1 = document.getElementById("firstname1").value;
    if(firstname1 === ""){firstname1 = this.props.user.firstname}

    let lastname1 = document.getElementById("lastname1").value;
    if(lastname1 === ""){lastname1 = this.props.user.lastname}
    
    this.props.modifyUser(this.props.user.userId, user1, firstname1, lastname1)    
    this.setState({isOpen: !this.state.isOpen})
 }

  changeShow = () => {
      this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    return <Fragment>

         <Button 
            onClick={this.changeShow}
            className="btn "
        >
            <svg height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
        </Button>

        <Modal show={this.state.isOpen}>
            <ModalHeader className="bg-light">
                <ModalTitle className="text-muted">Modify User</ModalTitle>
                <button 
                        onClick={this.changeShow}
                        className="btn btn-outline-danger m-2"
                        id="cancel"
                    >
                        X
                </button>
            </ModalHeader>

            <ModalBody>
                <form 
                    className="form-group"
                    onSubmit={this.onSubmit}
                >
                    <label>User:</label>
                    <input
                        className="form-control" 
                        id="user1"
                        placeholder={this.props.user.user}
                    >
                    </input>
                    <label>First Name:</label>
                    <input 
                        className="form-control" 
                        id="firstname1"
                        placeholder={this.props.user.firstname}
                    >
                    </input>
                    <label>Last Name:</label>
                    <input 
                        className="form-control" 
                        id="lastname1"
                        placeholder={this.props.user.lastname}
                    ></input>
                    <hr></hr>
                    <button
                        id="confirm"
                        className="btn btn-outline-info mt-1"
                    >
                        Confirm
                    </button>
                </form>

            </ModalBody>


        </Modal>


    </Fragment>
  }
}