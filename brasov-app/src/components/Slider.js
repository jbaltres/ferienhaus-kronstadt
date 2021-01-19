import React from "react";
import styled from "styled-components";

const QuaderBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

const Quader = styled.img`
  height:150px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export default function Slider({ pic1 }) {
  console.log(pic1);
  return (
    <>
      <QuaderBox>
        <Quader src={pic1}></Quader>
      </QuaderBox>
    </>
  );
}
