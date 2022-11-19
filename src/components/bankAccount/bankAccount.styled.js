import styled from "styled-components";
import { colors } from "../../utils/colors";
import { NavLink } from "react-router-dom";

export const AccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.black};
  background-color: ${colors.white};
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const AccountDesc = styled.div`
  width: 100%;
  flex: 1;
`;

export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountBalance = styled.p`
  margin: 0;
`;

export const TransactionBtn = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  color: ${colors.white};
  cursor: pointer;
  @media (min-width: 720px) {
    width: 200px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.white};
  &:hover {
    text-decoration: none;
  }
`;
