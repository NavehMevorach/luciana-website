import { useState, useEffect, useContext } from 'react'
import { langContext } from './../pages'
import Link from 'next/link'
import { FaWaze, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const data = ['home', 'about', 'features', 'pricing', 'blog']

function Header() {
  const [isActive, setIsActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isEn, updateLang } = useContext(langContext)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 66) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <div
      className={`${
        isScrolled && 'active'
      } fixed z-20  px-1 top-0 left-0  h-[60px] w-screen bg-transparent  flex  duration-300 ease-linear justify-between items-center `}>
      <div className="flex">
        <Link href="/">
          <a className="p-2 max-w-[70px]">
            <img src="/assets/logo.png" />
          </a>
        </Link>
        <button
          onClick={(isEn) => updateLang()}
          className="text-white ml-5 -translate-y-[3px]">
          {isEn ? 'HE' : 'EN'}
        </button>
      </div>

      <div className="md:flex justify-center items-center space-x-3 hidden mr-[7%]">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.link/vrxw1u"
          className="cursor-pointer hover:scale-125 duration-75 ease-linear">
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
          className="cursor-pointer hover:scale-125 duration-75 ease-linear">
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
          className="cursor-pointer hover:scale-125 duration-75 ease-linear">
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
          className="cursor-pointer hover:scale-125 duration-75 ease-linear">
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
      <button
        onClick={() => setIsActive((isActive) => !isActive)}
        className={`${isActive && 'active'} menu `}>
        <svg viewBox="0 0 64 48">
          <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
          <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
          <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
        </svg>
      </button>
      <div
        className={`${
          isActive
            ? 'translate-x-[0px] opacity-100'
            : 'translate-x-[100%] opacity-0'
        } absolute top-0 right-0 z-20 h-screen md:w-[300px] w-[75%] bg-[rgba(0,0,0,0.95)] ease-linear duration-300 px-10 py-10`}>
        <button
          onClick={() => setIsActive((isActive) => !isActive)}
          className={`${
            isActive && 'active'
          } menu absolute top-[-1.75rem] left-[100%] `}>
          <svg viewBox="0 0 64 48">
            <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
            <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
          </svg>
        </button>
        <nav className="flex flex-col items-center justify-between space-y-5">
          <a
            href="Tel: +9722-5343211"
            className="text-white cursor-pointer ease-in duration-100 hover:scale-125">
            02-5343211
          </a>
          <Link href="/events">
            <a className="text-white font-head cursor-pointer ease-in duration-100 hover:scale-125">
              {isEn ? 'Events' : 'אירועים'}
            </a>
          </Link>
          <Link href="/food-truck">
            <a className="text-white font-head cursor-pointer ease-in duration-100 hover:scale-125">
              Food Truck
            </a>
          </Link>
          <a className="text-white font-head cursor-pointer ease-in duration-100 hover:scale-125">
            {isEn ? 'Gift Card' : 'כרטיס מתנה'}
          </a>
          <a
            href="mailto: luciana.d.city@gmail.com"
            className="text-white font-head cursor-pointer ease-in duration-100 hover:scale-125">
            {isEn ? 'Contact' : 'צרו קשר'}
          </a>
        </nav>
      </div>
      <style jsx>{`
        .menu {
          width: 36px;
          height: 36px;
          padding: 0;
          margin: 0;
          position: relative;
          outline: none;
          border: none;
          background: none;
          cursor: pointer;
          -webkit-appearence: none;
          -webkit-tap-highlight-color: transparent;
        }
        .menu svg {
          width: 64px;
          height: 48px;
          top: -6px;
          left: -14px;
          stroke: #fff;
          stroke-width: 1px;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          position: absolute;
        }
        .menu svg path {
          transition: stroke-dasharray var(--duration, 0.85s)
              var(--easing, ease) var(--delay, 0s),
            stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)
              var(--delay, 0s);
          stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
          stroke-dashoffset: var(--offset, 126px);
          transform: translateZ(0);
        }
        .menu svg path:nth-child(2) {
          --duration: 0.7s;
          --easing: ease-in;
          --offset: 100px;
          --array-2: 74px;
        }
        .menu svg path:nth-child(3) {
          --offset: 133px;
          --array-2: 107px;
        }
        .menu.active svg {
          stroke: #fff;
        }
        .menu.active svg path {
          --offset: 57px;
        }
        .menu.active svg path:nth-child(1),
        .menu.active svg path:nth-child(3) {
          --delay: 0.15s;
          --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
        }
        .menu.active svg path:nth-child(2) {
          --duration: 0.4s;
          --offset: 2px;
          --array-1: 1px;
        }
        .menu.active svg path:nth-child(3) {
          --offset: 58px;
        }
        .active {
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}

export default Header
