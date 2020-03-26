import React from "react";
import { NavLink } from "react-router-dom";

// Actions
import { logout } from "./../actions/actions";

// Styled components
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: #444;
  font-weight: bold;
`;

const Header = () => {
  const token = localStorage.getItem("token");
  return (
    <NavWrapper>
      <Title>Anywhere Fitness</Title>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      {token ? (
        <NavLink to="/login" onClick={() => logout()}>
          Logout
        </NavLink>
      ) : null}
    </NavWrapper>
  );
};

export default Header();
