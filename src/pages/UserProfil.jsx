import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import styled from "styled-components";
import UserName from "../components/UserName";
import { degradedGreys } from "../utils/colors";
import BankAccount from "../components/BankAccount";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfos } from "../feature/user.slice";
import { bankDatas } from "../utils/mockBankDatas";

const DarkBg = styled.main`
  flex: 1;
  background-color: ${degradedGreys.gray3};
`;

const PageContent = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AccountsSection = styled.section``;

const SrTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const UserProfil = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userToken);

  useEffect(() => {
    console.log(token);
    const sendToken = {
      headers: { Authorization: `Bearer ${token}` },
    };
    dispatch(getUserInfos(sendToken));
  }, [dispatch, token]);

  return (
    <PageContent>
      <Header />
      <DarkBg>
        <UserName />
        <AccountsSection>
          <SrTitle>Accounts</SrTitle>
          {bankDatas.map((data, index) => (
            <BankAccount key={index} userAccount={data} />
          ))}
        </AccountsSection>
      </DarkBg>
      <Footer />
    </PageContent>
  );
};

export default UserProfil;
