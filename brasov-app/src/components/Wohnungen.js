import React from "react";
import styled from "styled-components";

const Wohnungswrapper = styled.div`
display:flex;
flex-direction: column;

@media (max-width: 768px) {
    width: 100%;
  };

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
border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;`;

const TableLines = styled.tr`
border-width: 2px;
border-style: solid;
border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;`;


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
                  <td>Große Küche auf Wunsch mit Mikrowelle, Föhn, Handtücher und Bettwäsche vor Ort, Ansprechpartner vor Ort</td>  
                </TableLines>
            </Table>
        </Wohnungswrapper>
    );
  }


export default Wohnungen;