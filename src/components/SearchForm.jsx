import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import useLocalStorage from 'react-use-localstorage';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  margin: 2%;
  position: relative;
`

const Input = styled.input`
  margin-top: 8%;
  width: 20rem;
  border-radius: 25px;
  border: 1px solid gray;
  outline: 0;
  padding: 2%;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png');
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 2% 50%;
  padding-right: 5%;
  padding-left: 10%;
`

const SearchForm = ({classes, setResults}) => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', "");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  useEffect(() => {
    setResults(
      classes
        .filter(classObj => classObj?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
      )
  }, [searchTerm]);

  return (
    <CenteredDiv className="search-form">
     <label>
       <Input
        type="text"
        name="search"
        value={searchTerm}
        placeholder="Search for a class..."
        onChange={handleChange}
       />
     </label>
    </CenteredDiv>
  );
}

export default SearchForm;
