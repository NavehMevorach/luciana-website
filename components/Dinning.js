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
      className="section-image-container flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="md:text-5xl text-4xl  mb-8 font-thin max-w-[400px]">
          <span className="block">The Perfect Place</span>
          <span className="block">For Your Next Celebration.</span>
        </h2>
      </div>
      <img className="section-image" src="/assets/dinning.jpg" alt="bar" />

      <style jsx>
        {`
          .section-image-container {
            width: 100vw;
            height: 100vh;
            clip-path: inset(0);
          }

          .section-image {
            object-fit: cover;
            position: fixed !important;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }
        `}
      </style>
    </div>
  )
}

export default Dinning
