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
    @media (min-width: 481px ) and (max-width: 768px) {
        .large-img {
            width: 450px;
            
        }
        .navbar-text {
            flex-direction: column;
        }
        .navbar-text a {
            margin-bottom: 15px;
        }
        .navbar-text button{
            width: 100%;
        }
        nav {
            border-bottom: 2px solid #FFFFFF
        }
    }
    @media only screen and (max-width: 480px) {
        .bag-img{
            width: 300px;
        }
        .section-2-img {
            width: 280px;
        }
        .photo2 {
            width: 300px;
        }
        .large-img {
            width:250px;
        }
        .md-img{
            width: 130px;
            height: 130px;
        }
        .md-img-2{
            width: 120px;
            height: 120px;
        }
        .navbar-text {
            flex-direction: column;
        }
        .navbar-text a {
            margin-bottom: 15px;
        }
        .navbar-text button{
            width: 100%;
        }
        nav {
            flex-direction: column;
            border-bottom: 2px solid #FFFFFF
        }
    }
`