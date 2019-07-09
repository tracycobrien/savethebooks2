import React, { Component } from "react";
import { Jumbotron, Button } from 'react-bootstrap';
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

export default class Bookshelf extends Component {
    state = {}

    render() {
      return (
        <Jumbotron className={"background3"}>
          <h1 className={"outline-text"}>Please Scan a Book!</h1>
          <p>
            Lorem Ipsum
          </p>
          <p>
            <Button variant="primary" href="/">Home</Button>
          </p>
          <br></br>
          <p>
            <Button variant="primary" href="/">Home</Button>
          </p>
        </Jumbotron>
      )
    }
  }
  
  