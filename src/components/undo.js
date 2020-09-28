import React, {Component, Fragment} from 'react';
import { Button } from 'react-bootstrap';


export default class Undo extends Component{


  render(){
    return <Fragment>
       <Button 
          onClick={this.props.undo}
          className="m-1 p-1 btn btn-outline-light"
       >
           Undo
       </Button>
    </Fragment>
  }
}