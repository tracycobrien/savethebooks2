import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import Quagga from 'quagga';
import BookShelf from "./pages/Bookshelf"
// import NoMatch from './pages/NoMatch'


// const App = () => (
//   <Router>
//     <div>
//       <Nav/>
//       <Switch>
//         <Route exact path="/" component={Search}/>
//         <Route exact path="/search" component={Search}/>
//         <Route exact path="/books" component={Books}/>
//         <Route component={NoMatch}/>
//       </Switch>
//     </div>
//   </Router>
// );

// export default App;
// // Dummy Url.
// const url = ("// https://www.googleapis.com/books/v1/volumes?q=isbn:9781338208740")

// // Axios Test.
// const axiosTest = axios.get

// // Axios Test Data.
// axiosTest(url).then(function(axiosTestResult) {
//   console.log('response.JSON:', {
//     message: 'Request received',
//     data: axiosTestResult.data
//   })
// })



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quagga: true,
    }
  }

detected = (result) =>{
  console.log(result)
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
    Quagga.onDetected((result)=>{this.detected(result)})
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

  componentWillUnmount(){
    Quagga.stop();
    Quagga.offDetected(()=>{
      console.log("stopped!")
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/bookshelf" component={BookShelf} />
            <Route component={NoMatch} />
          </Switch>
          <div className={`col-12 ${this.state.quagga === false ? "d-none" : null}`} id="play">
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
