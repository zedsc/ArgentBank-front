import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gradientGreys, colors } from "../../utils/colors";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${gradientGreys.gray2};
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: ${colors.secondary};
  }
`;

const IconContainer = styled.div`
  margin-right: 0.2rem;
`;

const TextLink = styled.p`
  font-size: 0.7rem;
  @media (min-width: 720px) {
    font-size: 1rem;
  }
`;

const NavBtn = ({ iconName, path, text }) => {
  return (
    <StyledLink to={path}>
      <IconContainer>{iconName}</IconContainer>
      <TextLink>{text}</TextLink>
    </StyledLink>
  );
};

export default NavBtn;
