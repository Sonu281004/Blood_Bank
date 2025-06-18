import Head from 'next/head'
import Hero from '../components/Hero'
import Products from '../components/Products'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Hero />
      <Products />
      <FAQ />
    </>
  )
}