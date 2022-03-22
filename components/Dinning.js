import React from 'react'

function Dinning() {
  return (
    <div
      id="dinning"
      className="relative h-screen w-screen bg-dinning bg-cover bg-fixed flex justify-start items-end text-center text-white p-20">
      <div className="flex flex-col justify-center items-start text-left">
        <h2 className="lg:text-7xl md:text-5xl text-4xl  mb-8 font-bold max-w-[400px]">
          <span className="block">Come Celebrate</span>
          <span className="block">With Us</span>
        </h2>
        <button className="hover:bg-white hover:text-black  ease-linear duration-100 px-8 py-2 border-2 rounded">
          Call
        </button>
      </div>
    </div>
  )
}

export default Dinning
