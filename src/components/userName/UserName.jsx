import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfos } from "../../feature/user.slice";
import {
  Title,
  TitleContent,
  Name,
  EditBtn,
  SrLabel,
  InputContainer,
  Input,
  BtnContainer,
  SetBtn,
} from "./userName.styled";

const UserName = () => {
  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.user.userDatas);
  console.log(edit, "edit statut");
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const updateStatus = useSelector((state) => state.user.update);
  const dispatch = useDispatch();

  const handleEdit = async (e) => {
    e.preventDefault();

    const inputFirstNameCurrent = inputFirstName.current.value;
    const inputLastNameCurrent = inputLastName.current.value;

    const userProfileInfos = {
      firstName: inputFirstNameCurrent,
      lastName: inputLastNameCurrent,
    };

    if (inputFirstNameCurrent !== "" && inputLastNameCurrent !== "") {
      dispatch(updateUserInfos(userProfileInfos));
      if (updateStatus === "succeded") {
        setEdit(false);
      }
    }
  };

  return edit ? (
    <TitleContent>
      <Title>Welcome back</Title>
      <form>
        <InputContainer>
          <SrLabel htmlFor="firstName">First name</SrLabel>
          <Input
            required
            type="text"
            id="firstName"
            placeholder={user.firstName}
            ref={inputFirstName}
          />
          <SrLabel htmlFor="lastName">Last name</SrLabel>
          <Input
            required
            type="text"
            id="lastName"
            placeholder={user.lastName}
            ref={inputLastName}
          />
        </InputContainer>
        <BtnContainer>
          <SetBtn onClick={(e) => handleEdit(e)}>Save</SetBtn>
          <SetBtn onClick={() => setEdit(false)}>Cancel</SetBtn>
        </BtnContainer>
      </form>
    </TitleContent>
  ) : (
    <TitleContent>
      <Title>
        Welcome back <Name>{user.firstName + " " + user.lastName}!</Name>
      </Title>
      <EditBtn onClick={() => setEdit(true)}>Edit Name</EditBtn>
    </TitleContent>
  );
};

export default UserName;
