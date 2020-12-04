import Footer from '@components/Footer'
import Header from '@components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Virtual Closet Admin!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Virtual Closet!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
