import React from 'react';

// Redux imports
import { connect } from 'react-redux';

// Styled components
import styled from 'styled-components';

const UserHome = props => {
  return (
    <div>
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
