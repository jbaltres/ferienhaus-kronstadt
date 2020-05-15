import React from 'react';
import styled from 'styled-components'
import './App.css';
import NavBar from "./components/NavBar";
import HeaderCaroussel from './components/MainImageSlider';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutkronstadt from "./pages/AboutKronstadt";
import Home from "./pages/Home";
import Preise from "./pages/Preise";
import Zimmer from "./pages/Zimmer";

const Background = styled.div`
background: papayawhip;
height: 100vh;
-webkit-animation: color-change 2s infinite;
    -moz-animation: color-change 2s infinite;
    -o-animation: color-change 2s infinite;
    -ms-animation: color-change 2s infinite;
    animation: color-change 2s infinite;
}

@-webkit-keyframes color-change {
    0% { color: pink; }
    50% { color: blue; }
    75% { color: green; }
    100% { color: red; }
}


@keyframes color-change {
    0% { color: pink; }
    33% { color: blue; }
    66% { color: green; }
    100% { color: pink; }
}

`;

const Text = styled.span`
font-size: 80px;
-webkit-animation: color-change 3s infinite;
    -moz-animation: color-change 3s infinite;
    -o-animation: color-change 3s infinite;
    -ms-animation: color-change 3s infinite;
    animation: color-change 3s infinite;
}

@-webkit-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    75% { color: green; }
    100% { color: pink; }
}


@keyframes color-change {
    0% { color: red; }
    33% { color: blue; }
    66% { color: pink; }
    100% { color: red; }
}
`;


function App() {
  return (
<Router>
    
    <NavBar></NavBar>    
    <Background>
    <Route path="/home" component={Home} />
    <Route path="/preise" component={Preise} />
    <Route path="/zimmer" component={Zimmer} />
    <Route path="/aboutkronstadt" component={Aboutkronstadt} />
    </Background>
</Router>
  );
}

export default App;

        