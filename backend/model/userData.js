const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  verified: {
    type: Boolean,
    default: false
  }
});

const UserData = mongoose.model("user", userSchema); 

module.exports = UserData;
