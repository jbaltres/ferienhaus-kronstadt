import React from "react";
import styled from "styled-components"
import Wohnungnen from "../components/Wohnungen";
import CardForCarousel from "../components/CardForCarousel"
import Carousel from "react-elastic-carousel"

const CarouselBox = styled.div`
width: 80%;
margin-left:auto;
margin-right: auto;
`;

const HomeText = styled.span`
font-size: 1.1em
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2, itemsToScroll: 2 },
];

export default function Home() {
  return (
    <CarouselBox>
      <Carousel breakPoints={breakPoints}>
        <CardForCarousel number="1"></CardForCarousel>
        <CardForCarousel number="2"></CardForCarousel>
        <CardForCarousel number="3"></CardForCarousel>
        <CardForCarousel number="4"></CardForCarousel>
        <CardForCarousel number="5"></CardForCarousel>
        <CardForCarousel number="6"></CardForCarousel>
        <CardForCarousel number="7"></CardForCarousel>
     </Carousel>  
    </CarouselBox>  
  )
}

