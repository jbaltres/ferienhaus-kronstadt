import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import Bild5 from "../pictures/Bild5.jpg"
import {
  deutsch,
  englisch,
  rumänisch,
  hebräisch,
  spanisch,
  ungarisch,
  französisch,
} from "../languages/api";
import AlertBox from "../components/AlertBox";

export default function Preise({language}) {

const [show, setShow] = React.useState(true);

const [clickable, setClickable] = React.useState(true);

const handleDisable = () => setTimeout(function(){ setClickable(!clickable); }, 3000);

function handleonClick (){
  handleDisable()
  setShow(!show)
}
function handleonClick2 (){
  setClickable(true)
  setShow(!show)
}


console.log("Der Wert ist" +clickable)
  
        
        
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

const AlertWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;`;

const Button = styled.button`
display:${!show? "flex" : "none"};
font-size:1em;
position:fixed;
bottom:23%;
margin-left:auto;
margin-right:auto;
z-index:1999999999999;
background: ${!clickable ? "linear-gradient(45deg,#1ed0bb,#ffad5c)": "grey"};
color: #000;
padding:10px;
border-radius:6px;
cursor:pointer;
@media(min-width: 1256px) {
right:50%;    }
`;

  const pic1 =
    "https://a0.muscache.com/im/pictures/62c9cb76-c15d-44a2-bea2-52d36a82dbc6.jpg?im_w=1200";
  const pic2 =
    "https://a0.muscache.com/im/pictures/1c24f67e-9944-4b61-b1ab-b71be2b32619.jpg?im_w=1200";
  

  return (
    <Site>
      <Pricing bgcolor="linear-gradient(316deg, #fd6c6c, #ffb35a)">
        <Slider pic1={pic1}></Slider>
        <LiTitle>Appartment I</LiTitle>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld1
              : language === "englisch"
              ? englisch.Feld1
              : language === "rumänisch"
              ? rumänisch.Feld1
              : language === "ungarisch"
              ? ungarisch.Feld1
              : language === "französisch"
              ? französisch.Feld1
              : language === "spanisch"
              ? spanisch.Feld1
              : language === "hebräisch"
              ? hebräisch.Feld1
              : "ciao bella"}
          </b>{" "}
          2-4
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld3
              : language === "englisch"
              ? englisch.Feld3
              : language === "rumänisch"
              ? rumänisch.Feld3
              : language === "ungarisch"
              ? ungarisch.Feld3
              : language === "französisch"
              ? französisch.Feld3
              : language === "spanisch"
              ? spanisch.Feld3
              : language === "hebräisch"
              ? hebräisch.Feld3
              : "ciao bella"}
          </b>{" "}
          2
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld5
              : language === "englisch"
              ? englisch.Feld5
              : language === "rumänisch"
              ? rumänisch.Feld5
              : language === "ungarisch"
              ? ungarisch.Feld5
              : language === "französisch"
              ? französisch.Feld5
              : language === "spanisch"
              ? spanisch.Feld5
              : language === "hebräisch"
              ? hebräisch.Feld5
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld6
            : language === "englisch"
            ? englisch.Feld6
            : language === "rumänisch"
            ? rumänisch.Feld6
            : language === "ungarisch"
            ? ungarisch.Feld6
            : language === "französisch"
            ? französisch.Feld6
            : language === "spanisch"
            ? spanisch.Feld6
            : language === "hebräisch"
            ? hebräisch.Feld6
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld7
              : language === "englisch"
              ? englisch.Feld7
              : language === "rumänisch"
              ? rumänisch.Feld7
              : language === "ungarisch"
              ? ungarisch.Feld7
              : language === "französisch"
              ? französisch.Feld7
              : language === "spanisch"
              ? spanisch.Feld7
              : language === "hebräisch"
              ? hebräisch.Feld7
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld8
            : language === "englisch"
            ? englisch.Feld8
            : language === "rumänisch"
            ? rumänisch.Feld8
            : language === "ungarisch"
            ? ungarisch.Feld8
            : language === "französisch"
            ? französisch.Feld8
            : language === "spanisch"
            ? spanisch.Feld8
            : language === "hebräisch"
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
            {language === "deutsch"
              ? deutsch.Feld11
              : language === "englisch"
              ? englisch.Feld11
              : language === "rumänisch"
              ? rumänisch.Feld11
              : language === "ungarisch"
              ? ungarisch.Feld11
              : language === "französisch"
              ? französisch.Feld11
              : language === "spanisch"
              ? spanisch.Feld11
              : language === "hebräisch"
              ? hebräisch.Feld11
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld12
            : language === "englisch"
            ? englisch.Feld12
            : language === "rumänisch"
            ? rumänisch.Feld12
            : language === "ungarisch"
            ? ungarisch.Feld12
            : language === "französisch"
            ? französisch.Feld12
            : language === "spanisch"
            ? spanisch.Feld12
            : language === "hebräisch"
            ? hebräisch.Feld12
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld13
              : language === "englisch"
              ? englisch.Feld13
              : language === "rumänisch"
              ? rumänisch.Feld13
              : language === "ungarisch"
              ? ungarisch.Feld13
              : language === "französisch"
              ? französisch.Feld13
              : language === "spanisch"
              ? spanisch.Feld13
              : language === "hebräisch"
              ? hebräisch.Feld13
              : "ciao bella"}
          </b>
        
          <Phone>02261 - 608317</Phone>
        </ListItem>
        <LinkButton>
          <Anker href="https://www.airbnb.de/rooms/30269340?source_impression_id=p3_1601834562_KoGO5jV8I6w0ewSM">
            {language === "deutsch"
              ? deutsch.AirBnbButton
              : language === "englisch"
              ? englisch.AirBnbButton
              : language === "rumänisch"
              ? rumänisch.AirBnbButton
              : language === "ungarisch"
              ? ungarisch.AirBnbButton
              : language === "französisch"
              ? französisch.AirBnbButton
              : language === "spanisch"
              ? spanisch.AirBnbButton
              : language === "hebräisch"
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
            {language === "deutsch"
              ? deutsch.Feld1
              : language === "englisch"
              ? englisch.Feld1
              : language === "rumänisch"
              ? rumänisch.Feld1
              : language === "ungarisch"
              ? ungarisch.Feld1
              : language === "französisch"
              ? französisch.Feld1
              : language === "spanisch"
              ? spanisch.Feld1
              : language === "hebräisch"
              ? hebräisch.Feld1
              : "ciao bella"}
          </b>{" "}
          1-2
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld3
              : language === "englisch"
              ? englisch.Feld3
              : language === "rumänisch"
              ? rumänisch.Feld3
              : language === "ungarisch"
              ? ungarisch.Feld3
              : language === "französisch"
              ? französisch.Feld3
              : language === "spanisch"
              ? spanisch.Feld3
              : language === "hebräisch"
              ? hebräisch.Feld3
              : "ciao bella"}
          </b>{" "}
          1
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld5
              : language === "englisch"
              ? englisch.Feld5
              : language === "rumänisch"
              ? rumänisch.Feld5
              : language === "ungarisch"
              ? ungarisch.Feld5
              : language === "französisch"
              ? französisch.Feld5
              : language === "spanisch"
              ? spanisch.Feld5
              : language === "hebräisch"
              ? hebräisch.Feld5
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld6Garsoniera
            : language === "englisch"
            ? englisch.Feld6Garsoniera
            : language === "rumänisch"
            ? rumänisch.Feld6Garsoniera
            : language === "ungarisch"
            ? ungarisch.Feld6Garsoniera
            : language === "französisch"
            ? französisch.Feld6Garsoniera
            : language === "spanisch"
            ? spanisch.Feld6Garsoniera
            : language === "hebräisch"
            ? hebräisch.Feld6Garsoniera
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld7
              : language === "englisch"
              ? englisch.Feld7
              : language === "rumänisch"
              ? rumänisch.Feld7
              : language === "ungarisch"
              ? ungarisch.Feld7
              : language === "französisch"
              ? französisch.Feld7
              : language === "spanisch"
              ? spanisch.Feld7
              : language === "hebräisch"
              ? hebräisch.Feld7
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld8
            : language === "englisch"
            ? englisch.Feld8
            : language === "rumänisch"
            ? rumänisch.Feld8
            : language === "ungarisch"
            ? ungarisch.Feld8
            : language === "französisch"
            ? französisch.Feld8
            : language === "spanisch"
            ? spanisch.Feld8
            : language === "hebräisch"
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
            {language === "deutsch"
              ? deutsch.Feld11
              : language === "englisch"
              ? englisch.Feld11
              : language === "rumänisch"
              ? rumänisch.Feld11
              : language === "ungarisch"
              ? ungarisch.Feld11
              : language === "französisch"
              ? französisch.Feld11
              : language === "spanisch"
              ? spanisch.Feld11
              : language === "hebräisch"
              ? hebräisch.Feld11
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld12Garsoniera
            : language === "englisch"
            ? englisch.Feld12Garsoniera
            : language === "rumänisch"
            ? rumänisch.Feld12Garsoniera
            : language === "ungarisch"
            ? ungarisch.Feld12Garsoniera
            : language === "französisch"
            ? französisch.Feld12Garsoniera
            : language === "spanisch"
            ? spanisch.Feld12Garsoniera
            : language === "hebräisch"
            ? hebräisch.Feld12Garsoniera
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld13
              : language === "englisch"
              ? englisch.Feld13
              : language === "rumänisch"
              ? rumänisch.Feld13
              : language === "ungarisch"
              ? ungarisch.Feld13
              : language === "französisch"
              ? französisch.Feld13
              : language === "spanisch"
              ? spanisch.Feld13
              : language === "hebräisch"
              ? hebräisch.Feld13
              : "ciao bella"}
          </b>
          <Phone>02261 - 608317</Phone>
        </ListItem>
        <LinkButton2>
          <Anker href="https://www.airbnb.de/rooms/34850424?source_impression_id=p3_1601834588_OEdf7%2BUXKmqAkEo2">
            {" "}
            {language === "deutsch"
              ? deutsch.AirBnbButton
              : language === "englisch"
              ? englisch.AirBnbButton
              : language === "rumänisch"
              ? rumänisch.AirBnbButton
              : language === "ungarisch"
              ? ungarisch.AirBnbButton
              : language === "französisch"
              ? französisch.AirBnbButton
              : language === "spanisch"
              ? spanisch.AirBnbButton
              : language === "hebräisch"
              ? hebräisch.AirBnbButton
              : "ciao bella"}
          </Anker>
        </LinkButton2>
      </Pricing>
      <Pricing bgcolor="linear-gradient(316deg, #fd6c6c, #ffb35a)">
        <Slider pic1={Bild5}></Slider>
        <LiTitle>Appartment II</LiTitle>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld1
              : language === "englisch"
              ? englisch.Feld1
              : language === "rumänisch"
              ? rumänisch.Feld1
              : language === "ungarisch"
              ? ungarisch.Feld1
              : language === "französisch"
              ? französisch.Feld1
              : language === "spanisch"
              ? spanisch.Feld1
              : language === "hebräisch"
              ? hebräisch.Feld1
              : "ciao bella"}
          </b>{" "}
          2-4
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld3
              : language === "englisch"
              ? englisch.Feld3
              : language === "rumänisch"
              ? rumänisch.Feld3
              : language === "ungarisch"
              ? ungarisch.Feld3
              : language === "französisch"
              ? französisch.Feld3
              : language === "spanisch"
              ? spanisch.Feld3
              : language === "hebräisch"
              ? hebräisch.Feld3
              : "ciao bella"}
          </b>{" "}
          2
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld5
              : language === "englisch"
              ? englisch.Feld5
              : language === "rumänisch"
              ? rumänisch.Feld5
              : language === "ungarisch"
              ? ungarisch.Feld5
              : language === "französisch"
              ? französisch.Feld5
              : language === "spanisch"
              ? spanisch.Feld5
              : language === "hebräisch"
              ? hebräisch.Feld5
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld6
            : language === "englisch"
            ? englisch.Feld6
            : language === "rumänisch"
            ? rumänisch.Feld6
            : language === "ungarisch"
            ? ungarisch.Feld6
            : language === "französisch"
            ? französisch.Feld6
            : language === "spanisch"
            ? spanisch.Feld6
            : language === "hebräisch"
            ? hebräisch.Feld6
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld7
              : language === "englisch"
              ? englisch.Feld7
              : language === "rumänisch"
              ? rumänisch.Feld7
              : language === "ungarisch"
              ? ungarisch.Feld7
              : language === "französisch"
              ? französisch.Feld7
              : language === "spanisch"
              ? spanisch.Feld7
              : language === "hebräisch"
              ? hebräisch.Feld7
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld8
            : language === "englisch"
            ? englisch.Feld8
            : language === "rumänisch"
            ? rumänisch.Feld8
            : language === "ungarisch"
            ? ungarisch.Feld8
            : language === "französisch"
            ? französisch.Feld8
            : language === "spanisch"
            ? spanisch.Feld8
            : language === "hebräisch"
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
            {language === "deutsch"
              ? deutsch.Feld11
              : language === "englisch"
              ? englisch.Feld11
              : language === "rumänisch"
              ? rumänisch.Feld11
              : language === "ungarisch"
              ? ungarisch.Feld11
              : language === "französisch"
              ? französisch.Feld11
              : language === "spanisch"
              ? spanisch.Feld11
              : language === "hebräisch"
              ? hebräisch.Feld11
              : "ciao bella"}
          </b>{" "}
          {language === "deutsch"
            ? deutsch.Feld12APPII
            : language === "englisch"
            ? englisch.Feld12APPII
            : language === "rumänisch"
            ? rumänisch.Feld12APPII
            : language === "ungarisch"
            ? ungarisch.Feld12APPII
            : language === "französisch"
            ? französisch.Feld12APPII
            : language === "spanisch"
            ? spanisch.Feld12APPII
            : language === "hebräisch"
            ? hebräisch.Feld12APPII
            : "ciao bella"}
        </ListItem>
        <ListItem>
          <b>
            {language === "deutsch"
              ? deutsch.Feld13
              : language === "englisch"
              ? englisch.Feld13
              : language === "rumänisch"
              ? rumänisch.Feld13
              : language === "ungarisch"
              ? ungarisch.Feld13
              : language === "französisch"
              ? französisch.Feld13
              : language === "spanisch"
              ? spanisch.Feld13
              : language === "hebräisch"
              ? hebräisch.Feld13
              : "ciao bella"}
          </b>
          <Phone>02261 - 608317</Phone>
        </ListItem>
        <LinkButton onClick={handleonClick}>
        <Anker>
            {language === "deutsch"
              ? deutsch.AirBnbButton
              : language === "englisch"
              ? englisch.AirBnbButton
              : language === "rumänisch"
              ? rumänisch.AirBnbButton
              : language === "ungarisch"
              ? ungarisch.AirBnbButton
              : language === "französisch"
              ? französisch.AirBnbButton
              : language === "spanisch"
              ? spanisch.AirBnbButton
              : language === "hebräisch"
              ? hebräisch.AirBnbButton
              : "ciao bella"}{" "}
          </Anker>
        </LinkButton>
        <AlertWrapper>
        <AlertBox language={language} show={!show}></AlertBox>
          <Button onClick={handleonClick2} disabled={clickable}>
          {language === "deutsch"
              ? deutsch.ZurückButton
              : language === "englisch"
              ? englisch.ZurückButton
              : language === "rumänisch"
              ? rumänisch.ZurückButton
              : language === "ungarisch"
              ? ungarisch.ZurückButton
              : language === "französisch"
              ? französisch.ZurückButton
              : language === "spanisch"
              ? spanisch.ZurückButton
              : language === "hebräisch"
              ? hebräisch.ZurückButton
              : "ciao bella"}
          </Button>
        </AlertWrapper>
        
      </Pricing>
    </Site>
  );
}

