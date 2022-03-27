import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from './Button'

function Dinning() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  return (
    <div
      id="dinning"
      ref={ref}
      className="h-screen bg-dinning bg-fixed bg-no-repeat bg-cover flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="md:text-5xl text-4xl  mb-8 font-thin max-w-[400px]">
          <span className="block">The Perfect Place</span>
          <span className="block">For Your Next Celebration.</span>
        </h2>
      </div>
    </div>
  )
}

export default Dinning
