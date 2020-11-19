import React from "react";
import styled from "styled-components";

function Header(props) {
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
    opacity:0.9;
  `;

  const Headline = styled.span`
    font-size: 25px;
    font-family: cursive;
    flex-grow: 1;
    text-align: center;
  `;

  const CurrentFlag = styled.img`
    display: flex;
    width: 35px;
    height: 35px;
    margin-right: 2%;
    margin-left: 7px;
  `;

  return (
    <Title>
      <Headline>Ferienwohnung Kronstadt</Headline>
      {props.language === "deutsch" ? (
        <CurrentFlag src="https://cdn.countryflags.com/thumbs/germany/flag-round-250.png"></CurrentFlag>
      ) : props.language === "englisch" ? (
        <CurrentFlag src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png"></CurrentFlag>
      ) : props.language === "rumänisch" ? (
        <CurrentFlag src="https://cdn.countryflags.com/thumbs/romania/flag-button-round-250.png"></CurrentFlag>
      ) : props.language === "spanisch" ? (
        <CurrentFlag src="https://cdn.countryflags.com/thumbs/spain/flag-button-round-250.png"></CurrentFlag>
      ) : props.language === "ungarisch" ? (
        <CurrentFlag src="https://cdn.countryflags.com/thumbs/hungary/flag-button-round-250.png"></CurrentFlag>
      ) : props.language === "französisch" ? (
        <CurrentFlag src="https://cdn.countryflags.com/thumbs/france/flag-3d-round-250.png"></CurrentFlag>
      ) : (
        <CurrentFlag src="https://cdn.countryflags.com/thumbs/israel/flag-3d-round-250.png"></CurrentFlag>
      )}
    </Title>
  );
}

export default Header;
