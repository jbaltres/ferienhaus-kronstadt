import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import CardForCarousel from "../components/CardForCarousel";

const Card = styled.span`
  display: flex;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 7px 0px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  margin: 5px 5px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Ha2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 160, 238);
  box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.2) inset;
  height: 2em;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 750, itemsToShow: 2, itemsToScroll: 2 },
];

export default function Gallerie() {
  return (
    <>
      <Ha2>Appartment 1</Ha2>
      <Card>
        <Carousel breakPoints={breakPoints}>
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/62c9cb76-c15d-44a2-bea2-52d36a82dbc6.jpg?im_w=1200" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/c0bd4e02-a887-4db7-87ac-ba2dbf6aa174.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/3cc60e07-996c-431d-b395-523b7ad737f9.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/0010b431-bdca-40fc-8003-9d0063c3627b.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/5064c465-6c5c-403e-98fd-99e310cf9932.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/491a0c4d-d129-414d-bf7d-8e1e10cb509e.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/bae115d3-34ab-42b0-b007-7235db78a670.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/69c4c6d7-48d7-4338-8208-bf5c358effb9.jpg?im_w=1440" />
        </Carousel>
      </Card>
      <br></br>
      <br></br>
      <Ha2>Garsoniera</Ha2>
      <Card>
        <Carousel breakPoints={breakPoints}>
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/1c24f67e-9944-4b61-b1ab-b71be2b32619.jpg?im_w=1200" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/60d16fb7-35e2-4291-9193-5db96c0c92b8.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/ba4a6185-c311-4a60-88c9-e34854245892.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/453cbfe6-283e-480c-bbc1-de15987371c0.jpg?im_w=1440" />
          <CardForCarousel sorc="https://a0.muscache.com/im/pictures/2c9ed2ba-31e7-4a2c-b2ce-b7d0aa76534a.jpg?im_w=1440" />
        </Carousel>
      </Card>
      <br></br>
    </>
  );
}
