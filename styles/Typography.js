import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  @font-face {
    font-family: Matteo;
    src: url('/assets/fonts/Matteo.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --black: #000000;
    --red: #000000;
    --yellow: #000000;
  }
  html, body {
    font-family: Matteo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    padding: 0;
    margin: 0;
  }
  p, li {
    letter-spacing: 0.5px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
