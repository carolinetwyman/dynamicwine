const router = require("express").Router();
const wineRoutes = require("./wines");
const userRoutes = require("./users");

router.use("/wines", wineRoutes);
router.use("/users", userRoutes);

module.exports = router;
