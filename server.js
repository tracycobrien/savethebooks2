const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios")
mongoose.set('useCreateIndex', true);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
if (process.env.NODE_ENV === 'production') {
	console.log('producion');
	app.use(express.static('client/build'));
}
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"),{ useNewUrlParser: true };
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});