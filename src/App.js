import React from "react";
import { Routes, Route } from "react-router-dom";
import GuardedRoute from "./components/GuardedRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Transactions from "./pages/Transactions";
import UserProfil from "./pages/UserProfil";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<SignIn />} />
      <Route element={<GuardedRoute />}>
        <Route path="/profile" element={<UserProfil />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
