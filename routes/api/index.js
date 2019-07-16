const router = require("express").Router();
const bookRoutes = require("./books");
// const bookshelfRoutes = require('./bookshelf');

// Book routes
router.use("/api/books", bookRoutes);
// router.use('/bookshelf', bookshelfRoutes);




module.exports = router;
