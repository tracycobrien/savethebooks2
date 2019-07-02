import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("getBooks")
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    console.log("getBooks")
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log("deleteBooks")
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("saveBooks")
    return axios.post("/api/books", bookData);
  }
};
