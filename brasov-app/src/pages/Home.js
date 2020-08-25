import React from "react";
import styled from "styled-components"
import Wohnungnen from "../components/Wohnungen";

const HomeText = styled.span`
font-size: 1.1em
`;

export default function Home() {
  return <HomeText>
    <Wohnungnen/>
  </HomeText>;
}

