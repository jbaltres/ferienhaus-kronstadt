import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import AlertBox from "../components/AlertBox";
const Wohnungswrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  } ;
`;

const Image = styled.img`
  width: 90%;
  height: 200px;
  border-radius: 30%;
  margin: 0px auto;
`;

const Table = styled.table`
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

const TableLines = styled.tr`
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;
`;

function Wohnungen() {
  return (
    <Wohnungswrapper>
      <Image src="https://urlaub-in-rumänien.de/wp-content/uploads/2017/02/3240px-Brasov_Piata_Sfatului.jpg"></Image>
      <Table>
        <TableLines>Appartment I</TableLines>
        <TableLines>
          <td>Gäste</td>
          <td>2-4</td>
        </TableLines>
        <TableLines>
          <td>Betten</td>
          <td>2</td>
        </TableLines>
        <TableLines>
          <td>Bad</td>
          <td>√</td>
        </TableLines>
        <TableLines>
          <td>TV</td>
          <td>2</td>
        </TableLines>
        <TableLines>
          <td>WIFI</td>
          <td>Ja</td>
        </TableLines>
        <TableLines>
          <td>Weiteres</td>
          <td>
            Große Küche auf Wunsch mit Mikrowelle, Föhn, Handtücher und
            Bettwäsche vor Ort, Ansprechpartner vor Ort
          </td>
        </TableLines>
      </Table>
    </Wohnungswrapper>
  );
}

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
    display: none;
    background-color: rgba(41, 49, 51, 0.6);
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
    height: 100%;
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
