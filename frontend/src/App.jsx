import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmailForm from "./components/EmailForm";
import OTPForm from "./components/OTPForm";
import { FormControl } from "@mui/material";
import FormController from "./components/FormController";
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
    
      <FormController />
    </>
  );
}

export default App;
