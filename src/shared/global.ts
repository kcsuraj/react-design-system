import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const bodyStyles = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Open Sans', sans-serif;
`;

const GlobalStyle = createGlobalStyle`
   ${reset}
   ${bodyStyles}
`;

export default GlobalStyle;
