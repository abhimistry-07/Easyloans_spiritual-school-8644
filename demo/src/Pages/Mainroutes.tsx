import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import Login from "./login-signup/login";
import EmiCalculator from "./EmiCalculator";
import MachineryLoanPage from "./Machinary";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calculator" element={<EmiCalculator />} />
        <Route path="/machineLoan" element={<MachineryLoanPage />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
