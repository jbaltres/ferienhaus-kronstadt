import React from "react";
import styled from "styled-components";

function Header(props) {
  const Title = styled.header`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgb(0, 0, 0);
    margin: 0;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
    z-index: 2000;
    justify-content: space-around;
    width: 100%;
    position: fixed;
  `;

  const Headline = styled.span`
    font-size: 25px;
    color: rgb(0, 195, 238);

    flex-grow: 1;
    text-align: center;
    font-family: -apple-system, BShitMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  `;

  const CurrentFlag = styled.img`
    display: flex;
    width: 35px;
    height: 35px;
    margin-right: 8%;
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
