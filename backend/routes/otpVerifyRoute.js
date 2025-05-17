const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const OtpModel = require("../model/otpData");

// post
router.post("/", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await OtpModel.findOne({ email, otp });

    if (record) {
      await OtpModel.deleteMany({ email });
      return res.status(200).send("OTP verified successfully");
    } else {
      return res.status(400).send("Invalid OTP");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error verifying OTP");
  }
});

module.exports = router;