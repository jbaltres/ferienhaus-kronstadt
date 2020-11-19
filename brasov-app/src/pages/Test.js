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
 
  margin: 25px 5% 5px 5%;
   //display
  
`;

const WelcomeText = styled.div`
position:absolute;
color:white;
  font-style: italic;
  line-height: 1.5;
  
  margin: 15px auto;
  color: rgba(41, 49, 51, 0.8);
  font-size: 1.5em;
  font-style: bold;
  width:90%;
`;

const HomePicture = styled.img`
  width: 100%;
  margin: 25px 0 5px 0;
  @media (min-width: 780px) {
    width: 0px;
  } ;
`;

const Headline = styled.h2`
  font-size: 2.2em;
  width: 90%;
  margin: 15px auto;
  color: rgba(41, 49, 51, 0.8);
`;

const StarWrapper = styled.div`
display:flex;
height:20vh;
top:0;
left:0;
background-color:black;
margin-bottom:50px;
color:white;
`;

const StarGroup1 = styled.div`
background-color:white;
height:3px;
width:3px;
border-radius:50%;
animation-name:twinkle;
animation-duration:9s;
animation-iteration-count:infinite;

@keyframes twinkle{
  50%{
    transform: scale(0.5);
    opacity:0.5;
  }
}
`;

const StarGroup15 = styled.div`
background-color:white;
height:3px;
width:3px;
border-radius:50%;
animation-name:twinkle15;
animation-duration:13s;
animation-delay:2s;
animation-iteration-count:infinite;

@keyframes twinkle15{
  50%{
    transform: scale(0.5);
    opacity:0.5;
  }
}
`;

const StarGroup2 = styled.div`

background-color:white;
height:5px;
width:5px;
border-radius:50%;
animation-name:twinkle2;
animation-duration:40s;
animation-iteration-count:infinite;

@keyframes twinkle2{
  50%{
    transform: scale(0.5)translateX(2000px);
    opacity:0;
  }
  100%{
    opacity:0%
  }
}

`;

const StarGroup3 = styled.div`

background-color:silver;
height:3px;
width:3px;
border-radius:50%;
animation-name:twinkle3;
animation-duration:10s;
animation-iteration-count:infinite;

@keyframes twinkle3{
  50%{
    transform: scale(0.5)translateX(200px)translateY(200px);
    opacity:0;
  }
  100%{
    opacity:0%
  }
}

`;

const StarGroup4 = styled.div`

background-color:silver;
height:3px;
width:3px;
border-radius:50%;
animation-name:twinkle4;
animation-duration:5s;
animation-iteration-count:infinite;

@keyframes twinkle4{
  50%{
    transform: scale(2.5);
    
  }}
`;

const StarGroup5 = styled.div`

background-color:silver;
height:3px;
width:3px;
border-radius:50%;
animation-name:twinkle5;
animation-duration:23s;
animation-iteration-count:infinite;

@keyframes twinkle5{
  50%{
    transform: scale(0.5)translateX(200px)translateY(-200px);
    opacity:0;
  }
  100%{
    opacity:0%
  }
}
`;

  
const Star1 = styled.span`
margin-top:1.9%;
position:absolute;
margin-left:6%;
`;
const Star2 = styled.span`
margin-top:1.3%;
position:absolute;
margin-left:23%;
`;
const Star3 = styled.span`
margin-top:10%;
position:absolute;
margin-left:20%;
`;
const Star4 = styled.span`
margin-top:3%;
position:absolute;
margin-left:60px;
`;
const Star5 = styled.span`
margin-top:1%;
position:absolute;
margin-left:50%;
`;
const Star6 = styled.span`
margin-top:2.5%;
position:absolute;
margin-left:30px;
`;
const Star7 = styled.span`
margin-top:5%;
position:absolute;
margin-left:90%;
`;
const Star8 = styled.span`
margin-top: 12px;
position:absolute;
margin-left:80.8%;
`;
const Star9 = styled.span`
margin-top:30px;
position:absolute;
margin-left:73%;
`;
const Star10 = styled.span`
margin-top:4%;
position:absolute;
margin-left:250px;
`;
const Star11 = styled.span`
margin-top:45px;
position:absolute;
margin-left:33%;
`;
const Star12 = styled.span`
margin-top:2%;
position:absolute;
margin-left:2px;
`;

const Star13 = styled.span`
margin-top:4.6%;
position:absolute;
margin-left:16px;
`;
const Star14 = styled.span`
margin-top:6.9%;
position:absolute;
margin-left:99px;
`;
const Star15 = styled.span`
margin-top:2.9%;
position:absolute;
margin-left:43%;
`;
const Star16 = styled.span`
margin-top:9.3%;
position:absolute;
margin-left:66%;
`;
const Star17 = styled.span`
margin-top:2.9%;
position:absolute;
margin-left:54%;
`;

const Star18 = styled.span`
margin-top:12%;
position:absolute;
margin-left:47%;
`;

const Menu = styled.div`
display:flex;
width:90%;
align-items:center;
justify-content:space-around;`;

const Menupoint1 = styled.div`box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.8) inset;
padding:7px;`;
const Menupoint2 = styled.div`box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.8) inset;
padding:7px;`;
const Menupoint3 = styled.div`box-shadow: -6px -9px 22px hsla(300, 15%, 25%, 0.8) inset;
padding:7px;`;

export default function Home(props) {
  return (
    <CardWrapper>
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
      </Headline>{" "}
      <WelcomeText>
        
      <StarWrapper>
       
<Menu><Menupoint1>zimmer</Menupoint1><Menupoint2>gallery</Menupoint2><Menupoint3>home</Menupoint3></Menu>      
        <Star1>
        <StarGroup1>
        </StarGroup1>
        </Star1>
        <Star2>
        <StarGroup2/>
        </Star2>
        <Star3>
            <StarGroup1/>
        </Star3>
        <Star4>
            <StarGroup3/>
        </Star4>
        <Star5>
          <StarGroup1/>
        </Star5>
        <Star6>
          <StarGroup1/>
        </Star6>
        <Star7>
          <StarGroup15/>
        </Star7>
        <Star8>
          <StarGroup1/>
        </Star8>
        <Star9>
          <StarGroup1/>
        </Star9>
        <Star10>
          <StarGroup15/>
        </Star10>
        <Star11>
          <StarGroup4/>
        </Star11>
        <Star12>
          <StarGroup1/>
        </Star12>
        <Star13>
          <StarGroup1/>
        </Star13>
        <Star14>
          <StarGroup15/>
        </Star14>
        <Star15>
          <StarGroup15/>
        </Star15>
        <Star16>
          <StarGroup1/>
        </Star16>
        <Star17>
          <StarGroup4/>
        </Star17>
        <Star18>
          <StarGroup5/>
        </Star18>
        </StarWrapper>
        </WelcomeText>
    </CardWrapper>
  );
}
