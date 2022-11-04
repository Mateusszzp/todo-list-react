import styled, { css } from "styled-components";

export const List = styled.ul`
    background: white;
    margin-top: -14px;
    padding: 0 10px 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    word-break: break-word;
    border-bottom: 1px solid #e7e5e5;
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
    background-color: hsl(120, 100%, 25%);
    color: white;
    border: hsl(120, 100%, 25%);
    cursor: pointer;
    transition: background 0.3s;

 &:hover {
    background-color: hsl(120, 100%, 40%);
    border-radius: 3px;
    }
`;

export const ButtonRemove = styled.button`
   width: 30px;
    height: 30px;
    background-color: hsl(0, 87%, 40%);
    grid-column: 3;
    justify-self: end;
    align-self: center;
    color: white;
    border: hsl(0, 87%, 45%);
    cursor: pointer;
    transition: background 0.3s;
   
 &:hover {
    background-color: hsl(0, 87%, 65%);
    border-radius: 3px;
    }
`;