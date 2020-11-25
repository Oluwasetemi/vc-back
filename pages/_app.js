import GlobalStyles from '@styles/GlobalStyles'

function Application({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )

}

export default Application
