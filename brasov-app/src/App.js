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
import MainImage from './components/MainImage';
import Header from './components/Header';
import Menu2 from './components/Menu2';

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

const ToggleButton = styled.span`
align-items: center;
padding: 10px;
margin-top: 3px;
z-index: 400;
justify-content: space-around;
box-shadow: -6px -9px 22px hsla(300,15%,25%,0.8) inset

@media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
};
`;

const MenuContainer = styled.div`
display:flex;
`;

function App() {

    const [isToggled, setToggled] = React.useState(false);
   

  return (
<Router>
    <Header/>
    <MainImage></MainImage>
     <MenuContainer>
    <ToggleButton onClick={ () => setToggled(!isToggled)}>
          <h3>Menu →</h3>
    </ToggleButton>
    <NavBar handleToggle={isToggled}></NavBar>  
    </MenuContainer>    
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

        