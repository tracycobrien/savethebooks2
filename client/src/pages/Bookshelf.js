import React, { Component } from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import axios from "axios";
import Quagga from 'quagga';
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

class Bookshelf extends Component {
  state = {
    bookData: null
  }

  detected = (result) => {
    console.log(result.codeResult.code)
    const url = (`https://www.googleapis.com/books/v1/volumes?key=AIzaSyCzt_wRd5OmMNI45huGUVaz9sVqZ0-DIUE&q=isbn:${9780062871855}`)
    axios.get(url).then(res => {
      this.setState({bookData: res.data.items})
    })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    const url = ("https://www.googleapis.com/books/v1/volumes?q=isbn:9780545581608")
    axios.get(url).then(res => {
      console.log(res.data.items)
    })
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#play')    // Or '#yourElement' (optional)
      },
      decoder: {
        readers: ["ean_reader"]
      }
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    });
    Quagga.onDetected((result) => { this.detected(result) })
  }

  stopQuagga = () => {
    if (this.state.quagga) {
      this.setState({ quagga: false })
      Quagga.stop()
    } else if (this.state.quagga === false) {
      this.setState({ quagga: true })
      Quagga.start()
    }
  }

  componentWillUnmount() {
    Quagga.stop();
    Quagga.offDetected(() => {
      console.log("stopped!")
    });
  }

  render() {
    return (
      <div>
        <Jumbotron className={"background3"}>
          <h1 className={"outline-text"}>Please Scan a Book!</h1>
          <p>
            {this.state.bookData ? "Your Scaned Book" : null}
          </p>
          {this.state.bookData ? <img src={this.state.bookData[0].volumeInfo.imageLinks.thumbnail}/> : null}
          <br></br>
          <p>
            <Button variant="primary" href="/">Home</Button>
          </p>
        </Jumbotron>
        <button onClick={this.stopQuagga}>
          {this.state.quagga ? "stop" : "start"}
        </button>
      </div>

    )
  }
}


export default Bookshelf