import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { degradedGreys, colors } from "../../utils/colors";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${degradedGreys.gray2};
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: ${colors.secondary};
  }
`;

const IconContainer = styled.div`
  margin-right: 0.2rem;
  }
`;

const NavBtn = ({ iconName, path, text }) => {
  return (
    <StyledLink to={path}>
      <IconContainer>{iconName}</IconContainer>
      {text}
    </StyledLink>
  );
};

export default NavBtn;
