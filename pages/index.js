import Footer from '@components/Footer'
import Header from '@components/Header'
import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Virtual Closet Admin!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Virtual Closet!" />
        <Link className="description" href="/dashboard">
          Go to dashboard
        </Link>
      </main>
      <Footer />
    </div>
  )
}
