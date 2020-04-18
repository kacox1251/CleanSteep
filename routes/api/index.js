const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const userRoutes = require("./user");

// Route routes
router.use("/data", apiRoutes);

// user routes
router.use("/user", userRoutes);

module.exports = router;