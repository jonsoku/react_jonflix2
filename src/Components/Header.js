import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
color: white;
position: fixed;
top:0;
left:0;
width:100%;
height: 50px;
display:flex;
align-items: center;
padding: 0 10px;
background-color:rgba(8,8,8,0.4);
box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
`;

const ALink = styled(Link)`
width:50px;
text-align: center;
display:flex;
align-items: center;
justify-content: center;
height: 50px;
`;

export default () => (
    <Header>
        <List>
            <Item><ALink to="/">Movies</ALink></Item>
            <Item><ALink to="/tv">TV</ALink></Item>
            <Item><ALink to="/search">Search</ALink></Item>
        </List>
    </Header>
)