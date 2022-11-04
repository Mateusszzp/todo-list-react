import styled from "styled-components"

export const SectionsTitle = styled.section`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    background: white;
    margin: 7px 0 1px;

  @media (max-width:640px) {
    flex-direction: column;
    align-items: center;
    }

`;
export const Title = styled.span`
    background: white;
    font-weight: 900;
    margin-left: 20px;
`;
export const Task = styled.div`
    padding: 15px;
    background: white;
    border-top: 1px solid #e7e5e5;
`;
