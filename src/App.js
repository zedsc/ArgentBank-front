import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserProfil from "./pages/UserProfil";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/sign-in" exact element={<SignIn />} />
      <Route path="/user" element={<UserProfil />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
