import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import SignInForm from "../components/SignInForm";
import { degradedGreys } from "../utils/colors";

const DarkBg = styled.main`
  flex: 1;
  background-color: ${degradedGreys.gray3};
`;

const PageContent = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SignIn = () => {
  return (
    <PageContent>
      <Header />
      <DarkBg>
        <SignInForm />
      </DarkBg>
      <Footer />
    </PageContent>
  );
};

export default SignIn;
