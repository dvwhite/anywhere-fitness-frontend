import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getClasses, getCategories } from "./../actions/actions";

// Component imports
import ClassCard from "./ClassCard";
import Header from "./Header";

// Styled components
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

const Classes = () => {
  const classes = useSelector(state => state.classes);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  // Get all classes on mount, store in state
  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  // Get all categories on mount, store in state
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Cards>
        {classes &&
          classes.map((classData, idx) => <ClassCard data={classData} key={idx} />)}
      </Cards>
    </div>
  );
};

export default Classes;
