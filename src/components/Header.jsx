import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

// Actions
import { logout } from "./../actions/actions";

// Styled components
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
`;

const Title = styled.h1`
  color: #444;
  font-weight: bold;
`;

const Header = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <NavWrapper>
      <Title>Anywhere Fitness</Title>
      <NavLink to={`/user/${id}/classes`}>Classes</NavLink>
      <NavLink to={`/user/${id}/profile`}>Profile</NavLink>
      <NavLink to="/login" onClick={handleClick}>
        Logout
      </NavLink>
    </NavWrapper>
  );
};

export default Header;
