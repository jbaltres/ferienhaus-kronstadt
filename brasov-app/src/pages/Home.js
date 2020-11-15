import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 90%;
  margin: 25px 5% 5px 5%;
`;

const WelcomeText = styled.div`
  font-family: cursive;
  font-size: 20px;
  width: 90%;
  margin: 15px auto;
  color: rgba(41, 49, 51, 0.8);
  font-size: 1.5em;
`;

const HomePicture = styled.img`
  width: 100%;
  margin: 25px 0 5px 0;
  @media (min-width: 780px) {
    width: 0px;
  } ;
`;

const Headline = styled.h2`
  font-size: 2em;
`;

export default function Home() {
  return (
    <CardWrapper>
      <WelcomeText>
        <Headline>Willkommen in Siebenbürgen.</Headline>
        <p />
        Wir begrüßen Sie in unseren Ferienwohnungen und Fremdenzimmern im Herzen
        Rumäniens. <br />
        Aus unserer Unterkunft gelangen Sie schnell ins Stadtzentrum von
        Kronstadt/Braşov, wo Sie zahlreiche Einkaufsmöglichkeiten und
        Gastronomien mit landestypischen Spezialitäten erwarten. <br />
        Von Kronstadt aus gelangen Sie schnell zu den höchsten Spitzen der
        Karpaten, die waldreichste Gegend Europas, für welche das Land bekannt
        ist. <br />
        <br />
        Ein Super Platz für alle Wanderfreunde.
        <br /> <br />
        Im Winter läd sie unter anderem das anliegende Skigebiet zum Skifahren,
        oder zu einem wärmenden Glühschnaps, ein. Mehr über Braşov lernen Sie
        hier.
      </WelcomeText>
      <HomePicture src="https://ioanaphotos.files.wordpress.com/2010/09/p1070396.jpg?w=758&h=&zoom=2"></HomePicture>
    </CardWrapper>
  );
}
