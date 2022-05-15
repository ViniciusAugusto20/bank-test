import { createGlobalStyle, css } from 'styled-components';
import { color } from './color';
import { typography } from './typography';

export const bodyStyles = css`
  @font-face {
    font-family: 'Avenir';
    font-weight: 700;
    font-style: normal;
    src: local('../../../public/fonts/avenir/Avenir-Black.otf'),
      local('Avenir-700'), url('../') format('opentype');
  }

  @font-face {
    font-family: 'Avenir';
    font-weight: 400;
    font-style: normal;
    src: local('../../../public/fonts/avenir/Avenir-Regular.ttf'),
      local('Avenir-400'), url('../') format('truetype');
  }

  html,
  body,
  figure,
  ul,
  table,
  fieldset {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s2}px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${color.app};
    color: ${color.white};
  }
  body {
    overflow: hidden;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
