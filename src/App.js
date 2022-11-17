import React from "react";
import { Routes, Route } from "react-router-dom";
import GuardedRoute from "./components/GuardedRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserProfil from "./pages/UserProfil";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/sign-in" exact element={<SignIn />} />
      <Route element={<GuardedRoute />}>
        <Route path="/user" element={<UserProfil />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
