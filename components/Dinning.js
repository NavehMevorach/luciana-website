import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

function Dinning() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  return (
    <div
      id="dinning"
      ref={ref}
      className="relative h-screen flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="md:text-5xl text-4xl  mb-8 font-thin max-w-[400px]">
          <span className="block">The Perfect Place</span>
          <span className="block">For Your Next Celebration.</span>
        </h2>
      </div>
      <Image
        className="relative -z-10"
        layout="fill"
        objectFit="cover"
        quality={100}
        src="/assets/dinning.jpg"
        alt="bar"
      />
    </div>
  )
}

export default Dinning
