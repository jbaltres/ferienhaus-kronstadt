import React from "react";
import styled from "styled-components";
import deutschland from "../pictures/Flags/deutschland.png"
import frankreich from "../pictures/Flags/frankreich.svg"
import israel from "../pictures/Flags/israel.svg"
import rumanien from "../pictures/Flags/rumanien.svg"
import spanien from "../pictures/Flags/spanien.svg"
import vereinigtestaaten from "../pictures/Flags/vereinigte-staaten.svg"
import ungarn from "../pictures/Flags/ungarn.svg"

function Header({language, visible}) {
  const Title = styled.header`
    display: flex;
    align-items: center;
    padding: 10px;
    background: linear-gradient(315deg, #ffad5c,#1ed0bb);
    margin: 0;
    border-width: 2px;
    z-index: 3200;
    justify-content: space-around;
    width: 100vw;
    position: fixed;
    inline-size: -webkit-fill-available;
  `;

  const Headline = styled.span`
    font-size: 25px;
    color:white;
    flex-grow: 1;
    text-align: center;
  `;

  const CurrentFlag = styled.img`
    display: flex;
    width: 35px;
    height: 35px;
    margin-right: 2%;
    margin-left: 7px;
    transform: ${visible ? "rotate(1080deg)": "rotate(0)"};
    animation-name: turn;
    animation-duration: 1s;
    animation-iteration-count: 1;
    cursor: pointer;

  @keyframes turn {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: translateY(0deg);
      }}
  `;

  return (
    <Title>
      <Headline>Ferienwohnung Kronstadt</Headline>
      {language === "deutsch" ? (
        <CurrentFlag src={deutschland}></CurrentFlag>
      ) : language === "englisch" ? (
        <CurrentFlag src={vereinigtestaaten}></CurrentFlag>
      ) : language === "rumänisch" ? (
        <CurrentFlag src={rumanien}></CurrentFlag>
      ) : language === "spanisch" ? (
        <CurrentFlag src={spanien}></CurrentFlag>
      ) : language === "ungarisch" ? (
        <CurrentFlag src={ungarn}></CurrentFlag>
      ) : language === "französisch" ? (
        <CurrentFlag src={frankreich}></CurrentFlag>
      ) : (
        <CurrentFlag src={israel}></CurrentFlag>
      )}
    </Title>
  );
}

export default Header;
