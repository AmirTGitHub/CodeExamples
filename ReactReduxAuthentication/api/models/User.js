const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please provide name"
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    trim: true,
    required: "Please enter a valid email address"
  },
  password: {
    type: String,
    trim: true,
    required: "Please provide name"
  }
});

module.exports = mongoose.model("User", UserSchema);
