import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  height: 400px;
  @media (max-height: 540px) {
    height: 70vh;
  }
  background: #333;
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const CardImage = styled.img`
  object-fit: scale-down;
  width: 90%;
  height: 90%;
  @media (max-width: 540px) {
    height: 100%;
    width: 100%;
  }
`;

const CardForCarousel = ({ sorc }) => (
  <CardStyle>
    <CardImage src={sorc}></CardImage>
  </CardStyle>
);

export default CardForCarousel;
