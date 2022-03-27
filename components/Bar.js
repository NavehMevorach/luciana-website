import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Button from './Button'

function Bar() {
  const router = useRouter()
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const handleMenuClick = (e) => {
    console.log('here')
    router.push(
      'https://tabitisrael.co.il/online-reservations/create-reservation?step=search&orgId=6146faa77f521602eed701a2'
    )
  }
  return (
    <div
      id="bar"
      ref={ref}
      className="relative h-screen flex items-end text-center text-white p-20">
      <div
        className={`${
          inView && 'fadeInTop'
        } flex flex-col justify-center items-start text-left`}>
        <h2 className="md:text-5xl text-4xl  mb-8 font-thin">
          <span className="block">Good Times</span>
          <span className="block">Great Vibes</span>
        </h2>
        <Button he="הזמנת שולחן" en="Reserve" handleClick={handleMenuClick} />
      </div>
      <Image
        className="relative -z-10"
        layout="fill"
        objectFit="cover"
        quality={100}
        src="/assets/bar.jpg"
        alt="bar"
      />
    </div>
  )
}

export default Bar
