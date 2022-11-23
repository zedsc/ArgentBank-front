import React from "react";
import Logo from "./Logo";
import NavBtn from "./NavBtn";
import styled from "styled-components";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogout } from "../../feature/user.slice";
import { setAuthLogout } from "../../feature/auth.slice";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const StyledContainer = styled.div`
  display: flex;
`;

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const { userToken } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user.userDatas);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setUserLogout());
    dispatch(setAuthLogout());
  };

  if (authStatus === "succeded" || userToken) {
    return (
      <StyledHeader>
        <Logo />
        <nav>
          <StyledContainer>
            <NavBtn
              iconName={<FaUserCircle />}
              path="/profile"
              text={user.firstName}
            />
            <div className="logout-btn" onClick={() => logOut()}>
              <NavBtn
                iconName={<FaSignOutAlt />}
                path="/login"
                text="Sign Out"
              />
            </div>
          </StyledContainer>
        </nav>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <Logo />
      <nav>
        <NavBtn iconName={<FaUserCircle />} path="/login" text="Sign In" />
      </nav>
    </StyledHeader>
  );
};

export default Header;
