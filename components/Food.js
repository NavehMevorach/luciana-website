import React from 'react'

function Food() {
  return (
    <div
      id="food"
      className="relative h-screen w-screen bg-food bg-cover bg-fixed flex justify-start items-end text-center text-white p-20">
      <div className="flex flex-col justify-center items-start text-left">
        <h2 className="lg:text-7xl md:text-5xl text-4xl  mb-8 font-bold">
          <span className="block">
            <span className="text-base">Feel</span> Menu
          </span>
          <span className="block">Italian House.</span>
        </h2>
        <button className="hover:bg-white hover:text-black  ease-linear duration-100 px-8 py-2 border-2 rounded">
          Menu
        </button>
      </div>
    </div>
  )
}

export default Food
