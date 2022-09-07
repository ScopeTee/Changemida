import styled from "styled-components";


export const SecondSection= styled.section`
    font-family: 'Nunito', sans-serif;
    // height: 635px;
    background: radial-gradient(50% 50% at 50% 50%, #F0ECFF 0%, rgba(240, 236, 255, 0) 100%);
    opacity: 0.8;
    .h2 {
        font-size: 48px;
        font-weight: 700;
        line-height: 65px;
        letter-spacing: 0em;
        text-align: left;
        width: 677px;
        }
        .p-2 {
            font-size: 24px;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 0em;
            text-align: left;
            width: 473px;
          }
          .btn-2 {
            background: #9A52DF;
          box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.13);
          border-radius: 10px;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          }
          .section-2-img {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .naira-img {
            border-radius: 32px;
            background: green;
          
          }
          .d-1 {
            background: url(../Images/Vector-1.png);
            border: 5px solid #7157D7;
            border-radius: 32px;   
          }
          .d-2 {
            background: url(../Images/Vector-1.png);
            border: 3px solid #AF91FF;
            border-radius: 32px;
          }
          .d-3{
            background: url(../Images/Vector-1.png);
            border: 2px solid #000000;
            border-radius: 32px;
          }
`

export const SecondSectionFlex = styled.div`
          display: flex;
          align-items: center;
          justify-content: space-between;
          
          @media (min-width: 1025px ) and (max-width: 1200px) {
            flex-direction: column;
            margin-bottom: 3rem;

          }
          @media (min-width: 769px ) and (max-width: 1024px) {
            flex-direction: column;
            margin-bottom: 3rem;

          }
          @media (min-width: 481px ) and (max-width: 768px) {
            flex-direction: column;
            margin-bottom: 3rem;
          }

`

export const SecondSectionText = styled.div`
    text-align: left;

    @media (min-width: 1025px ) and (max-width: 1200px) {
      padding-bottom: 3rem;
      margin: 0 auto;
    }
    @media (min-width: 769px ) and (max-width: 1024px) {
      padding-bottom: 3rem;
      margin: 0 auto;
    }
    @media (min-width: 481px ) and (max-width: 768px) {
      text-align: center;
      margin-bottom: 3rem;


      .h2, .p-2{
        text-align: center;
        width: unset;
      }
    }
`