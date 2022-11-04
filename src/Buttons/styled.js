import styled from "styled-components";

export const Button = styled.button`
    background: white;
    color: hsl(180, 100%, 25%);
    border: none;
    transition: 0.6s;
    cursor: pointer;
    margin-right: 20px;

  &:hover {
    color: hsl(180, 100%, 35%);
    }
  &:disabled {
    color: #dadada;
    }

  @media(max-width:640px) {
        margin: 0%;
    }
`;