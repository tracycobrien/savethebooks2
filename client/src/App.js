import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Bookshelf from "./pages/Bookshelf";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer"
import axios from "axios"
import Quagga from 'quagga';

axios.get("// https://www.googleapis.com/books/v1/volumes?q=isbn:9781338208740")
.then(res=>{
  console.log(res)
})
.catch(err=>{
  console.log("===================",err)
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quagga: true,
    }
  }

  componentDidMount() {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#play')    // Or '#yourElement' (optional)
      },
      decoder: {
        readers: ["code_128_reader"]
      }
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    });
  }

  stopQuagga = () => {
    if(this.state.quagga){
      this.setState({ quagga: false })
      Quagga.stop()
    }else if(this.state.quagga === false){
      this.setState({ quagga: true })
      Quagga.start()
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/bookshelf" component={Bookshelf} />
            <Route component={NoMatch} />
          </Switch>
          <div className={`col-12 ${this.state.quagga === false ?  "d-none" : null}`} id="play">
            <video muted autoplay></video>
          </div>
          <button onClick={this.stopQuagga}>
            {this.state.quagga ? "stop" : "start"}
          </button>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
