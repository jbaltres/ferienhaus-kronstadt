import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: rgb(0, 0, 0);
  margin: 0;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
  z-index: 400;
`;

const NavigationText = styled.h1`
  font-size: 25px;
  color: rgb(0, 195, 238);
  flex-grow: 1;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;


function NavBar() {
  return (
    <Title>
      <Link to="/home">
        <NavigationText>Home</NavigationText>
      </Link>   
      <Link to="/zimmer">
        <NavigationText>Zimmer</NavigationText>
      </Link>     
      <Link to="/preise">
        <NavigationText>Preise</NavigationText>
      </Link> 
      <Link to="/aboutkronstadt">
        <NavigationText>Über Kronstadt</NavigationText> 
      </Link>
    </Title>
  );
}

export default NavBar;

