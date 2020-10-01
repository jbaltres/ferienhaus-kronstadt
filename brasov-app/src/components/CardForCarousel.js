import React from "react"
import styled from "styled-components"

const CardStyle = styled.div`
width: 700px;
height: 200px;
background: #333;
color: #fff;
font-size: 30px;
margin: 20px;
display: flex;
justify-content: center;
align-items: center;
`;

const CardForCarousel = ({number}) =>

<CardStyle>{number}</CardStyle>

export default CardForCarousel;