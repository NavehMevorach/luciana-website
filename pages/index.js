import React, { useState } from 'react'
import Modal from 'react-modal'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Food from '../components/Food'
import Footer from '../components/Footer'
import Dinning from '../components/Dinning'
import Bar from '../components/Bar'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    width: '90%',
  },
}

Modal.setAppElement('#__next')

export const langContext = React.createContext()

export default function Home() {
  const [isEn, setIsEn] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function updateLang() {
    setIsEn((isEn) => !isEn)
  }
  return (
    <langContext.Provider value={{ isEn, updateLang }}>
      <div id="modal" className="overflow-x-hidden relative">
        <Head>
          <title>Luciana Dcity Italian House.</title>
          <meta name="description" content="Luciana Dcity Italian House." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Hero openModal={openModal} closeModal={closeModal} />
        <Dinning />
        <Bar />
        <Food openModal={openModal} closeModal={closeModal} />
        <Footer />
        {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}>
          <div className="h-full w-full bg-menu bg-cover "></div>
        </Modal> */}
      </div>
    </langContext.Provider>
  )
}
