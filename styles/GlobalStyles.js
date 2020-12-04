// import primaryFont from '../public/assets/fonts/Matteo.otf';
// @font-face {
//   font-family: Matteo;
//   src: url(${primaryFont}) ;
// }
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Typography from "./Typography";

const theme = {
  breakpoint: {
    lg: "1058px",
    md: "768px",
    sm: "480px",
  },
};
const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
  }

 .flex {
    display: flex;
    align-items: center;
  }
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img{
    vertical-align: middle;
  }

`;

const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Typography />
      {props.children}
    </div>
  </ThemeProvider>
);
Theme.propTypes = {
  children: PropTypes.any.isRequired,
};

export { theme };
export default Theme;
