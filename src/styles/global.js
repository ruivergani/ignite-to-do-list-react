import { createGlobalStyle } from "styled-components"; // Create Global Style (styled-components)

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    // Produto
    --blue-dark: #1E6F9F;
    --blue:#4EA8DE;
    --purple-dark: #5E60CE;
    --purple:#8284FA;
    // Base
    --gray-700: #0D0D0D;
    --gray-600: #1A1A1A;
    --gray-500: #262626;
    --gray-300: #808080;
    --gray-200: #D9D9D9;
    --gray-100: #F2F2F2;
    // Feedback
    --danger: #E25858;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
  }
  body{
    background-color: var(--gray-600);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased; /* webkit padrao */
  }
  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  :focus{ /* click on the elements (border) */
    outline: transparent;
    box-shadow: 0 0 0 2px var(--purple);
  }
  .container{
    width: 100%;
    max-width: 127.6rem;
    margin: 0 auto;
    padding: 0;
  }
  @media (max-width: 1400px){
    .container{
      padding: 0px 2.5rem;
    }
  }
  @media (max-width: 300px){
    .container{
      padding: 0px 1.5rem;
    }
  }
`;
export default GlobalStyle;
