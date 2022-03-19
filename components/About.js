import { useContext } from 'react'
import { langContext } from './../pages'
import Image from 'next/image'

function About() {
  const { isEn } = useContext(langContext)

  return (
    <section className="overflow-hidden md:pt-0 pt-10 pb-10 ">
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32 text-center flex flex-col space-y-20 justify-center items-center">
        <p className="lg:text-[1.775rem] text-xl font-light ">
          {isEn
            ? "There is a breathtaking place in the DCITY center - Ma'ale Adumim, an Italian chef restaurant called Luciana was established. The restaurant presents a range of unique flavours from quality and fresh raw materials, which produce a fantastic experience full of flavours and an unforgettable atmosphere for each guest. We invite you to enjoy the surfaces of the spectacular restaurant and enjoy a cocktail bar with worldly flavours, wine walls from the chef's cellar and the casinoroulette which came to us directly from the Las Vegas casino."
            : "איי שם במקום עוצר נשימה השוכן במתחם דזיין סיטי מעלה אדומים, הוקמה מסעדת שף איטלקית ושמה לוצ'נה . המסעדה מציגה קשת טעמים  יחודיים מחומרי גלם איכותיים וטריים, אשר מייצרים עבור כל אורח חוויה מדהימה מלאה בטעמים ואווירה בלתי נשכחת . אנו מזמינים אתכם להנות משטחי המסעדה המרהיבה ביופיה ולהנות מבר קוקטיילים מטעמי העולם, קירות יין ממרתף השף ורולטת הקזינו אשר הגיעה אלינו ישירות מקזינו לאס ואגס"}
        </p>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-10.jpeg"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-9.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-7.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-11.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-12.jpeg"
              />
            </div>
          </div>
        </div>
        <p className="lg:text-[1.775rem] text-xl font-light ">
          {isEn
            ? ' Good food, good coffée and good service in a consistent fashion. we take pride in the food we serve you, in the coffee we brew and in the way we welcome you and look after you.'
            : 'אוכל טוב, קפה טוב ושירות טוב בצורה עקבית. אנו גאים באוכל שאנו מגישים לכם, בקפה שאנו מבשלים ובאופן בו אנו מקבלים אתכם בברכה ודואגים לכם.'}
        </p>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-1.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-2.jpeg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-3.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-4.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-5.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="/assets/food-6.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
