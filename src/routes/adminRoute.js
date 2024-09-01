const express = require("express");
const { signinAdmin, signupAdmin } = require("../controllers/adminController");

const router = express.Router();

//Signup Route
router.post("/signup", signupAdmin);

//Signin Route
router.post("/signin", signinAdmin);

module.exports = router;
