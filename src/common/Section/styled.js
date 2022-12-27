import styled from "styled-components"

export const SectionsTitle = styled.section`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    background: ${({theme}) => theme.colors.white};
    margin: 7px 0 1px;

  @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: column;
    align-items: center;
  }

`;
export const Title = styled.span`
    background: ${({theme}) => theme.colors.white};
    font-weight: 900;
    margin-left: 20px;
`;
export const Task = styled.div`
    padding: 15px;
    background: ${({theme}) => theme.colors.white};
    border-top: 1px solid ${({theme}) => theme.colors.mercury};
`;
