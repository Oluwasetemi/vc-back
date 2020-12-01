import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import primaryFont from '../public/assets/fonts/Matteo.otf';
// @font-face {
//   font-family: Matteo;
//   src: url(${primaryFont}) ;
// }
import PropTypes from 'prop-types';

const theme = {
  breakpoint: {
		lg: '1058px',
		md: '768px',
		sm: '480px',
	},
}
const GlobalStyle = createGlobalStyle`

  html,
  body,p,h1,h2,h3,h4 {
    padding: 0;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

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

 .flex{
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

`;



const Theme = (props) => (
	<ThemeProvider theme={theme}>
		<div>
			<GlobalStyle />
			{props.children}
		</div>
	</ThemeProvider>
);
Theme.propTypes = {
	children: PropTypes.any.isRequired,
};

export { theme };
export default Theme;
