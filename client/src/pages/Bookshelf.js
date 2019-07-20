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
    // let key = "AIzaSyBeth1u6CHkSrc6U-ZgJrOUQ5YAiDKp-ko";
    let key = process.env.KEY;
    const url = (`https://www.googleapis.com/books/v1/volumes?key${key}&q=isbn:${result.codeResult.code}`)
	    axios.get(url).then(res => {
      this.setState({ bookData: res.data.items })
    })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    console.log('tada')
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
            {this.state.bookData ? "Your Scanned Book" : null}
          </p>
          {this.state.bookData ? <img src={this.state.bookData[0].volumeInfo.imageLinks.thumbnail} /> : null}
          <br></br>
   
          <br></br>
          <p>
            <Button variant="primary" href="/">Home</Button>
          </p>
        </Jumbotron>
        <div className={`col-12 ${this.state.quagga === false ? "d-none" : null}`} id="play">
            <video muted autoplay></video>
          </div>
        <button onClick={this.stopQuagga}>
          {this.state.quagga ? "stop" : "start"}
        </button>
      </div>

    )
  }
}


export default Bookshelf