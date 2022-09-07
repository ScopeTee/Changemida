import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0 auto;
        border: 5px solid black;
    }


    @media (min-width: 1025px ) and (max-width: 1200px) {
        .large-img {
            width: 550px;
        }
        .md-img{
            width: 150px;
            height: 150px;
        }
        .md-img-2{
            width: 130px;
            height: 130px;
        }
    }
`