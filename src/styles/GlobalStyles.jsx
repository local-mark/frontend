import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;


  }

  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #FFF;;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  body, button {
    font-family: Pretendard;
  }
`;
export default GlobalStyles;
