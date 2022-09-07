import styled from "styled-components";

export const ThirdSection = styled.section`
    font-family: 'Nunito', sans-serif;
    // height: 680px;
    background: rgba(245, 215, 255, 0.29);
    opacity: 0.8;
    border-radius: 30px;
    
    .h2-1 {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 65px;
        text-align: center;
        
        color: #544464;
        
        }
        .p-3{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 150%;
            text-align: center;
            color: #544464;
            
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
`

export const ThirdSectionImg = styled.div`
display:flex;
align-items: center;
justify-content: center;
@media (min-width: 481px ) and (max-width: 768px) {
    flex-direction: column;
}
@media only screen and (max-width: 480px) {
    flex-direction: column;

}
`

export const ImgSetOne = styled.div`
    display:flex;
    flex-direction: column;

    @media (min-width: 481px ) and (max-width: 768px) {
    // border: 2px solid red;
    // width: 150px

    }
    @media only screen and (max-width: 480px) {
        img {
            width: 250px;

        }

    }
`
export const OverlayArrow = styled.div`
    position: absolute;
    left:47.5%;
    // right: 40.18%;
    margin-top: -9%;

    @media (min-width: 1025px ) and (max-width: 1200px) {
        position: absolute;
        left:46.5%;
        margin-top: -10%;
    }
    @media (min-width: 769px ) and (max-width: 1024px) {
        position: absolute;
        left:45.5%;
        margin-top: -13%;
    }
    
    @media (min-width: 481px ) and (max-width: 768px) {
        // border: 2px solid red;
        // transform: rotate(90deg);
        // position: absolute;
        // left:45.5%;
        // margin-top: -13%;  
        visibility: hidden;  
        }
        @media only screen and (max-width: 480px) {
            visibility: hidden;  
        }
`
export const ThirdSectionText = styled.div`
    text-align: center;
`