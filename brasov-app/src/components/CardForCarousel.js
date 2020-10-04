import React from "react"
import styled from "styled-components"

const CardStyle = styled.img`
width: 100%;
height: 400px;
@media (max-height: 540px) {
    height: 200px;
  };
background: #333;
color: #fff;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
object-fit: scale-down
margin: 5px;
`;

const CardForCarousel = ({sorc}) =>

<CardStyle src={sorc}></CardStyle>

export default CardForCarousel;