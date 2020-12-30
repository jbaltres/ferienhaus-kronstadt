import React from "react";
import styled from "styled-components";
import RathausMainImage from "../pictures/RathausMainImage.jpg";
import MainImageStrassenfest from "../pictures/MainImageStrassenfest.jpg";

const HeaderContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  padding-top:60px;
  margin-bottom:5px;
  justify-content: space-evenly;
  @media (max-width: 333px) {
    padding-top: 100px;
  }
`;

const HeadImage = styled.img`
  float: left;
  height: 100%;
  object-fit: cover;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
  display: block;
`;

const HeadImage2 = styled.img`
  float: left;
  height: 100%;
  object-fit: cover;
  width: 45%;
  @media (max-width: 768px) {
    width: 0%;
  }
  display: block;
`;

function MainImage() {
  return (
    <HeaderContainer>
      <HeadImage
        src={RathausMainImage}
        alt="Pic1"
      />
      <HeadImage2
        src={MainImageStrassenfest}
        alt="Pic2"
      />
    </HeaderContainer>
  );
}

export default MainImage;
