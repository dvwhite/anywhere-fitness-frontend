import React from 'react';

// Redux imports
import { connect } from 'react-redux';

// Component imports
import Header from "./Header";

// Styled components
import styled from 'styled-components';

const UserHome = props => {
  return (
    <div>
      <Header />
      <h1>{props.message}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(mapStateToProps)(UserHome);
