import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import AlertBox from "../components/AlertBox";

function Apartment({
  languages,
  language,
  pic,
  title,
  pax,
  rooms,
  phone,
  link,
  colors,
  buchbar,
  price
}) {
  const [show, setShow] = React.useState(true);
  const [clickable, setClickable] = React.useState(true);

  const handleDisable = () =>
    setTimeout(function () {
      setClickable(!clickable);
    }, 3000);

  function handleonClick() {
    handleDisable();
    setShow(!show);
  }
  function handleonClick2() {
    setClickable(true);
    setShow(!show);
  }

  const Pricing = styled.ul`
    list-style: none;
    margin-left: 2em;
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
    display: none;
    position:absolute;
    bottom:15px;
    background-color: rgba(41, 49, 51, 0.8);
    width: fit-content;
    border-radius: 10px;
    padding: 3px 10px;
  `;

  const ListItem = styled.li`
    margin: 10px 20px;
    position: relative;
    &:hover ${Phone} {
      display: flex;
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
    background: hsla(300, 15%, 25%, 0.4);
    text-decoration: none;
    padding: 10px 3px;
    display: inline-block;
    margin: 10px auto;
    max-width: 80%; 
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.4) inset;
    align-items: center;
    height: 60px;
    cursor: pointer;

    :hover {
      transform: scale(0.9);
      box-shadow: 0 4px 8px 0 rgba(0, 195, 238, 1),
        0 6px 20px 0 rgba(0, 195, 238, 1);
    }

    @media (max-width: 350px) {
      max-width:200px;
         }
  `;

  const Anker = styled.a`
    text-decoration: none;
    color: white;
  `;

  const AlertWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Button = styled.button`
    display: ${!show ? "flex" : "none"};
    font-size: 1em;
    position: fixed;
    bottom: 23%;
    margin-left: auto;
    margin-right: auto;
    z-index: 1999999999999;
    background: ${!clickable
      ? "linear-gradient(45deg,#1ed0bb,#ffad5c)"
      : "grey"};
    color: #000;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    @media (min-width: 1256px) {
      right: 50%;
    }
  `;
  return (
    <Pricing bgcolor={colors}>
      <Slider pic1={pic}></Slider>
      <LiTitle>{title}</LiTitle>
      <ListItem>
        <b>{languages[language].Feld1}</b> {pax}
      </ListItem>
      <ListItem>
        <b>{languages[language].Feld3}</b> {rooms}
      </ListItem>
      <ListItem>
        <b>{languages[language].Feld5}</b> {languages[language].Feld6}
      </ListItem>
      <ListItem>
        <b>{languages[language].Feld7}</b> {languages[language].Feld8}
      </ListItem>
      <ListItem>
        <b>Netflix:</b>
        <span role="img" aria-label="Yes">
          ✔️
        </span>{" "}
      </ListItem>
      <ListItem>
        <b>Wi-Fi:</b>
        <span role="img" aria-label="Yes">
          ✔️
        </span>{" "}
      </ListItem>
      <ListItem>
        <b>{languages[language].Feld11}</b> {languages[language][price]}
      </ListItem>
      <ListItem>
        <b>{languages[language].Feld13}</b>

        <Phone>{phone}</Phone>
      </ListItem>
      {buchbar ? (
        <LinkButton>
          <Anker href={link}>{languages[language].AirBnbButton}</Anker>
        </LinkButton>
      ) : (
        <>
          <LinkButton onClick={handleonClick}>
            <Anker>{languages[language].AirBnbButton}</Anker>
          </LinkButton>
          <AlertWrapper>
            <AlertBox language={language} show={!show}></AlertBox>
            <Button onClick={handleonClick2} disabled={clickable}>
              {languages[language].ZurückButton}
            </Button>
          </AlertWrapper>
        </>
      )}
    </Pricing>
  );
}

export default Apartment;
