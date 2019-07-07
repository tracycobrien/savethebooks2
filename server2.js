const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api2");
const app = express();
const PORT = process.env.PORT || 27018;
const axios = require("axios")
mongoose.set('useCreateIndex', true);



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Serve Up Static Assets (usually on Heroku) -----------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}



// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

