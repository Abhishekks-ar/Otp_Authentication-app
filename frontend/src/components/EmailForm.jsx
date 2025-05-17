import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";

const EmailForm = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/form", { email })
      .then((res) => {
        alert(res.data); 
        onEmailSubmit(email); // notify parent to switch to OTP form
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send OTP");
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
      <Typography variant="h4" color="blue">
        Form
      </Typography>
      <TextField
        label="Enter Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default EmailForm;
