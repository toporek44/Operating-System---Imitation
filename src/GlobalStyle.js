import { createGlobalStyle } from "styled-components";
import bg from '../src/assets/background.png'

const GlobalStyle = createGlobalStyle`


*, *::before, *::after{
    box-sizing:border-box;
}

html{
font-size:62.5%;


}

body{
    margin:0;
    padding: 0;
    font-family:'Montserrat', sans-serif;
    font-size: 1.6rem;
   
    width:100%;
    height: 100%;
    position:relative;
}


`;

export default GlobalStyle;
