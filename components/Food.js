import { useInView } from 'react-intersection-observer'
import Button from './Button'

function Food({ openModal }) {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  return (
    <div
      id="food"
      ref={ref}
      className="section-image-container flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="text-4xl mb-8 font-thin max-w-[600px]">
          Our chef offers a wide variety of delicious Italian recipes
        </h2>

        <Button he="תפריט" en="Menu" handleClick={openModal} />
      </div>
      <img className="section-image" src="/assets/food.jpg" alt="bar" />

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

export default Food
