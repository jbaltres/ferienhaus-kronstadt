import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
    font-size:14px;
`;

const Topmenu = styled.li`

`;


const Submenu = styled.span`

`;

const MenuUl = styled.ul`
    list-style-type:none;
    list-style-image:none;
    padding:0;
`;

const TopMenuAnker = styled.a`
width:120px;
text-align:center;

padding:15px;
color:white;
font-weight:bold;
text-decoration:none;
background-color:#985905;
margin:0;
`;

const TopMenuUl= styled.ul`
display:block;

:hover {
    display:block;
    z-index:500;
}
`;

const SubMenuAnker = styled(Link)`
padding:15px;
color:white;
font-weight:bold;
text-decoration:none;
background-color:#985905;
margin:0;
font-size:12px;
width:120px;
position:relative;
clear:both;
:hover {
background-color:#BF7818 !important;
}
`;

function Menu2() {
return (
<MenuContainer>
    <MenuUl>
        <Topmenu>
            <TopMenuAnker>Menu</TopMenuAnker>
            <TopMenuUl>
                <Submenu><SubMenuAnker to="/home">Home</SubMenuAnker></Submenu>
                <Submenu><SubMenuAnker to="/zimmer">Zimmer</SubMenuAnker></Submenu>
                <Submenu><SubMenuAnker to="/preise">Preise</SubMenuAnker></Submenu>
                <Submenu><SubMenuAnker to="/aboutkronstadt">Über Kronstadt</SubMenuAnker></Submenu>
            </TopMenuUl>
        </Topmenu>
    </MenuUl>
</MenuContainer>
);
}

export default Menu2;




