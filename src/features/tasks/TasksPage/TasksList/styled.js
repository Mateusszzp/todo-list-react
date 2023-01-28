import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    background: ${({ theme }) => theme.colors.white};
    margin-top: -14px;
    padding: 0 10px 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    word-break: break-word;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mercury};
    padding: 10px;

   ${({ hidden }) => hidden && css`
        display: none;
   `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through
`}
`;

export const ButtonDone = styled.button`
    width: 30px;
    height: 30px;
    justify-self: start;
    align-self: center;
    background: ${({ theme }) => theme.colors.Laur};
    color: white;
    border:  ${({ theme }) => theme.colors.Laur};
    cursor: pointer;
    transition: background 0.3s;

 &:hover {
    background:#07cf07;
    border-radius: 3px;
   
}
`;

export const ButtonRemove = styled.button`
   width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.milanoRed};
    grid-column: 3;
    justify-self: end;
    align-self: center;
    color: white;
    border: ${({ theme }) => theme.colors.milanoRed};
    cursor: pointer;
    transition: background 0.3s;
   
 &:hover {
    background: hsl(0, 87%, 65%);
    border-radius: 3px;
}
`;
export const Links = styled(NavLink)`
text-decoration: none;
color:red;
list-style: none;
background: yellowgreen;
`