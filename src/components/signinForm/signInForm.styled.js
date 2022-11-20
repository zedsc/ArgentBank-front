import styled from "styled-components";
import { colors } from "../../utils/colors";

export const FormContainer = styled.div`
  box-sizing: border-box;
  background-color: ${colors.white};
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
`;

export const FormTitle = styled.h1`
  font-size: 1.5rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

export const FormLabel = styled.label`
  font-weight: bold;
`;

export const RememberContent = styled.div`
  display: flex;
`;
export const RememberLabel = styled.label`
  margin-left: 0.25rem;
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: 1px solid ${colors.primary};
  &:hover {
    cursor: pointer;
  }
`;

export const ErrorMsg = styled.p`
  display: ${(props) => (props.error ? "block" : "none")};
  color: ${colors.warning};
  padding: 10px;
  margin: 20px 0;
  font-weight: bold;
  border: 1px solid ${colors.warning};
`;
