import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Actions
import { logout } from "./../actions/actions";

// Styled components
import styled from "styled-components";
import { useDispatch } from "react-redux";

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
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.removeItem("token");
    setToken(localStorage.getItem("token"));
    dispatch(logout());
  }
  
  return (
    <div>
      <NavWrapper>
        <Title>Anywhere Fitness</Title>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        {token ? (
          <NavLink to="/login" onClick={handleClick}>
            Logout
          </NavLink>
        ) : null}
      </NavWrapper>
    </div>
  );
};

export default Header;
