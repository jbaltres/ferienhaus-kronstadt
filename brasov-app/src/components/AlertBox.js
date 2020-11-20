import React from "react";
import styled from "styled-components";
import {
    deutsch,
    englisch,
    rumänisch,
    hebräisch,
    spanisch,
    ungarisch,
    französisch,
  } from "../languages/api";

function AlertBox({show, language}) {
console.log(show)
const Alert = styled.div`
    display:${show ? "flex":"none"};
    justify-content:center;
    align-items:center;
    position: fixed;
    left:0;
    bottom:0;
    background-color: black;
    opacity:0.9;
    color: white;
    width:100%;
    height:100%;
    z-index:10000;
    flex-wrap:wrap;
  `;

  const AlertText = styled.span`
  padding: 0px 20px;
  `;


  return (<Alert>
      <AlertText>
      {language === "deutsch"
              ? deutsch.AlertText1
              : language === "englisch"
              ? englisch.AlertText1
              : language === "rumänisch"
              ? rumänisch.AlertText1
              : language === "ungarisch"
              ? ungarisch.AlertText1
              : language === "französisch"
              ? französisch.AlertText1
              : language === "spanisch"
              ? spanisch.AlertText1
              : language === "hebräisch"
              ? hebräisch.AlertText1
              : "ciao bella"}      <br></br>
 {language === "deutsch"
              ? deutsch.AlertText2
              : language === "englisch"
              ? englisch.AlertText2
              : language === "rumänisch"
              ? rumänisch.AlertText2
              : language === "ungarisch"
              ? ungarisch.AlertText2
              : language === "französisch"
              ? französisch.AlertText2
              : language === "spanisch"
              ? spanisch.AlertText2
              : language === "hebräisch"
              ? hebräisch.AlertText2
              : "ciao bella"}      <br></br>
      <br></br>
      +49 (0)2261 - 59694
      </AlertText>
      </Alert>
  );
}

export default AlertBox;
