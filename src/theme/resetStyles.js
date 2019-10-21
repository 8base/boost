// @flow

import { css } from '@emotion/core';

const resetStyles = ({ FONTS }: *) => css`
  html {
    -webkit-font-smoothing: antialiased;
    font-size: 62.5% !important;
  }

  body {
    font-family: 'Poppins', sans-serif !important;
    font-size: ${FONTS.BODY_1.fontSize} !important;
    line-height: ${FONTS.BODY_1.lineHeight} !important;
    font-weight: ${FONTS.BODY_1.fontWeight} !important;
    letter-spacing: ${FONTS.BODY_1.letterSpacing} !important;
    color: ${FONTS.BODY_1.color};
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export { resetStyles };
