import styled from "styled-components";

export const HeaderSection = styled.header`
    // border: 3px solid red;
    background: #5537D3;
    opacity: 0.8;
    color: white;
    font-family: 'Nunito', sans-serif;
    // height: 763px;

    .p-1 {
        color: white;
        font-weight: 700;
        font-size: 24px;
        font-weight: 800;
      line-height: 33px;
      letter-spacing: -0.16500000655651093px;
      }
      .a-1 , .navbar-text a {
        text-decoration: none;
        color: white;
      font-size: 24px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0em;
      
      }
      .btn-1 {
        color: #9A52DF;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      }
      .h1 {
        width: 100%;
      font-size: 66px;
      font-weight: 700;
      line-height: 90px;
      letter-spacing: 0em;
      
      }
      .sp-1 {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        }
        .btn-0{
            background: #9A52DF;
            box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.13);
            border-radius: 10px;
            width:300px
          }
        
`
export const HeaderSectionText = styled.div`
  width: -webkit-fill-available;
  text-align: left;
  @media (min-width: 1025px ) and (max-width: 1200px) {
    width: 100%;

    .form-flex{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .btn-0 {
      width: 100%;
      margin: 10px 0;
    }
  }
  @media (min-width: 769px ) and (max-width: 1024px) {
    width: 100%;
    .form-flex{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .btn-0 {
      width: 100%;
      margin: 10px 0;
    }
  }
  @media (min-width: 481px ) and (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;

    .form-flex{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .btn-0 {
      width: 100%;
      margin: 10px 0;
    }
    .h1, .sp-1 {
      text-align: center;
    }

  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 3rem;

    .form-flex{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .btn-0 {
      width: 100%;
      margin: 10px 0;
    }
    .h1, .sp-1 {
      text-align: center;
    }
  }
`

export const HeaderSectionFlex = styled.div`
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media (min-width: 481px ) and (max-width: 768px) {
            flex-direction: column;
          }
          @media (max-width: 480px ) {
            flex-direction: column;
          }
`