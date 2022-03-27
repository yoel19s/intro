import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yoel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thankyou for visiting!" />
        <p className="description">
          Can we make a conversation? 
          <link rel="Start with WhatsApp" href="https://wa.me/6283844000383/" />      
       </p>
      </main>

      <Footer />
    </div>
  )
}
