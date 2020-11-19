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

function NavBar({ language, handleToggle }) {
  const Title = styled.span`
    display: flex;
    align-items: center;
    padding: 10px;
    
    margin: 0;
    z-index: 400;
    justify-content: space-around;
    @media (max-width: 750px) {
      flex-direction: column;
      align-items: flex-start;
    }
    flex-grow: 1;
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
    width: 150px;
    box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.8) inset;
    display: flex;
    align-items: center;
    height: 100%;

    :hover {
      transform: 1.5em;
      box-shadow: 0 4px 8px 0 rgb(0,195,238) inset,
        0 6px 20px 0 rgb(0,195,238);
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
