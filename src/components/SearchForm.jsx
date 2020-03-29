import React, { useEffect } from "react";
import styled from 'styled-components';
import useLocalStorage from 'react-use-localstorage';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  margin: 2%;
`

const Input = styled.input`
  margin-top: 2%;
  width: 20%;
  font-size: 1.1rem;
  border-radius: 25px;
  border: 1px solid gray;
  outline: 0;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png');
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 2% 50%;
  padding: 1% 2.5%;

  @media (max-width: 1200px) {
    padding-left: 4%;
  }

  @media (max-width: 1000px) {
    width: 33%;
    padding-left: 5%;
  }

  @media (max-width: 550px) {
    width: 50%;
    padding-left: 7%;
  }
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
    <CenteredDiv>
      <Input
        type="text"
        name="search"
        value={searchTerm}
        placeholder="Search for a class..."
        onChange={handleChange}
      />
    </CenteredDiv>
  );
}

export default SearchForm;
