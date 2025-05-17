// import React, { useState } from "react";
// import EmailForm from "./EmailForm";
// import OTPForm from "./OTPForm";

// const FormController = () => {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");

//   // Called when email is submitted successfully
//   const handleEmailSubmit = (submittedEmail) => {
//     setEmail(submittedEmail);
//     setStep(2); // move to OTP form
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
//       {step === 1 ? (
//         <EmailForm onEmailSubmit={handleEmailSubmit} />
//       ) : (
//         <OTPForm email={email} />
//       )}
//     </div>
//   );
// };

// export default FormController;

// FormController.jsx
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import EmailForm from "./EmailForm";
import OTPForm from "./OTPForm";
import Welcome from "./Welcome";

const FormController = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = (submittedEmail) => {
    setEmail(submittedEmail);
    navigate("/otp");
  };

  return (
    <Routes>
      <Route path="/" element={<EmailForm onEmailSubmit={handleEmailSubmit} />} />
      <Route path="/otp" element={<OTPForm email={email} />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default FormController;
