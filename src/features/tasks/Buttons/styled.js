import styled from "styled-components";

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.teal};
    border: none;
    transition: 0.6s;
    cursor: pointer;
    margin-right: 20px;

  &:hover {
    filter:brightness(110%);
  }
  &:active{
      filter:brightness(120%);
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.alto};
  }

  @media(max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0%;
  }
`;