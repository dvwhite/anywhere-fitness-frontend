import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getClasses } from "./../actions/actions";

// Component imports
import ClassCard from "./ClassCard";
import Header from "./Header";
import SearchForm from "./SearchForm";

// Styled components
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: whitesmoke;
`

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: whitesmoke;
`;

const Classes = () => {
  const classes = useSelector(state => state.classes);
  const [results, setResults] = useState(classes);
  const dispatch = useDispatch();

  // Get all classes on mount, store in state
  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Wrapper>
        <SearchForm classes={classes} setResults={setResults} />
        <Cards>
          {(results.length > 0 ? results : classes).map((classData, idx) => (
            <ClassCard data={classData} key={idx} />
          ))}
        </Cards>
      </Wrapper>
    </>
  );
};

export default Classes;
