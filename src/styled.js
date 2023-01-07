import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle, } from "styled-components";


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

export const StyledNavLink = styled(NavLink)`
&.active {
  color:red;
}
`;