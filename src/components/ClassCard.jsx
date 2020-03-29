import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

// Redux imports
import { useSelector } from 'react-redux';

// Constants
import { fakeData } from './../constants/fakeData';

// Styled components
import styled from 'styled-components';

const Card = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: 345px;
  height: 250px;
  margin: 2%;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px #444;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  width: 345px;
  height: 250px;
`

const CardImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  overflow: hidden;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 0;
`

const CardContent = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: 0px;
  z-index: 1;
  background: white;
  text-align: center;

  & > h4 {
    font-size: 1.2rem;
    color: #444;
    margin: 3.5%;
    font-weight: bold;
    overflow: hidden;
  }
`


const ClassCard = ({ data }) => {
  // Grab the page params - for individual classes, this will be the class Id
  const categories = useSelector(state => state.categories);
  const params = useParams();
  const id = params.id;

  // Get the category
  const findCategory = id => {
    const categoryToFind = categories.find(
      category => Number(category.id) === Number(id)
    );
    return categoryToFind;
  };

  // Get the class data from state if no props are passed down
  const classes = useSelector(state => state.classes);
  const classInState = classes.find(classObj => Number(classObj.id) === Number(id));
  
  // Format the category
  const category = findCategory(data ? data?.categoryId : classInState?.categoryId)?.name;
  const formattedCategory = category && category[0].toUpperCase() + category.slice(1);
  const classImg = fakeData.imgClasses[data?.id];
  
  return (
    <Card>
      <NavLink to={`/user/${id}/classes/${data?.id}`}>
        <Row>
          <ImgWrapper>
            {classImg && <CardImg src={`${classImg}`} alt={`image of a ${data.name} class`}/>}
          </ImgWrapper>
          <CardContent>
            <h4>{data ? data?.title : classInState?.title}</h4>
          </CardContent>
        </Row>
      </NavLink>
    </Card>
  );
};

export default ClassCard;
