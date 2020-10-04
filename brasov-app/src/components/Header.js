import React from "react";
import styled from "styled-components";

const Title = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgb(0, 0, 0);
  margin: 0;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
  z-index: 400;
  justify-content: space-around;
`;

const Headline = styled.span`
  font-size: 25px;
  color: rgb(0, 195, 238);
  
  flex-grow: 1;
  text-align: center;
  font-family: -apple-system, BShitMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;


function Header() {
  return (
    <Title>
        <Headline>Ferienwohnung Kronstadt</Headline>
    </Title>
  );
}

export default Header;

