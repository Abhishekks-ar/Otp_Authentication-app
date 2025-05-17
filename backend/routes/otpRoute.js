const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const OtpModel = require("../model/otpData");

router.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ksabhishek42@gmail.com",
    pass: "sfmh ovci cxrb eekw",
  },
});

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send("Email is required");
    }

    // otp gen
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save email,otp to DB
    const otpEntry = new OtpModel({ email, otp });
    await otpEntry.save();

    // Send OTP via email
    await transporter.sendMail({
      from: '"Your App Name" <ksabhishek42@gmail.com>',
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}`,
      html: `<h3>Your OTP code is <b>${otp}</b></h3>`,
    });

    res.status(200).send("OTP sent successfully");
  } catch (error) {
    console.error("Error in /form POST:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
