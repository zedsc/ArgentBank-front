import React from "react";
import styled from "styled-components";
import { degradedGreys } from "../utils/colors";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${degradedGreys.gray1};
  padding: 2rem 0 1.5rem;
`;
const TextFooter = styled.p`
  margin: 0;
  padding: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <TextFooter>Copyright 2020 Argent Bank</TextFooter>
    </StyledFooter>
  );
};

export default Footer;
