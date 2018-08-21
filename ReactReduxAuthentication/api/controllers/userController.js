const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

exports.register = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
    return;
  }
  let { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (user !== null) {
      return res.status(400).json({ msg: "this email already exist" });
    } else {
      const newUser = new User({
        name,
        email,
        password: hashPassword
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
    return;
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ email: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      //successful login
      const payload = { id: user.id, name: user.name, email: user.email };
      jwt.sign(
        payload,
        keys.secretOrKeys,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) {
            throw error;
          }
          res.json({
            success: true,
            token: "bearer " + token
          });
        }
      );
    } else {
      res.status(400).json({ password: "incorrect password" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.protectedPath = (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email
  });
};
