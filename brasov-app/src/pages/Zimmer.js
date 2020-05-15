import React from "react";
import styled from "styled-components"


const Card = styled.span`
  display: flex;
  background-color: blue
  border-radius: 10px;
  margin: 10px 20px;
  
  height: 450px;
  align-items: center;
  flex-wrap: wrap;
`;

const CardHeadline = styled.h2`
  color: grey
`;

const Image = styled.img`
  width: 320px;
  height: 200px
  border-radius: 30%;
  margin: 0px 25px;
`;

const DescriptionText = styled.p`
color: yellow;
text-align:cente;
flex-grow:1;
overflow: scroll;
`;

export default function Home() {
  return (
 <>   
  <Card>
    <Image src="https://a0.muscache.com/im/pictures/0010b431-bdca-40fc-8003-9d0063c3627b.jpg?aki_policy=xx_large"></Image>
    <DescriptionText>Hóla </DescriptionText>
  </Card>
  <Card>
  <Image src="https://a0.muscache.com/im/pictures/0010b431-bdca-40fc-8003-9d0063c3627b.jpg?aki_policy=xx_large"></Image>
  <DescriptionText>Hóla </DescriptionText>
  </Card>
  <Card>
    <Image src="https://a0.muscache.com/im/pictures/0010b431-bdca-40fc-8003-9d0063c3627b.jpg?aki_policy=xx_large"></Image>
    <DescriptionText>Hóla </DescriptionText>
  </Card>
 </> 
  )
}
