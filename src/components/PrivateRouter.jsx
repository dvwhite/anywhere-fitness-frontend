import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem("token");
        const path = token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
        return path;
      }}
    />
  );
};

export default PrivateRoute;
