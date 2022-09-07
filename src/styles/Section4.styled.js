import styled from "styled-components";


export const FourthSection = styled.section`
    // height: 595px;
    border-radius: 30px;
    @media (min-width: 769px ) and (max-width: 1024px) {
        // background:#9A52DF
      }
    .h2 {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 65px;
        color: #EEE9F2;
        }
        .p-2 {
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 150%;
            color: #EEE9F2;


          }
          .btn-1 {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */
            
            text-align: center;
            
            color: #000000;
          }
`
export const Divider2 = styled.div`
    width: 90%;
    height: 50px;
    background: #9A52DF;
    margin: 0 auto;
    border-radius: 0 30px 30px 0;

    @media (min-width: 769px ) and (max-width: 1024px) {
        visibility: hidden;
    }
    `
export const FourthSectionContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 769px ) and (max-width: 1024px) {
        flex-direction: column;
        margin-bottom: 3rem;

      }

    `
export const FourthSectionText = styled.div`
    background: #9A52DF;
    border-radius: 0 50px 50px 0;
    padding: 2rem 0;
    // height: 545px;
    text-align: left
    `
export const FourthSectionImg = styled.div`
    height: 545px;
    border-radius: 30px 0 0 0 ;
    @media (min-width: 769px ) and (max-width: 1024px) {
        background:#FFFFFF;
        border-radius: 0 ;
        height: unset;
        padding: 2rem 0;

      }
    `