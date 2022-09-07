import styled from "styled-components";

export const FifthSection = styled.section`
    font-family: 'Nunito', sans-serif;
    text-align: center;
    
    .h2-2 {
        font-size: 66px;
        font-weight: 700;
        line-height: 90px;
        letter-spacing: 0em;
        text-align: center;
        color: #544464;      
    }
    .btn-2{
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
export const FifthSectionContentOne = styled.section``
export const FifthSectionContentTwo = styled.section``


export const FifthSectionMainFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 769px ) and (max-width: 1024px) {
        flex-direction: column;
        // margin-bottom: 3rem;

      }
      @media (min-width: 481px ) and (max-width: 768px) {
        flex-direction: column;
        // margin-bottom: 3rem;

      }
      @media only screen and (max-width: 480px) {
        flex-direction: column;
        // margin-bottom: 3rem;

      }

`
export const MainFlexOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media (min-width: 769px ) and (max-width: 1024px) {
        flex-direction: row;
        margin: 0 1.5rem;
        margin-bottom: 2rem;
        img{
            margin: 0 2em;
        }
      }
      @media (min-width: 481px ) and (max-width: 768px) {
        flex-direction: row;
        margin: 0 1.5rem;
        margin-bottom: 2rem;
        img{
            margin: 0 2em;
        }
    }
    @media only screen and (max-width: 480px) {
        flex-direction: row;
        margin: 0 1.5rem;
        margin-bottom: 2rem;
        img{
            // margin: 0 2em;
        }
    }
`

export const MainFlexTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media (min-width: 769px ) and (max-width: 1024px) {
        flex-direction: row;
        margin-top: 2rem;

        img{
            margin: 0 2em;
        }
      }
      @media (min-width: 481px ) and (max-width: 768px) {
        flex-direction: row;
        // margin: 0 1.5rem;
        margin-top: 2rem;
        img{
            margin: 0 2em;
        }
    }
    @media only screen and (max-width: 480px) {

        flex-direction: row;
        // margin: 0 1.5rem;
        margin-top: 2rem;
        img{
            // margin: 0 2em;
        }
    }
    
`