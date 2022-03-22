import { useInView } from 'react-intersection-observer'
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
      className="relative h-screen w-screen bg-dinning bg-cover bg-fixed flex justify-start items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="md:text-5xl text-4xl  mb-8 font-thin max-w-[400px]">
          <span className="block">The Perfect Place</span>
          <span className="block">For Your Next Celebration.</span>
        </h2>
        <Button he="חייגו" en="call us" />
      </div>
    </div>
  )
}

export default Dinning
