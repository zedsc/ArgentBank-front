import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../utils/colors";

const TitleContent = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.white};
`;

const Name = styled.span`
  display: block;
  color: ${colors.white};
`;

const EditBtn = styled.button`
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  color: #fff;
  font-weight: bold;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const UserName = () => {
  const user = useSelector((state) => state.user.userDatas);

  return (
    <TitleContent>
      <Title>
        Welcome back <Name>{user.firstName + " " + user.lastName}!</Name>
      </Title>
      <EditBtn>Edit Name</EditBtn>
    </TitleContent>
  );
};

export default UserName;
