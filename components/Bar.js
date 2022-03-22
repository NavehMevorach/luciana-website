import { useInView } from 'react-intersection-observer'

function Bar() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  return (
    <div
      id="bar"
      ref={ref}
      className="relative h-screen w-screen bg-bar bg-cover bg-fixed flex justify-start items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="md:text-5xl text-4xl  mb-8 font-thin">
          <span className="block">Good Times</span>
          <span className="block">Great Vibes</span>
        </h2>
        <button className="hover:bg-white hover:text-black  ease-linear duration-100 px-8 py-2 border-2 rounded">
          Order a table
        </button>
      </div>
    </div>
  )
}

export default Bar
