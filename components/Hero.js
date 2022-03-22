import { useContext } from 'react'
import { useRouter } from 'next/router'
import { langContext } from './../pages'
import { FaWaze, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Button from './Button'

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`
}

function Hero() {
  const { isEn } = useContext(langContext)

  const router = useRouter()

  const handleMenuClick = (e) => {
    console.log('here')
    router.push(
      'https://tabitisrael.co.il/online-reservations/create-reservation?step=search&orgId=6146faa77f521602eed701a2'
    )
  }

  return (
    <div
      id="home"
      className="relative  h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center text-center text-white">
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`absolute md:top-[calc(50%_-_80px)] top-[calc(50%_-_98px)] left-1/2 -translate-x-1/2 lg:text-7xl md:text-5xl text-4xl px-2 mb-8 font-bold`}>
          {'Luciana'.split('').map((letter, ind) => (
            <span
              key={generateKey(ind)}
              className={`text-white element-from-blur element-from-blur-animate animation-duration-top-${
                ind + 1
              }`}>
              {letter}
            </span>
          ))}
          <span className="ml-[10px]">
            {'Dcity'.split('').map((letter, ind) => (
              <span
                key={generateKey(ind)}
                className={`text-base element-from-blur element-from-blur-animate animation-duration-bottom-${
                  ind + 1
                }`}>
                {letter}
              </span>
            ))}
          </span>
          <br />
          {'Italian House'.split('').map((letter, ind) => (
            <span
              key={generateKey(ind)}
              className={`text-white element-from-blur element-from-blur-animate animation-duration-top-${
                ind + 1
              }`}>
              {letter}
            </span>
          ))}
        </h1>
        <div className="fadeInTop flex space-x-4 absolute top-[calc(50%_+_100px)]">
          <Button he="הזמנת שולחן" en="Reserve" handleClick={handleMenuClick} />
          <Button he="תפריט" en="Menu" handleClick={handleMenuClick} />
        </div>
        <div className="flex justify-center items-center space-x-3 md:hidden mt-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.link/vrxw1u"
            className="cursor-pointer">
            <IconContext.Provider
              value={{
                color: 'white',
                size: '20px',
              }}>
              <div>
                <FaWhatsapp />
              </div>
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://waze.com/ul?a=share_drive&locale=en&sd=ItZAHblClAGqSSq77w"
            className="cursor-pointer">
            <IconContext.Provider
              value={{
                color: 'white',
                size: '20px',
              }}>
              <div>
                <FaWaze />
              </div>
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/%D7%9C%D7%95%D7%A6%D7%A0%D7%94-Dcity-%D7%9E%D7%A2%D7%9C%D7%94-%D7%90%D7%93%D7%95%D7%9E%D7%99%D7%9D-%D7%9E%D7%A1%D7%A2%D7%93%D7%94-%D7%90%D7%99%D7%98%D7%9C%D7%A7%D7%99%D7%AA-%D7%9B%D7%A9%D7%A8%D7%94-%D7%9C%D7%9E%D7%94%D7%93%D7%A8%D7%99%D7%9F-107030365000099/"
            className="cursor-pointer">
            <IconContext.Provider
              value={{
                color: 'white',
                size: '20px',
              }}>
              <div>
                <FaFacebook />
              </div>
            </IconContext.Provider>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/luciana_dcity/"
            className="cursor-pointer">
            <IconContext.Provider
              value={{
                color: 'white',
                size: '20px',
              }}>
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
          </a>
        </div>
      </div>

      <video
        src="/assets/luciana.mp4"
        className={`w-screen h-screen -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover`}
        autoPlay
        loop
        muted></video>
    </div>
  )
}

export default Hero
