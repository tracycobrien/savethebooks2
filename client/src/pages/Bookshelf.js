import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

export default class Welcome extends Component {
    state = {}
  
    render() {
      return (
        <Jumbotron>
          <h1>Please Scan a Book!</h1>
          <p>
            Lorem Ipsum
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
            
          </p>
        </Jumbotron>
      )
    }
  }
  
  