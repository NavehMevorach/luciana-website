import { useContext } from 'react'
import { langContext } from './../pages'

function Button({ en, he, handleClick }) {
  const { isEn } = useContext(langContext)

  return (
    <button
      onClick={handleClick}
      className="hover:bg-white hover:text-black ease-linear duration-100 px-8 py-2 border-2 rounded">
      {isEn ? en : he}
    </button>
  )
}

export default Button
