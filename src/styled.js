import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";


export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    margin: auto;
    max-width: 900px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    background-color: #e7e5e5;
  }
`;

export const StyledNavLink = styled(NavLink)`
 padding: 10px;

 color: white;
 text-decoration: none;
 cursor: pointer;
 
&.active {
  color:white;
  font-weight: bold;
  } 
`;
export const Ul = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
list-style: none;
padding:25px;
background-color: ${({ theme }) => theme.colors.teal};
margin: 0;
`;