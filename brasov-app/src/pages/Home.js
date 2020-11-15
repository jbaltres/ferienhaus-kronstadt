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

export default function Home(props) {
  return (
    <CardWrapper>
      <WelcomeText>
        <Headline>
          {props.language === "deutsch"
            ? deutsch.TextHeadline
            : props.language === "englisch"
            ? englisch.TextHeadline
            : props.language === "rumänisch"
            ? rumänisch.TextHeadline
            : props.language === "ungarisch"
            ? ungarisch.TextHeadline
            : props.language === "französisch"
            ? französisch.TextHeadline
            : props.language === "spanisch"
            ? spanisch.TextHeadline
            : props.language === "hebräisch"
            ? hebräisch.TextHeadline
            : "ciao bella"}
        </Headline>
        <p />
        {props.language === "deutsch"
          ? deutsch.Text1
          : props.language === "englisch"
          ? englisch.Text1
          : props.language === "rumänisch"
          ? rumänisch.Text1
          : props.language === "ungarisch"
          ? ungarisch.Text1
          : props.language === "französisch"
          ? französisch.Text1
          : props.language === "spanisch"
          ? spanisch.Text1
          : props.language === "hebräisch"
          ? hebräisch.Text1
          : "ciao bella"}{" "}
        <br />
        {props.language === "deutsch"
          ? deutsch.Text2
          : props.language === "englisch"
          ? englisch.Text2
          : props.language === "rumänisch"
          ? rumänisch.Text2
          : props.language === "ungarisch"
          ? ungarisch.Text2
          : props.language === "französisch"
          ? französisch.Text2
          : props.language === "spanisch"
          ? spanisch.Text2
          : props.language === "hebräisch"
          ? hebräisch.Text2
          : "ciao bella"}{" "}
        <br />
        {props.language === "deutsch"
          ? deutsch.Text3
          : props.language === "englisch"
          ? englisch.Text3
          : props.language === "rumänisch"
          ? rumänisch.Text3
          : props.language === "ungarisch"
          ? ungarisch.Text3
          : props.language === "französisch"
          ? französisch.Text3
          : props.language === "spanisch"
          ? spanisch.Text3
          : props.language === "hebräisch"
          ? hebräisch.Text3
          : "ciao bella"}
        <br />
        <br />
        {props.language === "deutsch"
          ? deutsch.Text4
          : props.language === "englisch"
          ? englisch.Text4
          : props.language === "rumänisch"
          ? rumänisch.Text4
          : props.language === "ungarisch"
          ? ungarisch.Text4
          : props.language === "französisch"
          ? französisch.Text4
          : props.language === "spanisch"
          ? spanisch.Text4
          : props.language === "hebräisch"
          ? hebräisch.Text4
          : "ciao bella"}
        <br /> <br />
        {props.language === "deutsch"
          ? deutsch.Text5
          : props.language === "englisch"
          ? englisch.Text5
          : props.language === "rumänisch"
          ? rumänisch.Text5
          : props.language === "ungarisch"
          ? ungarisch.Text5
          : props.language === "französisch"
          ? französisch.Text5
          : props.language === "spanisch"
          ? spanisch.Text5
          : props.language === "hebräisch"
          ? hebräisch.Text5
          : "ciao bella"}
      </WelcomeText>
      <HomePicture src="https://ioanaphotos.files.wordpress.com/2010/09/p1070396.jpg?w=758&h=&zoom=2"></HomePicture>
    </CardWrapper>
  );
}
