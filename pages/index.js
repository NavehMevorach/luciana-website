import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Food from '../components/Food'
import Footer from '../components/Footer'
import Dinning from '../components/Dinning'
import Bar from '../components/Bar'

export const langContext = React.createContext()

export default function Home() {
  const [isEn, setIsEn] = useState(false)

  function updateLang() {
    setIsEn((isEn) => !isEn)
  }
  return (
    <langContext.Provider value={{ isEn, updateLang }}>
      <div className="overflow-x-hidden">
        <Head>
          <title>Luciana Dcity Italian House.</title>
          <meta name="description" content="Luciana Dcity Italian House." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Hero />
        <Dinning />
        <Bar />
        <Food />
        <Footer />
      </div>
    </langContext.Provider>
  )
}
