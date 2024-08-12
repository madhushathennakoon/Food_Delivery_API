const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const createToken = require("../helpers/jwt_tokens");
const validator = require("validator");

//Signup User
const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Validation
    if (!email || !password || !name) {
      return res.status(400).json({
        status: "fail",
        message: "All field must be filled",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: "fail",
        message: "Email is not valid",
      });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        status: "fail",
        message: "Password not strong enough",
      });
    }

    //Password Encrypted
    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(password, salt);

    //Check email
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(409).json({
        status: "fail",
        message: "Email already in use",
      });
    }

    //Create user in database
    const user = await userModel.create({
      email,
      password: hashedPass,
      name,
    });

    //Create a token
    const token = createToken(user._id);

    return res.status(201).json({ email: user.email, token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

//Signin user
const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Validation
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "All field must be filled",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid password",
      });
    }

    //Create a token
    const token = createToken(user._id);

    res.status(200).json({ email: user.email, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { signinUser, signupUser };
