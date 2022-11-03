import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { colors } from "../utils/colors";

const FormContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.white};
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
`;

const FormTitle = styled.h1`
  font-size: 1.5rem;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const RememberContent = styled.div`
  display: flex;
`;
const RememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const SubmitBtn = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: ${colors.primary};
  color: #fff;
  border: 1px solid ${colors.primary};
  &:hover {
    cursor: pointer;
  }
`;

const handleSubmit = (event) => {
  event.preventDefault();
};

const SignInForm = () => {
  return (
    <FormContainer>
      <FaUserCircle size={60} />
      <FormTitle>Sign In</FormTitle>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormContent>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput type="text" id="username" />
        </FormContent>
        <FormContent>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type="password" id="password" />
        </FormContent>
        <RememberContent>
          <input type="checkbox" id="remember-me" />
          <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
        </RememberContent>
        <SubmitBtn>Sign In</SubmitBtn>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
