import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  deutsch,
  englisch,
  rumänisch,
  hebräisch,
  spanisch,
  ungarisch,
  französisch,
} from "../languages/api";

function NavBar({ language }) {
  const Title = styled.span`
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0;
    z-index: 400;
    justify-content: space-around;
    @media (max-width: 550px) {
      flex-direction: column;
      align-items: center;
    }
    flex-grow: 1;
  `;

  const NavigationText = styled.span`
    font-size: 25px;
    color: white;
    flex-grow: 1;
    text-align: center;
    :hover{
      color: rgba(41,49,51,0.8);
    }
  `;

  const LinkDecoration = styled(Link)`
    text-decoration: none;
    margin: 3px;
    width: 150px;
    box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.4) inset;
    border-radius:7px;
    padding:3px;
    display: flex;
    align-items: center;
    height: 100%;
    
    :hover {
      background: linear-gradient(45deg,#1ed0bb,#ffad5c);
    }

    @media (max-width: 550px) {
      width: 80%;
    }
  `;



 
  return (
    <Title>
      
      <LinkDecoration to="/home">
        <NavigationText>
          {language === "deutsch"
            ? deutsch.HomeLink
            : language === "englisch"
            ? englisch.HomeLink
            : language === "rumänisch"
            ? rumänisch.HomeLink
            : language === "ungarisch"
            ? ungarisch.HomeLink
            : language === "französisch"
            ? französisch.HomeLink
            : language === "spanisch"
            ? spanisch.HomeLink
            : language === "hebräisch"
            ? hebräisch.HomeLink
            : "ciao bella"}
        </NavigationText>
      </LinkDecoration>
      <LinkDecoration to="/zimmer">
        <NavigationText>
          {language === "deutsch"
            ? deutsch.ZimmerLink
            : language === "englisch"
            ? englisch.ZimmerLink
            : language === "rumänisch"
            ? rumänisch.ZimmerLink
            : language === "ungarisch"
            ? ungarisch.ZimmerLink
            : language === "französisch"
            ? französisch.ZimmerLink
            : language === "spanisch"
            ? spanisch.ZimmerLink
            : language === "hebräisch"
            ? hebräisch.ZimmerLink
            : "ciao bella"}
        </NavigationText>
      </LinkDecoration>
      <LinkDecoration to="/gallery">
        <NavigationText>
          {language === "deutsch"
            ? deutsch.GallerieLink
            : language === "englisch"
            ? englisch.GallerieLink
            : language === "rumänisch"
            ? rumänisch.GallerieLink
            : language === "ungarisch"
            ? ungarisch.GallerieLink
            : language === "französisch"
            ? französisch.GallerieLink
            : language === "spanisch"
            ? spanisch.GallerieLink
            : language === "hebräisch"
            ? hebräisch.GallerieLink
            : "ciao bella"}
        </NavigationText>
      </LinkDecoration>
    </Title>
  );
}

export default NavBar;
