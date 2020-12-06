const router = require("express").Router();
const userController = require("../../../dynamicwine/controllers/userController");

//route for user to make an account
router.route("/register").post(userController.userCreate);

router.route("/user").get((req, res) => {
    res.send(req.user);
  });

module.exports = router;
