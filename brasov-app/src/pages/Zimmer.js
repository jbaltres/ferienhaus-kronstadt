import React from "react";
import styled from "styled-components"
import Wohnungen from "../components/Wohnungen";


const Card = styled.span`
  display: flex;
  background-color: blue
  border-radius: 10px;
  margin: 10px 20px;
  justify-content: center;
  height: 450px;
  align-items: center;
  flex-wrap: wrap;
`;

const CardHeadline = styled.h2`
  color: grey
`;

const Image = styled.img`
  width: 90%;
  max-width:400px;
  height: 200px
  border-radius: 30%;
  margin: auto 50px;
`;

const DescriptionText = styled.p`
color: yellow;
flex-grow:1;
overflow: scroll;
display:flex;
justify-content:center;
margin: auto
`;
const Table = styled.table`
width: 320px;
border-width: 2px;
border-style: solid;
border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;`;

const TableLines = styled.tr`
border-width: 2px;
border-style: solid;
border-image: linear-gradient(to right, rgba(37, 206, 197, 1), black) 50 15%;`;

export default function Home() {
  return (
 <>   
  <Card>
    <Image src="https://a0.muscache.com/im/pictures/0010b431-bdca-40fc-8003-9d0063c3627b.jpg?aki_policy=xx_large"></Image>
    <DescriptionText>
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
    </DescriptionText>
  </Card>
  <Card>
  <Image src="https://a0.muscache.com/im/pictures/0010b431-bdca-40fc-8003-9d0063c3627b.jpg?aki_policy=xx_large"></Image>
  <DescriptionText>Hóla </DescriptionText>
  </Card>
  <Card>
    <Image src="https://urlaub-in-rumänien.de/wp-content/uploads/2017/02/3240px-Brasov_Piata_Sfatului.jpg"></Image>
    <DescriptionText>Menü nach oben schieben und dann einzeilig werden lassen. </DescriptionText>
  </Card>
 </> 
  )
}
