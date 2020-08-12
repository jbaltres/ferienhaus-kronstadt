import React from "react";
import styled from "styled-components";

const HeadImage = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  };
  height:300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;


function MainImage() {
    return (
        <HeadImage src="https://urlaub-in-rumänien.de/wp-content/uploads/2017/02/3240px-Brasov_Piata_Sfatului.jpg"/> 
    );
  }




export default MainImage;