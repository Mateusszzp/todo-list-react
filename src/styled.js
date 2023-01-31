import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    background-color: #e7e5e5;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  `;
export const Body = styled.div`
    margin: auto;
    max-width: 900px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    background-color: #e7e5e5;
`
export const StyledNavLink = styled(NavLink)`
    padding: 15px;
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
// export const Link = styled.li`
// text-decoration: none;
// color:red;
// list-style: none;
// `