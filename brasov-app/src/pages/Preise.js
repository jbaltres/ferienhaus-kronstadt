import React from "react";
import styled from "styled-components"
import Slider from "../components/Slider";

const Site = styled.div`
background: papayawhip;
display: flex;
flex-wrap: wrap;
justify-content: center;
font-family: 'Source Sans Pro', Arial, sans-serif;
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
  background: ${props => props.bgcolor || "yellow"};
  position: relative;
  width: 350px; /* width of each table */
  margin-right: 30px; /* spacing between tables */
  margin-bottom: 1em;
  transition: all .5s;

  :hover {
    transform: scale(1.05);
    transition: all .5s;
    z-index: 100;
    box-shadow: 0 0 10px gray;
  }
`;

const ListItem = styled.li`
    margin: 10px 20px;
    position: relative;
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
    background: #3F7FBF;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    max-width: 150px
    margin: 10px auto;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;

    :hover{
        transform: 1.5em;
        box-shadow: 0 4px 8px 0 rgba(0, 256, 0, 0.8), 0 6px 20px 0 rgba(0, 256, 0, 0.6);
    }
`;

const LinkButton2 = styled.button`
    background: #FA7268;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    max-width: 150px
    margin: 10px auto;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;

    :hover{
        transform: 1.5em;
        box-shadow: 0 4px 8px 0 rgba(0, 256, 0, 0.8), 0 6px 20px 0 rgba(0, 256, 0, 0.6);
    }
`;

const Anker = styled.a`
text-decoration: none;
color: white
`;



export default function Home() {
    const pic1 = "https://a0.muscache.com/im/pictures/62c9cb76-c15d-44a2-bea2-52d36a82dbc6.jpg?im_w=1200"
    const pic2 = "https://a0.muscache.com/im/pictures/1c24f67e-9944-4b61-b1ab-b71be2b32619.jpg?im_w=1200"
    console.log(pic1)
  return <Site>
            <Pricing bgcolor="rgba(250,114,104,0.5)">
              <Slider pic1={pic1}></Slider>
                <LiTitle>App I</LiTitle>
                    <ListItem><b>Persons:</b> 2-4</ListItem>
                    <ListItem><b>Rooms:</b> 2</ListItem>
                    <ListItem><b>Kitchen:</b> Yes</ListItem>
                    <ListItem><b>Bath:</b> Private</ListItem>
                    <ListItem><b>Netflix:</b> ✔️</ListItem>
                    <ListItem><b>Price:</b> 40€ / Night</ListItem>
                        <LinkButton> 
                            <Anker href="https://www.airbnb.de/rooms/30269340?source_impression_id=p3_1601834562_KoGO5jV8I6w0ewSM">Hier Verfügbarkeit überprüfen und buchen</Anker>
                        </LinkButton>
            </Pricing>
            <Pricing bgcolor="rgba(63,127,191,0.6)">
              <Slider pic1={pic2}></Slider>
                <LiTitle>App II</LiTitle>
                <ListItem><b>Persons:</b> 2-4</ListItem>
                <ListItem><b>Rooms:</b> 2</ListItem>
                <ListItem><b>Kitchen:</b> Yes</ListItem>
                <ListItem><b>Bath:</b> Private</ListItem>
                <ListItem><b>Netflix:</b> ✔️</ListItem>
                <ListItem><b>Price:</b> 50€ / Night</ListItem>
                    <LinkButton2> 
                        <Anker href="https://www.airbnb.de/rooms/34850424?source_impression_id=p3_1601834588_OEdf7%2BUXKmqAkEo2">Hier Verfügbarkeit überprüfen und buchen</Anker>
                    </LinkButton2>            
            </Pricing>
            <Pricing bgcolor="rgba(250,114,104,0.5)">
              <Slider pic1={pic1}></Slider>
                <LiTitle>Garsoniera</LiTitle>
                <ListItem><b>Persons:</b> 1-2</ListItem>
                <ListItem><b>Rooms:</b> 1</ListItem>
                <ListItem><b>Kitchen:</b> No (Waterboiler and Coffeemaker inside)</ListItem>
                <ListItem><b>Bath:</b> Private</ListItem>
                <ListItem><b>Netflix:</b> ✔️</ListItem>
                <ListItem><b>Price:</b> 30€ / Night</ListItem>
                    <LinkButton> 
                        <Anker onClick={ () => alert("Dieses Zimmer ist Momentan nicht verfügbar")}>Hier Verfügbarkeit überprüfen und buchen</Anker>
                    </LinkButton>        
            </Pricing>
        </Site>;

}
