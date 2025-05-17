const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  otp: {
    type: String,
  },
});

const OtpData = mongoose.model("otp", otpSchema); 

module.exports = OtpData;
