import styled from "styled-components";
import Container from 'react-bootstrap/Container';


export const Wrapper = styled(Container)`
    // border: 2px solid blue;
    background: ${props => props.bg ? "rgba(85, 55, 211, 0.21)" : ""};
    clip-path: ${props => props.clip ? "polygon(0 0, 65% 0, 100% 32%, 100% 100%, 0 100%, 0% 50%)" : " "};

    // color: ${props => props.col ? "white" : "black"}
    background: ;
`

export const HeaderWrap = styled.div`
border: 2px solid blue;
background: #5537D3;
opacity: 0.8;
color: #FFFFFF

// background: ${props => props.bg ? "red" : "black"};
// color: ${props => props.col ? "white" : "black"}
`





export const Wrap = styled.div`
    // border: 2px solid red;
`
export const SectionWrap = styled.div`
background: ${props => props.one ? "radial-gradient(50% 50% at 50% 50%, #F0ECFF 0%, rgba(240, 236, 255, 0) 100%)":" rgba(245, 215, 255, 0.29)"};
opacity: ${props => props.opacity ? "0.8" : "1" }
border-radius: ${props => props.bent ? "32px 32px 50px 0 " : "0"}    
display:flex;
    flex-direction: ${props => props.direction ? "row" : "column"};
    `

    export const SectionBottomWrap = styled.div`
    background: #9A52DF;
    color: white;
    `

export const Divider2 = styled.div`
    width: 90%;
    height: 50px;
    background: #9A52DF;
    // margin: 0 auto;
    border: 2px solid #9A52DF;
    border-radius: 0 30px 30px 0;
`