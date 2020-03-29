import React, { useEffect } from "react";

// Redux imports
import { connect, useDispatch, useSelector } from "react-redux";

// Component imports
import Header from "./Header";
import ClassCard from "./ClassCard";

// Helpers
import { getUserClasses, getClasses } from "./../actions/actions";

// Styled components
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 100%;
`

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: whitesmoke;
`

const UserHome = props => {
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classes);
  const userClasses = useSelector(state => state.user.classes);
  console.log("userClasses on mount:", userClasses);

  userClasses &&
    userClasses.map(classObj =>
      console.log("mapping over userClasses:", classObj)
    );

  // Get all classes on mount, store in state
  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  // Get user's classes they're signed up for, store in state
  useEffect(() => {
    dispatch(getUserClasses(classes));
  }, [dispatch, classes]);

  return (
    <>
      <Header />
      <h1>{props.message}</h1>
      <Wrapper>
        {userClasses?.length > 0 ? <h2>Classes You're Signed Up For:</h2> : null}
        <Cards>
          {userClasses?.map((classData, idx) => {
            return <ClassCard data={classData} key={idx} />;
          })}
        </Cards>
      </Wrapper>
    </>
  );
};

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(mapStateToProps)(UserHome);
