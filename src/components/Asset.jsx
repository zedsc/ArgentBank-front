import React from "react";
import styled from "styled-components";
import { gradientGreys, colors } from "../utils/colors";

const ItemContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
  text-align: center;
`;

const ItemImg = styled.img`
  width: 100px;
  border: 10px solid ${colors.primary};
  border-radius: 50%;
  padding: 1rem;
`;

const ItemTitle = styled.h3`
  color: ${gradientGreys.gray4};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ItemText = styled.p``;

const Asset = ({ item }) => {
  return (
    <ItemContainer>
      <ItemImg src={item.img} alt={item.alt} />
      <ItemTitle>{item.title}</ItemTitle>
      <ItemText>{item.text}</ItemText>
    </ItemContainer>
  );
};

export default Asset;
