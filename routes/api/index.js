const router = require("express").Router();
const bookRoutes = require("./books");
// const bookshelfRoutes = require('./bookshelf');

// Book routes
router.use("/api/books", bookRoutes);
// router.use('/bookshelf', bookshelfRoutes);
router.use('/*', (request, response) => {
	response.sendFile(path.join(__dirname, '../client/build/index.html'));
});



module.exports = router;
