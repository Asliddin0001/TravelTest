import React from 'react'
import card1 from "../images/map 1.png"
import card2 from "../images/binocular 1.png"
import card3 from "../images/backpack 1.png"
import card4 from "../images/ukelele 1.png"
import { styles } from '../util/style'

export default function SecondRow() {
  return (
    <div className='flex items-center justify-between px-10 flex-wrap mt-[80px] md:mt-[50px]'>
        <div className="w-[300px] h-[300px] mt-[20px] mx-auto text-center bg-darkWhite flex flex-col items-center justify-center px-[15px] hover:bg-[#fff] cursor-pointer hover:drop-shadow duration-300">
            <img src={card1} alt="map" />
            <h2 className={`${styles.titleText} mt-2.5`}>Choose Destination</h2>
            <p className={`${styles.informationText} text-textInfo mt-5 md:mt-3`}>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
        <div className="w-[300px] h-[300px] mt-[20px] mx-auto text-center bg-darkWhite flex flex-col items-center justify-center px-[15px] hover:bg-[#fff] cursor-pointer hover:drop-shadow duration-300">
            <img src={card2} alt="map" />
            <h2 className={`${styles.titleText} mt-2.5`}>Explore The Place</h2>
            <p className={`${styles.informationText} text-textInfo mt-5 md:mt-3`}>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
        <div className="w-[300px] h-[300px] mt-[20px] mx-auto text-center bg-darkWhite flex flex-col items-center justify-center px-[15px] hover:bg-[#fff] cursor-pointer hover:drop-shadow duration-300">
            <img src={card3} alt="map" />
            <h2 className={`${styles.titleText} mt-2.5`}>Start Your Journey</h2>
            <p className={`${styles.informationText} text-textInfo mt-5 md:mt-3`}>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
        <div className="w-[300px] h-[300px] mt-[20px] mx-auto text-center bg-darkWhite flex flex-col items-center justify-center px-[15px] hover:bg-[#fff] cursor-pointer hover:drop-shadow duration-300">
            <img src={card4} alt="map" />
            <h2 className={`${styles.titleText} mt-2.5`}>Let’s Enjoy</h2>
            <p className={`${styles.informationText} text-textInfo mt-5 md:mt-3`}>Lorem Ipsum is simply dummy text of the printing setting</p>
        </div>
    </div>
  )
}
