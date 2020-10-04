import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
width:100%;
height:400px;
display:flex; 
justify-content: space-around;
@media (max-width: 768px) {
  margin: 0px;
};
margin: 10px 0px ;
`;

const HeadImage = styled.img`
float:left;
 height:100%;
 object-fit:cover;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  };
  display: block;
`;

const HeadImage2 = styled.img`
float:left;
 height:100%;
 object-fit:cover;
  width: 45%;
  @media (max-width: 768px) {
    width: 0%;
  };
  display: block;
`;


function MainImage() {
    return (
        <HeaderContainer>
          <HeadImage src="https://urlaub-in-rumänien.de/wp-content/uploads/2017/02/3240px-Brasov_Piata_Sfatului.jpg" alt="Pic1"/> 
          <HeadImage2 src="https://s.inyourpocket.com/img/figure/2015-04/dreamstime_xxl_18728583.jpg" alt="Pic2"/> 
        </HeaderContainer>
    );
  }




export default MainImage;

