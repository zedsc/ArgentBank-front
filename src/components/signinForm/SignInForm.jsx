import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logIn, setUserName, setRememberMe } from "../../feature/auth.slice";
import {
  FormContainer,
  FormTitle,
  FormContent,
  FormInput,
  FormLabel,
  RememberContent,
  RememberLabel,
  SubmitBtn,
} from "./signInForm.styled";

const SignInForm = () => {
  const inputUserName = useRef();
  const inputUserPassword = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const token = useSelector((state) => state.auth.userToken);
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const userName = useSelector((state) => state.auth.userName);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userLoginCredentials = {
      email: inputUserName.current.value,
      password: inputUserPassword.current.value,
    };

    console.log("userCredentials", userLoginCredentials);

    dispatch(logIn(userLoginCredentials));
  };

  const handleCheckbox = (event) => {
    dispatch(setRememberMe(event.target.checked));
  };

  useEffect(() => {
    userName
      ? (inputUserName.current.value = userName)
      : (inputUserName.current.value = "");
  }, [userName]);

  useEffect(() => {
    if (authStatus === "succeded") {
      if (rememberMe) {
        dispatch(setUserName(inputUserName.current.value));
      }
      //sessionStorage.setItem("token", token);
      navigate("/user");
    }
  }, [authStatus, navigate, token, dispatch, rememberMe]);

  return (
    <FormContainer>
      <FaUserCircle size={60} />
      <FormTitle>Sign In</FormTitle>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormContent>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput type="text" id="username" ref={inputUserName} />
        </FormContent>
        <FormContent>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type="password" id="password" ref={inputUserPassword} />
        </FormContent>
        <RememberContent>
          {rememberMe ? (
            <input
              type="checkbox"
              id="remember-me"
              checked
              onChange={(event) => handleCheckbox(event)}
            />
          ) : (
            <input
              type="checkbox"
              id="remember-me"
              onChange={(event) => handleCheckbox(event)}
            />
          )}

          <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
        </RememberContent>
        <SubmitBtn>Sign In</SubmitBtn>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
