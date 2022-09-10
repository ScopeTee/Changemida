import styled from 'styled-components';
import Button from 'react-bootstrap/Button';



export const Btn = styled(Button)`
    background: ${props => props.bg2 ? "#9A52DF" : "#FFFFFF"};
    color: ${props => props.color ? "#FFFFFF" : "#000000"};
`
export const Anchor = styled.a`
    text-decoration: none;
    color: ${props => props.color ? "#544464" : "#FFFFFF"};
`
