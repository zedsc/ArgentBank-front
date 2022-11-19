import styled from "styled-components";
import { gradientGreys, colors } from "../../utils/colors";

export const TitleContent = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.white};
`;

export const Name = styled.span`
  display: block;
  color: ${colors.white};
`;

export const EditBtn = styled.button`
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  color: #fff;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`;

export const SrLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;
export const Input = styled.input`
  display: block;
  border: 1px solid ${gradientGreys.gray1};
  background-color: ${colors.white};
  padding: 8px 10px;
  margin: 5px;
  width: 170px;
  border-radius: 1px;
  font-size: 1rem;
  &::placeholder {
    opacity: 0.3;
  }
  &:-moz-focusring {
    outline: 1px solid ${colors.primary};
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SetBtn = styled.button`
  display: block;
  width: 120px;
  border: 1px solid ${colors.primary};
  padding: 5px 20px;
  margin: 5px;
  text-decoration: none;
  background: ${colors.white};
  color: ${colors.primary};
  font-size: 0.875rem;
  cursor: pointer;
  text-align: center;
  transition: background 150ms ease-in-out, transform 50ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    font-weight: bold;
  }
`;
