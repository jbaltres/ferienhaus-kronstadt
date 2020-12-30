import React from "react";
import styled from "styled-components";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Preise from "./pages/Preise";
import Gallerie from "./pages/Gallerie";
import MainImage from "./components/MainImage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import deutschland from "./pictures/Flags/deutschland.png"
import frankreich from "./pictures/Flags/frankreich.svg"
import israel from "./pictures/Flags/israel.svg"
import rumanien from "./pictures/Flags/rumanien.svg"
import spanien from "./pictures/Flags/spanien.svg"
import vereinigtestaaten from "./pictures/Flags/vereinigte-staaten.svg"
import ungarn from "./pictures/Flags/ungarn.svg"


function App() {
  const [visible, setVisible] = React.useState(true);
  const Background = styled.div`
  `;

  const MenuContainer = styled.div`
    border-width: 2px;
    display: flex;
    align-items: center; 
    background: linear-gradient(45deg,#1ed0bb,#ffad5c);

    @media (min-width: 550px) {
      position:sticky;
    top:55px;
    z-index:999;
    }
  `;

  const Freepik = styled.div`
  font-size:0.1em;
  color:rgba(0,0,0,0.2)
  `;

const FreepikLink = styled.span`
text-decoration:none;
`;

  const Flag = styled.img`
    width: 30px;
    height: 30px;
    margin: 5px 10px;
    animation-name: bounce2;
    animation-duration: ${(props) => props.duration || "1s"};
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
    background-color:rgba(189,195,199,0.7);
    width: 100%;
    justify-content: flex-start;
    z-index: 2200;
    position: fixed;
    margin-top: 55px;
    @media (max-width: 333px) {
      margin-top: 100px;
      flex-wrap: wrap;
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

const FooterWrapper = styled.div`
display: flex;
`;

  const [language, setlanguage] = React.useState("deutsch");

  console.log(language);

  return (
    <Router>
      <HeaderWrapper onClick={(e) => setVisible(!visible)}>
        <Header language={language} visible={!visible} />
          
      </HeaderWrapper>
      <Flagwrapper onClick={(e) => setVisible(!visible)}>
        <Flag
          delaytime="0.1s"
          duration="1s"
          onClick={() => setlanguage("deutsch")}
          src={deutschland}
        ></Flag>
        <Flag
          delaytime="0.3s"
          onClick={() => setlanguage("rumänisch")}
          src={rumanien}
        ></Flag>
        <Flag
          delaytime="0.5s"
          duration="1.5s"
          onClick={() => setlanguage("englisch")}
          src={vereinigtestaaten}
        ></Flag>
        <Flag
          onClick={() => setlanguage("spanisch")}
          src={spanien}
        ></Flag>
        <Flag
          onClick={() => setlanguage("ungarisch")}
          src={ungarn}
        ></Flag>
        <Flag
          delaytime="0.3s"
          duration="1.5s"
          onClick={() => setlanguage("französisch")}
          src={frankreich}
        ></Flag>
        <Flag
          delaytime="0.25s"
          duration=".5s"
          onClick={() => setlanguage("hebräisch")}
          src={israel}
        ></Flag>
      </Flagwrapper>
      <MainImage></MainImage>
      <MenuContainer>
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
        <Freepik>Icons erstellt von <FreepikLink href="https://www.flaticon.com/de/autoren/freepik" title="Freepik">Freepik</FreepikLink> from <FreepikLink href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</FreepikLink></Freepik>
         <FooterWrapper>
        <Footer /> 
      </FooterWrapper>
      </Background>
    </Router>
  );
}

export default App;
