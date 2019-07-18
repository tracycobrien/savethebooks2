## Brooks' Reading App

## Book Wish List and Saved Reading List Application using MongoDB, Quagga, Express, React, & Node
MERN-Library is a React-based Google Books Search application. It allows you to search the Google Books API for books that Brooks might like to read; displaying for you the book information including an image of the book, title, authors, description, published date, and number of pages. Furthermore you are then able to see the books he has for his teachers to reference later when they are looking for books for him to read. The server for the application is supported by Node.js and Express and a MongoDB database is used to store your 'Bookshelf' which is queried via Mongoose.


##Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

##Prerequisites
In order to install and run MERN-Library on your own device you will need to be able to run MongoDB, in addition to needing the following npm packages:
Node.js
Express.js
Mongoose
Axios

##Installing
You will need to do the following steps after cloning the repo to your device in order to ensure that it works properly.
To ensure Node.js is running within the package and configure all modules for use:
npm install
This should install all the requisite modules for the server and then cd into the client folder to install all the modules required there. following this installation check to make sure that you have a node_modules folder in both the root directory and within the 'client' folder and things should be ready to run.
For the Server:
express             
axios               
if-env              
mongoose            
concurrently        

##For the React App:
axios               
prop-types          
react               
react-alert         
react-alert-template-basic
react-dom       
react-router-dom    
react-scripts
            

Running 'MERN-Library'
To run MERN-Library locally you will need to have MongoDB running on your computer, you can then begin the server simply by path into the root folder for the application and running:
npm start
As per the package.json... with it being in dev mode (which is checks for), it will run nodemon --ignore 'client/*' (Starting the server and ignoring the contents of the client folder, which houses the React Application) concurrently with running npm run client = cd client && npm run startwhich grabs the client folder and starts the React Application running on proxy port 3001. If all runs smoothly you should see another browser tab open and navigate to the site.

Deployment
* Deployed Site
- [Heroku](https://savethebook.herokuapp.com/)

















  