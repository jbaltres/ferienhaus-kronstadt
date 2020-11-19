import React from "react";
import styled from "styled-components";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Preise from "./pages/Preise";
import Test from "./pages/Test";
import Gallerie from "./pages/Gallerie";
import MainImage from "./components/MainImage";
import Header from "./components/Header";

function App() {
  const [visible, setVisible] = React.useState(true);
  const [isToggled, setToggled] = React.useState(false);
  console.log(visible);
  const Background = styled.div`
    background: papayawhip;
  `;

  const ToggleButton = styled.span`
    margin-left: 13px;
    display: flex;
    align-items: center;
    height: 100%;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
    }

   
    z-index: 400;
    justify-content: space-around;
    @media (max-width: 750px) {
      flex-direction: column;
      align-items: flex-start;
    }
    font-size: 25px;
    color: rgba(41,49,51,0.8);
  `;

  const MenuContainer = styled.div`
    border-width: 2px;
    display: flex;
    align-items: center;
    
    background: linear-gradient(45deg, #ffad5c,#1ed0bb);
    
  
  `;

  const Flag = styled.img`
    width: 30px;
    height: 30px;
    margin: 5px 10px;

    animation-name: bounce2;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay: ${(props) => props.delaytime || "0.4s"};
    animation-timing-function: linear;

    @keyframes bounce2 {
      0% {
        transform: translateY(0);
      }
      10% {
        transform: translateY(-30px);
      }
      20% {
        transform: translateY(10px);
      }
      30% {
        transform: translateY(-22px);
      }
      50% {
        transform: translateY(0px);
      }
      60% {
        transform: translateY(-15px);
      }
      70% {
        transform: translateY(0px);
      }
      80% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;

  const Flagwrapper = styled.div`
    display: ${visible ? "none" : "flex"};
    width: 100%;
    justify-content: flex-start;
    z-index: 2200;
    position: fixed;
    flex-wrap: wrap;
    margin-top: 60px;
    @media (max-width: 350px) {
      margin-top: 100px;
    }

    animation-name: bounce;
    animation-duration: 100s;
    animation-iteration-count: 1;

    @keyframes bounce {
      0% {
        transform: translateY(-100px);
      }
      1% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-1px);
      }
    }
  `;

  

  const HeaderWrapper = styled.div`
    display: flex;
  `;

  const [language, setlanguage] = React.useState("deutsch");

  console.log(language);

  return (
    <Router>
      <HeaderWrapper onClick={(e) => setVisible(!visible)}>
        <Header language={language} />
          
      </HeaderWrapper>
      <Flagwrapper onClick={(e) => setVisible(!visible)}>
        <Flag
          delaytime="0.1s"
          onClick={() => setlanguage("deutsch")}
          src="https://cdn.countryflags.com/thumbs/germany/flag-round-250.png"
        ></Flag>
        <Flag
          delaytime="0.3s"
          onClick={() => setlanguage("rumänisch")}
          src="https://cdn.countryflags.com/thumbs/romania/flag-button-round-250.png"
        ></Flag>
        <Flag
          delaytime="0.5s"
          onClick={() => setlanguage("englisch")}
          src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png"
        ></Flag>
        <Flag
          onClick={() => setlanguage("spanisch")}
          src="https://cdn.countryflags.com/thumbs/spain/flag-button-round-250.png"
        ></Flag>
        <Flag
          onClick={() => setlanguage("ungarisch")}
          src="https://cdn.countryflags.com/thumbs/hungary/flag-button-round-250.png"
        ></Flag>
        <Flag
          delaytime="0.3s"
          onClick={() => setlanguage("französisch")}
          src="https://cdn.countryflags.com/thumbs/france/flag-3d-round-250.png"
        ></Flag>
        <Flag
          delaytime="0.25s"
          onClick={() => setlanguage("hebräisch")}
          src="https://cdn.countryflags.com/thumbs/israel/flag-3d-round-250.png"
        ></Flag>
      </Flagwrapper>
      <MainImage></MainImage>
      <MenuContainer>
        <ToggleButton onClick={() => setToggled(!isToggled)}>Menu</ToggleButton>
          <NavBar language={language}></NavBar>    
      </MenuContainer>
      <Background>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home language={language} />
        </Route>
        <Route path="/zimmer">
          <Preise language={language} />
        </Route>
        <Route path="/gallery" component={Gallerie} />
        <Route path="/test" component={Test} />
      </Background>
    </Router>
  );
}

export default App;
