const express = require("express");
const router = express.Router();
const dbController = require("../controllers/dbController");
const userController = require("../controllers/userController");
const passport = require("passport");

// check the router file
router.get("/hello", dbController.homepage);

//working with quiz data
router.get("/quiz", dbController.getQuiz);
router.post("/quiz", dbController.postQuiz);

//working with users
router.post("/user/register", userController.register);
router.post("/user/login", userController.login);
router.get(
  "/users/pre",
  passport.authenticate("jwt", { session: false }),
  userController.protectedPath
);

module.exports = router;
