import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0px auto;
    max-width: 900px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    background-color: #e7e5e5;
  }
`;