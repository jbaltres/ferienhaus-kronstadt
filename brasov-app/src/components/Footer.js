import React from "react";
import styled from "styled-components";

function Footer() {
  const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background: linear-gradient(315deg, #ffad5c,#1ed0bb);
    margin: 0;
    border-width: 2px;
    justify-content: space-around;
    width: 100vw;
    
    @media (max-width: 500px) {
      font-size:0.7em;
    }
    
  `;

  const Tel = styled.span`
    color:white;
    font-size:1.1em;
    flex-grow: 1;
    text-align: center;
  `;
  const Anspr = styled.span`
  font-size:1.1em;
   color:white;
  flex-grow: 1;
  text-align: center;
`;
const Adress = styled.a`
 color:white;
 font-size:1.1em;
  flex-grow: 1;
  justify-content:center;
   text-decoration: none;
    box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.4) inset;
    border-radius:7px;
    padding:3px;
    display: flex;
    align-items: center;
    height: 100%;
    
    :hover {
      background: linear-gradient(45deg,#1ed0bb,#ffad5c);
    }
      
  `;


  return (
    <Title>
      <Tel>(+)49 2261 59694</Tel>
      <Anspr>Familie Baltres</Anspr>
      <Adress href="https://www.google.com/maps/place/Strada+Lung%C4%83+241,+Bra%C8%99ov+500051,+Rum%C3%A4nien/data=!4m2!3m1!1s0x40b35ba4ec28af03:0x7932de90812fa6f3?sa=X&ved=2ahUKEwjAp4OirI_tAhWNHhQKHXs8Ay4Q8gEwAHoECAUQAQ">Strada Lungă 241 Brașov</Adress>
    </Title>
  );
}

export default Footer;
