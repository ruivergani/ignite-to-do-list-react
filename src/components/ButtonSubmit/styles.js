import {styled} from 'styled-components';

export const StyleButtonSubmit = styled.button`
  border-radius: 8px;
  color: var(--gray-100);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
  background: var(--blue-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all .2s;
  &:hover{
    background: var(--blue);
  }
`;