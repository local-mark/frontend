// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Pretendard 폰트 파일을 불러옵니다.
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';
import PretendardBold from '../assets/fonts/Pretendard-Bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2'),
         url(${PretendardBold}) format('woff2');
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-size: 1.6rem; /* 16px */
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }

  a {
    text-decoration: none;
    color: inherit;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    outline: none;
    border: 1px solid #ddd;
    padding: 0.5rem;
    border-radius: 0.3rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.4rem;
  }

  h6 {
    font-size: 1.2rem;
  }

  /* Additional custom global styles */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    overflow-x: auto; /* 가로 스크롤 허용 */
  }

  .row {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -0.5rem;
  }

  .col {
    flex: 1;
    padding: 0 0.5rem;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }
`;

export default GlobalStyles;
