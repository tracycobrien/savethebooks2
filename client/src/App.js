import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Bookshelf from "./pages/Bookshelf";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer"
import axios from "axios"


// https://www.googleapis.com/books/v1/volumes?q=isbn:<your_isbn_here>

axios.get("https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ")
.then(res=>{
  console.log(res)
})
.catch(err=>{
  console.log("===================",err)
})

function App() {
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
