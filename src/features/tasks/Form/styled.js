import styled from "styled-components";

export const Forms = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
    background:${({theme}) => theme.colors.white};
    margin: -15px 0 0;
`;
export const Input = styled.input`
    flex-basis: 100%;
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.mercury};
    margin: 5px 0;

    
    
    
  @media (min-width:${({theme}) => theme.breakpoints.mobile}px) 
  {
    flex-basis: 78%;
  }
`;
export const Button = styled.button`
    flex-wrap: wrap;
    flex-basis: 100%;
    background-color: ${({theme}) => theme.colors.teal};
    color: ${({theme}) => theme.colors.white};
    border: none;
    padding: 8px;
    margin: 5px 0;
    cursor: pointer;
    transition:0.5s;

 &:hover {
    filter:brightness(120%);
    transform:scaleY(1.2) scaleX(1.08);
 }

    @media (min-width:${({theme}) => theme.breakpoints.mobile}px) 
    {
        flex-basis: 20%;
        flex-wrap: unset;
    
    }
`;
