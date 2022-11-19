import React from "react";
import { formatNumber } from "../../utils/formatNumber";
import {
  AccountAmount,
  AccountBalance,
  AccountContainer,
  AccountDesc,
  AccountTitle,
  StyledLink,
  TransactionBtn,
} from "./bankAccount.styled";

const BankAccount = ({ userAccount }) => {
  console.log(userAccount);
  return (
    <AccountContainer>
      <AccountDesc>
        <AccountTitle>
          {userAccount.title} (x{userAccount.lastNb})
        </AccountTitle>
        <AccountAmount>{formatNumber(userAccount.balance)}</AccountAmount>
        <AccountBalance>{userAccount.balanceDesc}</AccountBalance>
      </AccountDesc>
      <TransactionBtn>
        <StyledLink to="/transactions" state={{ userAccount }}>
          View transactions
        </StyledLink>
      </TransactionBtn>
    </AccountContainer>
  );
};

export default BankAccount;
