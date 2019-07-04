const axios = require("axios")


const bookShelfController = {
    bookShelfController: axios("https://www.goodreads.com/search.xml?key=YOUR_KEY&q=Ender%27s+Game").then(res=>{
        console.log(res)
    })
}

module.exports = bookShelfController