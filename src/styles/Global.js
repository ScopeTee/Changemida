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
`