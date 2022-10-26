import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 100%;
  width: 200px;
`;

const SrTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImg
          src={`${process.env.PUBLIC_URL}/img/argentBankLogo.png`}
          alt="logo ArgentBank"
          className="logo"
        />
        <SrTitle>Argent Bank</SrTitle>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
