import Head from 'next/head'

import LandingPage from '@/components/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Megahyped</title>
        <meta name="description" content="Megahyped NFT official website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vector.ico" />
      </Head>
      
      <LandingPage />
    </>
  )
}
