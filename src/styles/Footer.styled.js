import styled from "styled-components";

export const FooterSection = styled.section`
    // height: 652px;
    font-family: Nunito;
    background: rgba(85, 55, 211, 0.21);
    clip-path: polygon(0 0, 65% 0, 100% 32%, 100% 100%, 0 100%, 0% 50%);
`
export const FooterSectionText = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
text-align: left;
// border: 2px solid blue;
    .wallet{
        color: #9A52DF
    }
`

export const FooterSectionTextWrap = styled.div`
    width: 30%;
    @media (min-width: 1025px ) and (max-width: 1200px) {
        width: 35%;
    }
    @media (min-width: 769px ) and (max-width: 1024px) {
        width: 50%;

    }
    @media (min-width: 481px ) and (max-width: 768px) {
        width: 80%;
    }
    @media only screen and (max-width: 480px) {
        width: 100%;
    }

    .h3{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 150%;
        color: #5537D3;

    }
    .sp-4 {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;   
        color: #544464;
      }


`
export const FooterSectionFlex = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sub-flex{
        display: flex;
        .sp-5 a {
            // border: 2px solid red;
            margin: 0 2em 0 0;
        }
    }

    @media (min-width: 769px ) and (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;

        .sub-flex{
            display: flex;
            .sp-5 a {
                // border: 2px solid red;
                margin: 0 2em 0 0;
            }
        }
    }
    @media (min-width: 481px ) and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        .sub-flex{
            display: flex;
            .sp-5 a {
                // border: 2px solid red;
                margin: 0 2em 0 0;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;

        .sub-flex{
            display: flex;
            flex-direction: column;
            .sp-5 a {
                // border: 2px solid red;
                margin: 0 2em 0 0;
            }
        }
    }
`
export const FooterSectionAlign = styled.div`
    text-align: left;
    // border: 2px solid red;

    .h2-5 {
        font-size: 60px;
        font-weight: 700;
        line-height: 82px;
        letter-spacing: 0em;
        text-align: left;
        color: #5537D3;
        
          }
          .sp-4 {
            font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          color: #544464;
          margin-top: -5%;
          
          }
          .sp-5 a {
            font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          text-decoration: none;
          color: #544464;
          }        
`
