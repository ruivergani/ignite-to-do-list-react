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
  // Form CSS
  .task-form{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
  }
  form{
    display: flex;
    align-items: center;
    gap: 8px;
  }
  // Content Tasks
  .task-content{
    width: 100%;
    margin-top: 64px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 26px;
    .task-content-top{
      width: 100%;
      max-width: 736px;
      display: flex;
      justify-content: space-between;
      .task-created{
        p{
          color: var(--blue);
          font-family: 'Inter';
          font-size: 14px;
          font-weight: 700;
          span{
            display: inline-block;
            color: var(--gray-200);
            font-family: 'Inter';
            font-size: 12px;
            font-weight: 700;
            background: var(--gray-500);
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 2px;
            padding-bottom: 2px;
            border-radius: 999px;
            margin-left: 8px;
          }
        }
      }
      .task-done{
        p{
          color: var(--purple);
          font-family: 'Inter';
          font-size: 14px;
          font-weight: 700;
          span{
            display: inline-block;
            color: var(--gray-200);
            font-family: 'Inter';
            font-size: 12px;
            font-weight: 700;
            background: var(--gray-500);
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 2px;
            padding-bottom: 2px;
            border-radius: 999px;
            margin-left: 8px;
          }
        }
      }
    }
    .task-content-bottom{
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      justify-content: center;
      .empty-task{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border-top: 1px solid var(--grey-400, #333);
        padding-top: 4rem;
        width: 100%;
        min-width: 736px;
        h3{
          color: var(--gray-300);
          text-align: center;
          font-family: 'Inter';
          font-size: 16px;
          font-weight: 700;
          line-height: 140%; /* 22.4px */
        }
        
      }
    }
  }
`;
export default GlobalStyle;
