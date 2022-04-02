import React, { useState } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Food from '../components/Food'
import Footer from '../components/Footer'
import Dinning from '../components/Dinning'
import Bar from '../components/Bar'
import useWindowDimensions from './../hooks/useWindowDimensions'
import FoodTruck from '../components/FoodTruck'

const customStyles = {
  content: {
    position: 'absolute',
    backgroundColor: '#FFF',
    padding: '15px',
    zIndex: '1000',
    width: '90%',
    borderRadius: '.5em',
  },
  overlay: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, .8)',
    zIndex: '1000',
    overflowY: 'auto',
  },
}

Modal.setAppElement('#__next')

export const langContext = React.createContext()

export default function Home() {
  const [isEn, setIsEn] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)
  const { width } = useWindowDimensions()

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
      <div id="modal" className="overflow-hidden relative">
        <Head>
          <title>Luciana Dcity Italian House.</title>
          <meta name="description" content="Luciana Dcity Italian House." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Hero openModal={openModal} closeModal={closeModal} />
        <Dinning />
        <Bar />
        <FoodTruck />
        <Food openModal={openModal} closeModal={closeModal} />
        <Footer />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}>
          <div className="m-h-[1000px] h-full w-full overflow-y-scroll">
            {isEn ? (
              <img
                src={
                  width >= 750 ? '/assets/menu-en.png' : '/assets/Menu_en_m.png'
                }
              />
            ) : (
              <img
                src={
                  width >= 750 ? '/assets/menu-he.png' : '/assets/Menu_he_m.png'
                }
              />
            )}
          </div>
        </Modal>
      </div>
    </langContext.Provider>
  )
}
