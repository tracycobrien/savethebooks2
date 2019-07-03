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
          This is an app that allow you to access a list of books I have already read! I also have a wish 
          list of books I would love to own. Thank you for visiting. 
        </p>
        <p>
        
          <Button variant="primary" href="/books" >Learn more</Button>
        
        </p>
      </Jumbotron>
    )
  }
}

