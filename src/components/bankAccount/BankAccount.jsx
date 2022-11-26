import React from "react";
import { formatNumber } from "../../utils/formatNumber";
import PropTypes from "prop-types";
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

BankAccount.propTypes = {
  userAccount: PropTypes.object.isRequired,
};
export default BankAccount;
