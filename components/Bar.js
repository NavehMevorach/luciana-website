import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'
import Button from './Button'

function Bar() {
  const router = useRouter()
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const handleReserveClick = (e) => {
    console.log('here')
    router.push(
      'https://tabitisrael.co.il/online-reservations/create-reservation?step=search&orgId=6146faa77f521602eed701a2'
    )
  }
  return (
    <div
      id="bar"
      ref={ref}
      className="section-image-container flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="text-4xl  mb-8 font-thin">
          <span className="block">Good Times</span>
          <span className="block">Great Vibes</span>
        </h2>
        <Button
          he="הזמנת שולחן"
          en="Reserve"
          handleClick={handleReserveClick}
        />
      </div>
      <img className="section-image" src="/assets/bar.jpg" alt="bar" />

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

export default Bar
