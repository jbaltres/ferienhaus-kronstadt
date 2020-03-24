import React from "react";
import styled from "styled-components";


const QuaderBox = styled.div`
display: flex;
justify-content: center
`;

const Quader = styled.img`
width: 50%;
height: 90px;
background: red;
display: flex;
align-items: center;
justify-content: center;
margin: 10px
`;

export default function Slider() {
  return (
    <QuaderBox> 
        <Quader src="https://a0.muscache.com/im/pictures/62c9cb76-c15d-44a2-bea2-52d36a82dbc6.jpg?aki_policy=xx_large"></Quader>
    </QuaderBox>   
  )
}