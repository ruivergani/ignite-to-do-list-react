import styled from "styled-components";

// Task Component
export const StyleTask = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-400);
  background: var(--gray-500);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 736px;
  padding: 16px;
`;
export const StyleInputCheckbox = styled.input`
  /* Hide the default checkbox appearance */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-top: 3px;
  display: flex;
  width: 20px;
  height: 20px;
  border: 2px solid var(--blue); /* Blue border color */
  border-radius: 50%; /* Rounded corners */
  transition: opacity 0.2s;
  &:hover{
    opacity: 0.7;
  }
  &::after{
    content: "\u2713"; /* Checkmark unicode character */
    color: var(--white); /* Checkmark color */
    font-size: 16px;
    position: absolute;
    top: 50%;
    background-color: var(--purple);
    left: 50%;
    width: 17px;
    height: 17px;
    border: 2px solid transparent;
    border-radius: 50%; /* Rounded corners */
    transform: translate(-50%, -50%);
    opacity: 0; /* Hidden by default */
  }
  &:checked::after{
    opacity: 1; /* Show checkmark when checkbox is checked */
  }
`;

// Paragraph
export const StyleParagraph = styled.p`
  color: var(--gray-100);
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

// Button 
export const StyleButtonTrash = styled.button`
  color: var(--gray-300);
  background: var(--gray-500);
  transition: all .2s;
  cursor: pointer;
  font-size: 14px;
  margin-top: 3px;
  &:hover{
    color: var(--danger);
  }
`;