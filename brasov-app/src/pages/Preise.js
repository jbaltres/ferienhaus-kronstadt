import React from "react";
import styled from "styled-components";
import Bild5 from "../pictures/Bild5.jpg";
import Apartment from "../components/Wohnungen";
import languages from "../languages/api";

export default function Preise({ language }) {
  const Site = styled.div`
    background: papayawhip;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 1.2rem;
  `;

  const pic1 =
    "https://a0.muscache.com/im/pictures/62c9cb76-c15d-44a2-bea2-52d36a82dbc6.jpg?im_w=1200";
  const pic2 =
    "https://a0.muscache.com/im/pictures/1c24f67e-9944-4b61-b1ab-b71be2b32619.jpg?im_w=1200";

  return (
    <Site>
      <Apartment
        languages={languages}
        language={language}
        pic={pic1}
        title="Apartment I"
        pax="2-4"
        rooms={2}
        phone="02261 - 608317"
        link="https://www.airbnb.de/rooms/30269340?source_impression_id=p3_1601834562_KoGO5jV8I6w0ewSM"
        colors="linear-gradient(316deg, #fd6c6c, #ffb35a)"
        buchbar={true}
        price="Feld12"
      />
      <Apartment
        languages={languages}
        language={language}
        pic={pic2}
        title="GARSONIERA"
        pax="1-2"
        rooms={2}
        phone="02261 - 608317"
        link="https://www.airbnb.de/rooms/34850424?source_impression_id=p3_1601834588_OEdf7%2BUXKmqAkEo2"
        colors="linear-gradient(316deg, #0de1b4, #3297d0)"
        buchbar={true}
        price="Feld12Garsoniera"
      />
      <Apartment
        languages={languages}
        language={language}
        pic={Bild5}
        title="Apartment II"
        pax="2-4"
        rooms={1}
        phone="02261 - 608317"
        link=""
        colors="linear-gradient(316deg, #fd6c6c, #ffb35a)"
        buchbar={false}
        price="Feld12APPII"
      />
    </Site>
  );
}
