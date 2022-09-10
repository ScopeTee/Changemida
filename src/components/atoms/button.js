// import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';



export const Btn = styled(Button)`
    // background: ${props => props.bg ? "#5537D3" : "#FFFFFF"};
    background: ${props => props.bg2 ? "#9A52DF" : "#FFFFFF"};
    color: ${props => props.color ? "#FFFFFF" : "#000000" || "#9A52DF"};
    // border: ${props => props.border ? "2px solid red" : "none"}
`
export const FooterAnch = styled.a`
    text-decoration: none;
    color: #544464;
`
