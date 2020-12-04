import Theme from '@styles/GlobalStyles'

function Application({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )

}

export default Application
