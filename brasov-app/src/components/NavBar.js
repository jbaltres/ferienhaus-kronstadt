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

const Title = styled.span`
  display: ${(props) => (props.changeToggle ? "none" : "flex")};
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
`;

function NavBar(props, { handleToggle }) {
  return (
    <Title changeToggle={handleToggle}>
      <LinkDecoration to="/home">
        <NavigationText>
          {props.language === "deutsch"
            ? deutsch.HomeLink
            : props.language === "englisch"
            ? englisch.HomeLink
            : props.language === "rumänisch"
            ? rumänisch.HomeLink
            : props.language === "ungarisch"
            ? ungarisch.HomeLink
            : props.language === "französisch"
            ? französisch.HomeLink
            : props.language === "spanisch"
            ? spanisch.HomeLink
            : props.language === "hebräisch"
            ? hebräisch.HomeLink
            : "ciao bella"}
        </NavigationText>
      </LinkDecoration>
      <LinkDecoration to="/zimmer">
        <NavigationText>
          {props.language === "deutsch"
            ? deutsch.ZimmerLink
            : props.language === "englisch"
            ? englisch.ZimmerLink
            : props.language === "rumänisch"
            ? rumänisch.ZimmerLink
            : props.language === "ungarisch"
            ? ungarisch.ZimmerLink
            : props.language === "französisch"
            ? französisch.ZimmerLink
            : props.language === "spanisch"
            ? spanisch.ZimmerLink
            : props.language === "hebräisch"
            ? hebräisch.ZimmerLink
            : "ciao bella"}
        </NavigationText>
      </LinkDecoration>
      <LinkDecoration to="/gallery">
        <NavigationText>
          {props.language === "deutsch"
            ? deutsch.GallerieLink
            : props.language === "englisch"
            ? englisch.GallerieLink
            : props.language === "rumänisch"
            ? rumänisch.GallerieLink
            : props.language === "ungarisch"
            ? ungarisch.GallerieLink
            : props.language === "französisch"
            ? französisch.GallerieLink
            : props.language === "spanisch"
            ? spanisch.GallerieLink
            : props.language === "hebräisch"
            ? hebräisch.GallerieLink
            : "ciao bella"}
        </NavigationText>
      </LinkDecoration>
    </Title>
  );
}

export default NavBar;
