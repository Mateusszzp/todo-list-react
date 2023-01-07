import styled from "styled-components";


export default styled.input`
    flex-basis: 100%;
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.mercury};
    margin: 5px 0;

  @media (min-width:${({theme}) => theme.breakpoints.mobile}px) 
  {
    flex-basis: 78%;
  }
`;
 
