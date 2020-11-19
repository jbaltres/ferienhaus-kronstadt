import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import {
  deutsch,
  englisch,
  rumänisch,
  hebräisch,
  spanisch,
  ungarisch,
  französisch,
} from "../languages/api";

const Site = styled.div`
  background: papayawhip;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1.2rem;
`;

const Pricing = styled.ul`
  list-style: none;
  margin: 2em;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 50px;
  color: white;
  background: ${(props) => props.bgcolor || "yellow"};
  position: relative;
  width: 350px; /* width of each table */
  margin-right: 30px; /* spacing between tables */
  margin-bottom: 1em;
  transition: all 0.5s;

  :hover {
    transition: all 0.5s;
    z-index: 100;
    box-shadow: 0 0 10px gray;
  }
`;
const Phone = styled.div`
display:none;
background-color: rgba(41,49,51,0.6);
width:fit-content;
border-radius:10px;
padding: 3px 10px;
`;

const ListItem = styled.li`
  margin: 10px 20px;
  position: relative;
  &:hover ${Phone} {
    display:flex;  
    }
`;

const LiTitle = styled.li`
  font-size: 150%;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  text-transform: uppercase;
  border-bottom: 5px solid white;
`;

const LinkButton = styled.button`
  background: #31a3cb;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  max-width: 150px;
  margin: 10px auto;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;

  :hover {
    transform: scale(.9);
    box-shadow: 0 4px 8px 0 rgba(0,195,238,1),
      0 6px 20px 0 rgba(0,195,238,1);
  }
`;
const HoverTextContainer = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 10000;


:hover  {
  visibility: visible;}`;

const LinkButton2 = styled.button`
  background: #fd7d67;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  max-width: 150px;
  margin: 10px auto;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;

  :hover {
    transform: scale(.9);
    box-shadow: 0 4px 8px 0 #ff9f99,
      0 6px 20px 0 #fd7d67;
  }
`;

const Anker = styled.a`
  text-decoration: none;
  color: white;
