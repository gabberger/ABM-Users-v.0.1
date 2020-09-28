import React, {Component, Fragment} from 'react';
import { Button } from 'react-bootstrap';


export default class DeleteListUsers extends Component{


  render(){
    return <Fragment>
       <Button 
          onClick={this.props.deleteListUsers }
          className="m-1 p-1 btn btn-outline-light"
       >
           Delete List
       </Button>
    </Fragment>
  }
}