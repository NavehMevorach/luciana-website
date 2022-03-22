import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="w-screen bg-transparent p-5  flex justify-between text-[#7f7f7f] text-[0.75rem] font-bold">
      <p className="">{`COPYRIGHT © ${new Date().getFullYear()} LUCIANA DCITY INC.`}</p>
      <Link href="#home">
        <a className="hover:text-white ease-linear duration-100">Back To Top</a>
      </Link>
      <p>MADE WITH ❤️ BY NAVEH MEVORACH</p>
    </div>
  )
}

export default Footer
