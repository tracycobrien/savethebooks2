import React, { Component } from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import axios from "axios";
import Bookshelf from './Bookshelf'

class Savedbooks extends Component {
    state = {books: []};// Method to Query the API/Database to GET all the books in the database.
    loadSavedbooks = () => {
      API.getBookshelf()
        .then(res => this.setState({books: res.data}))
        .catch(err => console.log(err))
    };
  
    // Method to DELETE a particular book from the database.
    deleteBook = event => {
      API.deleteBook(event.target.id)
        .then(res => this.loadBookshelf())
        .catch(err => console.log(err))
    };
  
    // Lifecycle Method - once the Bookshelf Component mounts it runs the 'loadBookshelf' method.
    componentDidMount() {
      this.loadBookshelf()
    }
  
    render() {
      return (
        <div className="container">
          <Jumbotron
            title="Brooks' Saved Books"
            lead="All of Your Brooks' Books in One Convenient Location."
            instructions="View your book at Google, or remove it from your Bookshelf..."
            image=""
          />
          <Bookshelf
            books={this.state.books}
            buttonAction={this.deleteBook}
            buttonType="btn btn-danger mt-2"
            buttonText="Delete Book"
          />
        </div>
      )
    }
  }
  
  export default Savedbooks;