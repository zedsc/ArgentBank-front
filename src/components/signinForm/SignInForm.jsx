import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  ErrorMsg,
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
  const [errorText, setErrorText] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userLoginCredentials = {
      email: inputUserName.current.value,
      password: inputUserPassword.current.value,
    };

    dispatch(logIn(userLoginCredentials));
  };

  const handleCheckbox = (event) => {
    dispatch(setRememberMe(event.target.checked));
  };

  const handleFocus = () => {
    setIsError(false);
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
      } else {
        dispatch(setUserName(""));
      }
      navigate("/profile");
      setErrorText("");
      setIsError(false);
    } else if (authStatus === "failed") {
      setErrorText("Wrong password and/or username");
      setIsError(true);
    }
  }, [authStatus, navigate, token, dispatch, rememberMe]);

  return (
    <FormContainer>
      <FaUserCircle size={60} />
      <FormTitle>Sign In</FormTitle>
      <ErrorMsg error={isError}>{errorText}</ErrorMsg>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormContent>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput
            type="text"
            id="username"
            ref={inputUserName}
            onInput={() => handleFocus()}
          />
        </FormContent>
        <FormContent>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            ref={inputUserPassword}
            onInput={() => handleFocus()}
          />
        </FormContent>
        <RememberContent>
          {rememberMe ? (
            <input
              type="checkbox"
              id="remember-me"
              checked={true}
              onChange={(event) => handleCheckbox(event)}
            />
          ) : (
            <input
              type="checkbox"
              id="remember-me"
              checked={false}
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
