import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'
import Button from './Button'

function FoodTruck() {
  const router = useRouter()

  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const handleMoreInfoClick = (e) => {
    console.log('here')
    router.push('https://wa.link/vrxw1u')
  }
  return (
    <div
      id="food-truck"
      ref={ref}
      className="section-image-container flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="text-4xl  mb-8 font-thin max-w-[400px]">
          <span className="block">Can't come to us?</span>
          <span className="block">We will come to you!</span>
        </h2>
        <Button
          he="פרטים נוספים"
          en="Contact"
          handleClick={handleMoreInfoClick}
        />
      </div>
      <img
        className="section-image"
        src="/assets/food-truck.jpg"
        alt="food-truck"
      />

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

export default FoodTruck
