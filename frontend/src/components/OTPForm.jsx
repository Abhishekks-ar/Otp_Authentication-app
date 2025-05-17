import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OTPForm = ({ email }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://otp-authentication-app.onrender.com/verify", { email, otp })
      .then((res) => {
        alert(res.data); // e.g., "OTP verified successfully"
        navigate("/welcome"); 
      })
      .catch((err) => {
        console.error(err);
        alert("Invalid OTP");
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        border: "2px solid blue",
        padding: 3,
        borderRadius: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" color="purple">
        Enter OTP
      </Typography>
      <TextField
        label="OTP"
        variant="outlined"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
        inputProps={{ maxLength: 6 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Verify
      </Button>
    </Box>
  );
};

export default OTPForm;
