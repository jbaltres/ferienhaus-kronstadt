import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.span`
  display: ${props => props.changeToggle ? "none" : "flex"};
  align-items: center;
  padding: 10px;
  background-color: rgb(0, 0, 0);
  margin: 0;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
  z-index: 400;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  };
  flex-grow:1;
`;

const NavigationText = styled.span`
  font-size: 25px;
  color: rgb(0, 195, 238);
  
  flex-grow: 1;
  text-align: center;
  font-family: -apple-system, BShitMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const LinkDecoration = styled(Link)`
text-decoration: none;
margin: 3px;
width:150px
box-shadow:-6px -9px 22px hsla(300,15%,25%,0.8) inset
`;

function NavBar({handleToggle}) {
  return (
    <Title changeToggle={handleToggle}>
      <LinkDecoration to="/home">
        <NavigationText>Home</NavigationText>
      </LinkDecoration>   
      <LinkDecoration to="/zimmer">
        <NavigationText>Zimmer</NavigationText>
      </LinkDecoration>     
      <LinkDecoration to="/preise">
        <NavigationText>Preise</NavigationText>
      </LinkDecoration> 
    </Title>
  );
}

export default NavBar;

