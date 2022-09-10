import styled from "styled-components";

export const CompanyName = styled.span`
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 33px;
`

export const Heading1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 66px;
line-height: 90px;
color: ${props => props.color ? "#544464" : "#FFFFFF"};
}

`
export const Span1 = styled.span`

`

export const Heading2 = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 65px;

`

export const Paragraph = styled.p`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 150%;
`

export const Heading3 = styled. h3`
    // border: 2px solid red;
`

export const preFootTextTwo = styled. h3`
// border: 2px solid red;

`

export const Span2 = styled.span`
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
line-height: 150%;
font-size: ${props => props.size ? "60px" : "35px"};
    color: ${props => props.color ? "#5537D3" : ""};

    span {
        color: #9A52DF
    }
`
