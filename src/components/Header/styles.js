import styled from "styled-components";

// Header
export const StyleHeader = styled.header`
  background-color: var(--gray-700);
  padding-top: 4.5rem;
  padding-bottom: 5rem;
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // Responsive
  @media (max-width: 768px){
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;