`;

export default function Preise(props) {
  console.log("die sprache ist" + props.language);
  const pic1 =
    "https://a0.muscache.com/im/pictures/62c9cb76-c15d-44a2-bea2-52d36a82dbc6.jpg?im_w=1200";
  const pic2 =
    "https://a0.muscache.com/im/pictures/1c24f67e-9944-4b61-b1ab-b71be2b32619.jpg?im_w=1200";
  console.log(pic1);

  return (
    <Site>
      <Pricing bgcolor="linear-gradient(316deg, #fd6c6c, #ffb35a)">
        <Slider pic1={pic1}></Slider>
        <LiTitle>Appartment I</LiTitle>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld1
              : props.language === "englisch"
              ? englisch.Feld1
              : props.language === "rumänisch"
              ? rumänisch.Feld1
              : props.language === "ungarisch"
              ? ungarisch.Feld1
              : props.language === "französisch"
              ? französisch.Feld1
              : props.language === "spanisch"
              ? spanisch.Feld1
              : props.language === "hebräisch"
              ? hebräisch.Feld1
              : "ciao bella"}
          </b>{" "}
          2-4
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld3
              : props.language === "englisch"
              ? englisch.Feld3
              : props.language === "rumänisch"
              ? rumänisch.Feld3
              : props.language === "ungarisch"
              ? ungarisch.Feld3
              : props.language === "französisch"
              ? französisch.Feld3
              : props.language === "spanisch"
              ? spanisch.Feld3
              : props.language === "hebräisch"
              ? hebräisch.Feld3
              : "ciao bella"}
          </b>{" "}
          2
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld5
              : props.language === "englisch"
              ? englisch.Feld5
              : props.language === "rumänisch"
              ? rumänisch.Feld5
              : props.language === "ungarisch"
              ? ungarisch.Feld5
              : props.language === "französisch"
              ? französisch.Feld5
              : props.language === "spanisch"
              ? spanisch.Feld5
              : props.language === "hebräisch"
              ? hebräisch.Feld5
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld6
            : props.language === "englisch"
            ? englisch.Feld6
            : props.language === "rumänisch"
            ? rumänisch.Feld6
            : props.language === "ungarisch"
            ? ungarisch.Feld6
            : props.language === "französisch"
            ? französisch.Feld6
            : props.language === "spanisch"
            ? spanisch.Feld6
            : props.language === "hebräisch"
            ? hebräisch.Feld6
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld7
              : props.language === "englisch"
              ? englisch.Feld7
              : props.language === "rumänisch"
              ? rumänisch.Feld7
              : props.language === "ungarisch"
              ? ungarisch.Feld7
              : props.language === "französisch"
              ? französisch.Feld7
              : props.language === "spanisch"
              ? spanisch.Feld7
              : props.language === "hebräisch"
              ? hebräisch.Feld7
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld8
            : props.language === "englisch"
            ? englisch.Feld8
            : props.language === "rumänisch"
            ? rumänisch.Feld8
            : props.language === "ungarisch"
            ? ungarisch.Feld8
            : props.language === "französisch"
            ? französisch.Feld8
            : props.language === "spanisch"
            ? spanisch.Feld8
            : props.language === "hebräisch"
            ? hebräisch.Feld8
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>Netflix:</b>
          <span role="img" aria-label="Yes">
            ✔️
          </span>{" "}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld11
              : props.language === "englisch"
              ? englisch.Feld11
              : props.language === "rumänisch"
              ? rumänisch.Feld11
              : props.language === "ungarisch"
              ? ungarisch.Feld11
              : props.language === "französisch"
              ? französisch.Feld11
              : props.language === "spanisch"
              ? spanisch.Feld11
              : props.language === "hebräisch"
              ? hebräisch.Feld11
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld12
            : props.language === "englisch"
            ? englisch.Feld12
            : props.language === "rumänisch"
            ? rumänisch.Feld12
            : props.language === "ungarisch"
            ? ungarisch.Feld12
            : props.language === "französisch"
            ? französisch.Feld12
            : props.language === "spanisch"
            ? spanisch.Feld12
            : props.language === "hebräisch"
            ? hebräisch.Feld12
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld13
              : props.language === "englisch"
              ? englisch.Feld13
              : props.language === "rumänisch"
              ? rumänisch.Feld13
              : props.language === "ungarisch"
              ? ungarisch.Feld13
              : props.language === "französisch"
              ? französisch.Feld13
              : props.language === "spanisch"
              ? spanisch.Feld13
              : props.language === "hebräisch"
              ? hebräisch.Feld13
              : "ciao bella"}
          </b>
        
          <Phone>02261 - 608317</Phone>
        </ListItem>
        <LinkButton>
          <Anker href="https://www.airbnb.de/rooms/30269340?source_impression_id=p3_1601834562_KoGO5jV8I6w0ewSM">
            {props.language === "deutsch"
              ? deutsch.AirBnbButton
              : props.language === "englisch"
              ? englisch.AirBnbButton
              : props.language === "rumänisch"
              ? rumänisch.AirBnbButton
              : props.language === "ungarisch"
              ? ungarisch.AirBnbButton
              : props.language === "französisch"
              ? französisch.AirBnbButton
              : props.language === "spanisch"
              ? spanisch.AirBnbButton
              : props.language === "hebräisch"
              ? hebräisch.AirBnbButton
              : "ciao bella"}{" "}
          </Anker>
        </LinkButton>
      </Pricing>
      <Pricing bgcolor="linear-gradient(316deg, #0de1b4, #3297d0)">
        <Slider pic1={pic2}></Slider>
        <LiTitle>Garsoniera</LiTitle>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld1
              : props.language === "englisch"
              ? englisch.Feld1
              : props.language === "rumänisch"
              ? rumänisch.Feld1
              : props.language === "ungarisch"
              ? ungarisch.Feld1
              : props.language === "französisch"
              ? französisch.Feld1
              : props.language === "spanisch"
              ? spanisch.Feld1
              : props.language === "hebräisch"
              ? hebräisch.Feld1
              : "ciao bella"}
          </b>{" "}
          1-2
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld3
              : props.language === "englisch"
              ? englisch.Feld3
              : props.language === "rumänisch"
              ? rumänisch.Feld3
              : props.language === "ungarisch"
              ? ungarisch.Feld3
              : props.language === "französisch"
              ? französisch.Feld3
              : props.language === "spanisch"
              ? spanisch.Feld3
              : props.language === "hebräisch"
              ? hebräisch.Feld3
              : "ciao bella"}
          </b>{" "}
          1
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld5
              : props.language === "englisch"
              ? englisch.Feld5
              : props.language === "rumänisch"
              ? rumänisch.Feld5
              : props.language === "ungarisch"
              ? ungarisch.Feld5
              : props.language === "französisch"
              ? französisch.Feld5
              : props.language === "spanisch"
              ? spanisch.Feld5
              : props.language === "hebräisch"
              ? hebräisch.Feld5
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld6Garsoniera
            : props.language === "englisch"
            ? englisch.Feld6Garsoniera
            : props.language === "rumänisch"
            ? rumänisch.Feld6Garsoniera
            : props.language === "ungarisch"
            ? ungarisch.Feld6Garsoniera
            : props.language === "französisch"
            ? französisch.Feld6Garsoniera
            : props.language === "spanisch"
            ? spanisch.Feld6Garsoniera
            : props.language === "hebräisch"
            ? hebräisch.Feld6Garsoniera
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld7
              : props.language === "englisch"
              ? englisch.Feld7
              : props.language === "rumänisch"
              ? rumänisch.Feld7
              : props.language === "ungarisch"
              ? ungarisch.Feld7
              : props.language === "französisch"
              ? französisch.Feld7
              : props.language === "spanisch"
              ? spanisch.Feld7
              : props.language === "hebräisch"
              ? hebräisch.Feld7
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld8
            : props.language === "englisch"
            ? englisch.Feld8
            : props.language === "rumänisch"
            ? rumänisch.Feld8
            : props.language === "ungarisch"
            ? ungarisch.Feld8
            : props.language === "französisch"
            ? französisch.Feld8
            : props.language === "spanisch"
            ? spanisch.Feld8
            : props.language === "hebräisch"
            ? hebräisch.Feld8
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>Netflix:</b>{" "}
          <span role="img" aria-label="Yes">
            ✔️
          </span>
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld11
              : props.language === "englisch"
              ? englisch.Feld11
              : props.language === "rumänisch"
              ? rumänisch.Feld11
              : props.language === "ungarisch"
              ? ungarisch.Feld11
              : props.language === "französisch"
              ? französisch.Feld11
              : props.language === "spanisch"
              ? spanisch.Feld11
              : props.language === "hebräisch"
              ? hebräisch.Feld11
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld12Garsoniera
            : props.language === "englisch"
            ? englisch.Feld12Garsoniera
            : props.language === "rumänisch"
            ? rumänisch.Feld12Garsoniera
            : props.language === "ungarisch"
            ? ungarisch.Feld12Garsoniera
            : props.language === "französisch"
            ? französisch.Feld12Garsoniera
            : props.language === "spanisch"
            ? spanisch.Feld12Garsoniera
            : props.language === "hebräisch"
            ? hebräisch.Feld12Garsoniera
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld13
              : props.language === "englisch"
              ? englisch.Feld13
              : props.language === "rumänisch"
              ? rumänisch.Feld13
              : props.language === "ungarisch"
              ? ungarisch.Feld13
              : props.language === "französisch"
              ? französisch.Feld13
              : props.language === "spanisch"
              ? spanisch.Feld13
              : props.language === "hebräisch"
              ? hebräisch.Feld13
              : "ciao bella"}
          </b>
          <Phone>02261 - 608317</Phone>
        </ListItem>
        <LinkButton2>
          <Anker href="https://www.airbnb.de/rooms/34850424?source_impression_id=p3_1601834588_OEdf7%2BUXKmqAkEo2">
            {" "}
            {props.language === "deutsch"
              ? deutsch.AirBnbButton
              : props.language === "englisch"
              ? englisch.AirBnbButton
              : props.language === "rumänisch"
              ? rumänisch.AirBnbButton
              : props.language === "ungarisch"
              ? ungarisch.AirBnbButton
              : props.language === "französisch"
              ? französisch.AirBnbButton
              : props.language === "spanisch"
              ? spanisch.AirBnbButton
              : props.language === "hebräisch"
              ? hebräisch.AirBnbButton
              : "ciao bella"}
          </Anker>
        </LinkButton2>
      </Pricing>
      <Pricing bgcolor="linear-gradient(316deg, #fd6c6c, #ffb35a)">
        <Slider pic1={pic1}></Slider>
        <LiTitle>Appartment II</LiTitle>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld1
              : props.language === "englisch"
              ? englisch.Feld1
              : props.language === "rumänisch"
              ? rumänisch.Feld1
              : props.language === "ungarisch"
              ? ungarisch.Feld1
              : props.language === "französisch"
              ? französisch.Feld1
              : props.language === "spanisch"
              ? spanisch.Feld1
              : props.language === "hebräisch"
              ? hebräisch.Feld1
              : "ciao bella"}
          </b>{" "}
          2-4
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld3
              : props.language === "englisch"
              ? englisch.Feld3
              : props.language === "rumänisch"
              ? rumänisch.Feld3
              : props.language === "ungarisch"
              ? ungarisch.Feld3
              : props.language === "französisch"
              ? französisch.Feld3
              : props.language === "spanisch"
              ? spanisch.Feld3
              : props.language === "hebräisch"
              ? hebräisch.Feld3
              : "ciao bella"}
          </b>{" "}
          2
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld5
              : props.language === "englisch"
              ? englisch.Feld5
              : props.language === "rumänisch"
              ? rumänisch.Feld5
              : props.language === "ungarisch"
              ? ungarisch.Feld5
              : props.language === "französisch"
              ? französisch.Feld5
              : props.language === "spanisch"
              ? spanisch.Feld5
              : props.language === "hebräisch"
              ? hebräisch.Feld5
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld6
            : props.language === "englisch"
            ? englisch.Feld6
            : props.language === "rumänisch"
            ? rumänisch.Feld6
            : props.language === "ungarisch"
            ? ungarisch.Feld6
            : props.language === "französisch"
            ? französisch.Feld6
            : props.language === "spanisch"
            ? spanisch.Feld6
            : props.language === "hebräisch"
            ? hebräisch.Feld6
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld7
              : props.language === "englisch"
              ? englisch.Feld7
              : props.language === "rumänisch"
              ? rumänisch.Feld7
              : props.language === "ungarisch"
              ? ungarisch.Feld7
              : props.language === "französisch"
              ? französisch.Feld7
              : props.language === "spanisch"
              ? spanisch.Feld7
              : props.language === "hebräisch"
              ? hebräisch.Feld7
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld8
            : props.language === "englisch"
            ? englisch.Feld8
            : props.language === "rumänisch"
            ? rumänisch.Feld8
            : props.language === "ungarisch"
            ? ungarisch.Feld8
            : props.language === "französisch"
            ? französisch.Feld8
            : props.language === "spanisch"
            ? spanisch.Feld8
            : props.language === "hebräisch"
            ? hebräisch.Feld8
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>Netflix:</b>
          <span role="img" aria-label="Yes">
            ✔️
          </span>{" "}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld11
              : props.language === "englisch"
              ? englisch.Feld11
              : props.language === "rumänisch"
              ? rumänisch.Feld11
              : props.language === "ungarisch"
              ? ungarisch.Feld11
              : props.language === "französisch"
              ? französisch.Feld11
              : props.language === "spanisch"
              ? spanisch.Feld11
              : props.language === "hebräisch"
              ? hebräisch.Feld11
              : "ciao bella"}
          </b>{" "}
          {props.language === "deutsch"
            ? deutsch.Feld12APPII
            : props.language === "englisch"
            ? englisch.Feld12APPII
            : props.language === "rumänisch"
            ? rumänisch.Feld12APPII
            : props.language === "ungarisch"
            ? ungarisch.Feld12APPII
            : props.language === "französisch"
            ? französisch.Feld12APPII
            : props.language === "spanisch"
            ? spanisch.Feld12APPII
            : props.language === "hebräisch"
            ? hebräisch.Feld12APPII
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {props.language === "deutsch"
              ? deutsch.Feld13
              : props.language === "englisch"
              ? englisch.Feld13
              : props.language === "rumänisch"
              ? rumänisch.Feld13
              : props.language === "ungarisch"
              ? ungarisch.Feld13
              : props.language === "französisch"
              ? französisch.Feld13
              : props.language === "spanisch"
              ? spanisch.Feld13
              : props.language === "hebräisch"
              ? hebräisch.Feld13
              : "ciao bella"}
          </b>
          <Phone>02261 - 608317</Phone>
        </ListItem>
        <LinkButton>
        <Anker onClick={ () => alert("Dieses Zimmer ist Momentan nicht verfügbar. Verfügbarkeiten & Zimmerbuchungen unter 02261 - 59694")}>
            {props.language === "deutsch"
              ? deutsch.AirBnbButton
              : props.language === "englisch"
              ? englisch.AirBnbButton
              : props.language === "rumänisch"
              ? rumänisch.AirBnbButton
              : props.language === "ungarisch"
              ? ungarisch.AirBnbButton
              : props.language === "französisch"
              ? französisch.AirBnbButton
              : props.language === "spanisch"
              ? spanisch.AirBnbButton
              : props.language === "hebräisch"
              ? hebräisch.AirBnbButton
              : "ciao bella"}{" "}
          </Anker>
        </LinkButton>
      </Pricing>
    </Site>
  );
}
/*
<Pricing bgcolor="rgba(63,127,191,0.6)">
        <Slider pic1={pic2}></Slider>
        <LiTitle>App II</LiTitle>
        <ListItem>
          <b>Persons:</b> 2-4
        </ListItem>
        <ListItem>
          <b>Rooms:</b> 2
        </ListItem>
        <ListItem>
          <b>Kitchen:</b> Yes
        </ListItem>
        <ListItem>
          <b>Bath:</b> Private
        </ListItem>
        <ListItem>
          <b>Netflix:</b>{" "}
          <span role="img" aria-label="Yes">
            ✔️
          </span>
        </ListItem>
        <ListItem>
          <b>Price:</b> 50€ / Night
        </ListItem>
        <LinkButton2>
          <Anker href="https://www.airbnb.de/rooms/34850424?source_impression_id=p3_1601834588_OEdf7%2BUXKmqAkEo2">
            Hier Verfügbarkeit überprüfen und buchen
          </Anker>
        </LinkButton2>
      </Pricing>
*/
