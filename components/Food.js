import { useInView } from 'react-intersection-observer'

function Food() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  return (
    <div
      id="food"
      ref={ref}
      className="h-screen  bg-food bg-fixed bg-no-repeat bg-cover flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="text-4xl mb-8 font-thin max-w-[600px]">
          Our chef offers a wide variety of delicious Italian recipes - from
          classic pastas to authentic desserts
        </h2>
        <button className="hover:bg-white hover:text-black  ease-linear duration-100 px-8 py-2 border-2 rounded">
          Menu
        </button>
      </div>
    </div>
  )
}

export default Food
