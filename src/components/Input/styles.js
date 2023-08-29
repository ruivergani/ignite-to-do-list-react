import styled from "styled-components";

// Input
export const StyleInput = styled.input`
  width: 100%;
  min-width: 638px;
  max-width: 638px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--gray-700);
  background: var(--gray-500);
  color: var(--gray-100);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  &::placeholder{
    color: var(--gray-300);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; 
  }
  // Responsive
  @media (max-width:991px){
    min-width: auto;
    padding-right: 30px;
    padding-left: 30px;
  }
`;