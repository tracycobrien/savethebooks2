const router = require("express").Router();
const bookRoutes = require("./books");
// const bookshelfRoutes = require('./bookshelf');

// Book routes
router.use("/books", bookRoutes);
// router.use('/bookshelf', bookshelfRoutes);




module.exports = router;
