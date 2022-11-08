import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import styled from "styled-components";
import UserName from "../components/UserName";
import { degradedGreys } from "../utils/colors";
import BankAccount from "../components/BankAccount";

const bankDatas = [
  {
    title: "Argent Bank Checking",
    lastNb: 8349,
    balance: 2082.79,
    balanceDesc: "Available Balance",
  },
  {
    title: "Argent Banl Savings",
    lastNb: 6712,
    balance: 10928.42,
    balanceDesc: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card",
    lastNb: 8349,
    balance: 184.3,
    balanceDesc: "Current Balance",
  },
];

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
