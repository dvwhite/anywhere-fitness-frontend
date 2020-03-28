import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

// Styled components
import styled from 'styled-components';

const Card = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: 345px;
  height: 170px;
  margin: 2%;
  padding: 2%;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px #444;
  }
`

const Class = ({ data }) => {
  console.log(data)
  const params = useParams();
  const id = params.id;
  const category = data?.category?.name;
  const formattedCategory = category && category[0].toUpperCase() + category.slice(1);
  return (
    <Card>
      <NavLink to={`/user/${id}/classes/${data?.id}`}>
        <h2>{data?.title}</h2>
        <p>Instructor: #{data?.instructorId}</p>
        <p>Category: {formattedCategory}</p>
      </NavLink>
    </Card>
  );
};

export default Class;
