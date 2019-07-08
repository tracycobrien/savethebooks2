const mongoose = require("mongoose");
const db = require("../models2");
const mongoJoin = require("mongo-join-query");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "Dog Man A Tale of Two Kitties",
        author: "Dave Pilkey",
        ISBN: "978133820874",

        date: new Date(Date.now())
    },
    {
        title: "Dog Man",
        author: "Dave Pilkey",
        ISBN: "9780545581608",
        date: new Date(Date.now())
    },
    {
        title: "Dog Man Lord of the Fleas",
        author: "Dave Pilkey",
        ISBN: "9781338302493",
        date: new Date(Date.now())
    },
    {
        title: "Dog Man Brawl of the Wild",
        author: "Dave Pilkey",
        ISBN: "9781338346176",
        date: new Date(Date.now())
    },
    {
        title: "Dog Man Unleashed",
        author: "Dave Pilkey",
        ISBN: "9780545935203",
        date: new Date(Date.now())
    },
];

    db.Book
        .remove({})
        .then(() => db.Book.collection.insertMany(bookSeed))
        .then(data => {
            console.log(data.result.n + " records inserted!");
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

