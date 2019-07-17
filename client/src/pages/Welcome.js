import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
// import Button, {ButtonProps} from "material-ui/Button";



export default class Welcome extends Component {
  state = {}

  render() {
    return (
      <Jumbotron>
        <h1>Please Enter!</h1>
        <p>
          This is an app that allow you to access a list of books Brooks' has read! I also have a wish 
          list of books he would love to own. Thank you for visiting. 
        </p>
        <p>
        
          <Button variant="primary" href="/books" >Enter</Button>
        
        </p>
      </Jumbotron>
    )
  }
}

