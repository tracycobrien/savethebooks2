const router = require("express").Router();
const bookRoutes = require("./bookshelf");

// Book routes
router.use("/bookshelf", bookRoutes);

module.exports = router;
