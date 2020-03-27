import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// Actions
import { register } from "../actions/actions";

// Styled components
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #444;
  background: url("https://images.unsplash.com/photo-1549576490-b0b4831ef60a")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 92.6vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 18px;
  width: 30%;
  background-color: white;
  opacity: 0.9;
  z-index: 0;
  overflow: hidden;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const FormInput = styled.input`
  padding: 4%;
  margin: 2% 0%;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 25px;
  -webkit-box-shadow: 0 0 4px #333 inset;
  -moz-box-shadow: 0 0 4px #333 inset;
  box-shadow: 0 0 4px #333 inset;
  text-indent: 5px;
  width: 80%;
  background: lightgray;
  color: black;
  font-size: 1.2rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 8px 2px #444;
  }
`;

const Button = styled.button`
  margin: 2%;
  overflow: hidden;
  background: #333;
  color: #fff;
  outline: 0;
  font-size: 1.7rem;
  border-radius: 5px;
  height: 4rem;
  width: auto;
`;

const Register = () => {
  const [input, setInput] = useState({ username: "", password: "", auth: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  // Event handlers
  const handleChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register(
        {
          username: input.username,
          password: input.password,
          roleId: input.auth.length < 1 ? 1 : 2 // auth code can be anything - placeholder logic
        },
        history
      )
    ); // action creator
  };

  // The JSx
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <FormInput
          type="text"
          name="username"
          placeholder="username"
          value={input.username}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="password"
          placeholder="password"
          value={input.password}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="auth"
          placeholder="auth"
          value={input.auth}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Get Started
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default Register;
