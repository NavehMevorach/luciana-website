import { useContext } from 'react'
import { langContext } from './../pages'
import Link from 'next/link'

function Footer() {
  const { isEn } = useContext(langContext)

  return (
    <div className="border-t-[1px] w-screen bg-transparent p-5  flex  text-[#fafafa] text-[0.75rem] font-bold absolute bottom-0 z-30">
      <p className="">{`COPYRIGHT © ${new Date().getFullYear()} LUCIANA DCITY INC.`}</p>
      <nav className="md:flex items-center justify-between space-x-5 ml-auto hidden">
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
        <Link href="#home">
          <a className="hover:text-white ease-linear duration-100">
            Back To Top
          </a>
        </Link>
      </nav>
    </div>
  )
}

export default Footer
