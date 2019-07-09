import axios from 'axios';

const DEFAULT_HPP = '15';

const PATH_BASE = 'https://www.googleapis.com/books/v1';
const PATH_SEARCH = '/volumes';
const PARAM_SEARCH = 'q=';
const PARAM_HPP = 'maxResults=';
const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  getGoogleBooks: function (search) {
    return axios.get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${search}&${PARAM_HPP}${DEFAULT_HPP}&key=${API_KEY}`)
  },

  saveBook: function (bookData) {
    return axios.post('/api/books', bookData);
  },

  getBooks: function () {
    return axios.get('/api/books')
  },

  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`)
  }
};// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     console.log("getBooks")
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     console.log("getBooks")
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     console.log("deleteBooks")
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     console.log("saveBooks")
//     return axios.post("/api/books", bookData);
//   }
// };
