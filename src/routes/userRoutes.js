const express = require("express");
const { signinUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//Signup Route
router.post("/signup", signupUser);

//Signin Route
router.post("/signin", signinUser);

module.exports = router;
