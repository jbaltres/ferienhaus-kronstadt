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
    background-color: rgb(0, 0, 0);
    margin: 0;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
    z-index: 40;
    justify-content: space-around;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
    flex-grow: 1;

    animation-name: ${handleToggle ? "slide-in" : "slide-out"};
    animation-duration: ${handleToggle ? "1s" : "10000s"};
    animation-iteration-count: 1;

    @keyframes slide-in {
      0% {
        transform: translateX(-100%);
      }
      10% {
        transform: translateX(0px);
      }
      20% {
        transform: translateX(-80%);
      }
      30% {
        transform: translateX(0px);
      }
      40% {
        transform: translateX(-50%);
      }
      50% {
        transform: translateX(0px);
      }
      60% {
        transform: translateX(-30%);
      }
      70% {
        transform: translateX(0);
      }
      80% {
        transform: translateX(-10%);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes slide-out {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-10000000%);
      }
    }
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
      box-shadow: 0 4px 8px 0 rgba(0, 256, 0, 0.8) inset,
        0 6px 20px 0 rgba(0, 256, 0, 0.6);
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
