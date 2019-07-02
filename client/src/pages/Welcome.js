import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Welcome extends Component {
  state = {}

  render() {
    return (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    )
  }
}

