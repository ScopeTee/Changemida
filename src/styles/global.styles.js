import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        margin: 0 auto;
        width: 100%;
        max-width: 1440px;
        // border: 10px solid red;
    }

    .overlay {
        border: 3px solid red;
        position: absolute;
        left:47.5%;
        // right: 40.18%;
        margin-top: -9%;
    }

`