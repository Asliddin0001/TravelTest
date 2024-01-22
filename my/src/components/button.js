import React from 'react'
import { styles } from '../util/style'

export default function Button({text, width, height, marginTop}) {
  return (
    <button className={`w-[${width}px] h-[${height}px] mt-[${marginTop}px] font-medium sm:w-[150px] md:h-[45px] bg-primary btn border-primary border-[1px] hover:text-primary duration-200 text-[#fff] ${styles.informationText}`}>{text}</button>
  )
}
