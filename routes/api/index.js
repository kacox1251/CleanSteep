const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const userRoutes = require("./user");

// Todos routes, now we're at /api/todos
router.use("/routes", apiRoutes);

// user routes
router.use("/user", userRoutes);

module.exports = router;