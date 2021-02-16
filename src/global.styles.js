import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans';
    padding: 1rem 6rem;

    @media screen and (max-width: 800px) {
      padding: 1rem 2rem;
    }

    @media screen and (max-width: 800px) {
      padding: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
