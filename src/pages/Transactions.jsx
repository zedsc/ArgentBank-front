import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import styled from "styled-components";
import { gradientGreys, colors } from "../utils/colors";
import TransactionsTable from "../components/transactionsTable/TransactionsTable";
import { useLocation } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const DarkBg = styled.main`
  flex: 1;
  background-color: ${gradientGreys.gray3};
`;

const PageContent = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TransactionsSection = styled.section`
  text-align: center;
`;

const SrTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const AccountInfos = styled.header`
  background-color: ${colors.white};
  margin-top: 3px;
  padding: 20px 0;
  margin-bottom: 70px;
`;

const AccountName = styled.p`
  margin: 0.5rem;
`;

const AccountBalance = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem;
`;

const AccountDesc = styled.p`
  margin: 0.5rem;
`;

const Transactions = () => {
  const location = useLocation();
  const { userAccount } = location.state;
  return (
    <PageContent>
      <Header />
      <DarkBg>
        <TransactionsSection>
          <SrTitle>Transactions</SrTitle>
          <AccountInfos>
            <AccountName>
              {userAccount.title} (x{userAccount.lastNb})
            </AccountName>
            <AccountBalance>{formatNumber(userAccount.balance)}</AccountBalance>
            <AccountDesc>{userAccount.balanceDesc}</AccountDesc>
          </AccountInfos>
          <TransactionsTable
            accountBalance={formatNumber(userAccount.balance)}
          />
        </TransactionsSection>
      </DarkBg>
      <Footer />
    </PageContent>
  );
};

export default Transactions;
