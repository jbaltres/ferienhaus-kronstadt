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
  justify-content: space-around;
`;

const NavigationText = styled.span`
  font-size: 25px;
  color: rgb(0, 195, 238);
  flex-grow: 1;
  text-align: center;
  font-family: -apple-system, BShitMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Shit = styled(Link)`
text-decoration: none;
`;

function NavBar() {
  return (
    <Title>
      <Shit to="/home">
        <NavigationText>Home</NavigationText>
      </Shit>   
      <Shit to="/zimmer">
        <NavigationText>Zimmer</NavigationText>
      </Shit>     
      <Shit to="/preise">
        <NavigationText>Preise</NavigationText>
      </Shit> 
      <Shit to="/aboutkronstadt">
        <NavigationText>Über Kronstadt</NavigationText> 
      </Shit>
    </Title>
  );
}

export default NavBar;

