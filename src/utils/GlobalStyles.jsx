import React from "react";
import { createGlobalStyle, css } from "styled-components";
import { degradedGreys } from "./colors";

const Reset = css`
  * {
    box-sizing: border-box;
  }
`;

// ---- if needed for custom font ----
// const Fonts = css`
// @font-face {
//     font-family: 'Font Name';
//     src: local('Font Name'), local('FontName'),
//         url(${NameOfFontWoff2}) format('woff2'),
//         url(${NameOfFontWoff}) format('woff');
//         font-weight: 300;
//         font-style: normal;
// }

const BaseStyles = css`
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${degradedGreys.gray2};
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const MergeStyles = createGlobalStyle`
${Reset};
${BaseStyles};
`;

export const GlobalStyles = () => {
  return (
    <>
      <MergeStyles />
    </>
  );
};

export default GlobalStyles;
