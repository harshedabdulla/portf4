import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
    <motion.img
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="rounded-full border-2 border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png'
      alt=""
    />
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 rounded-full z-0">
      <div className="flex items-center justify-center h-full">
        <p className="text-xl md:text-3xl font-bold text-black opacity-100">
         100%
        </p>
      </div>
    </div>
  </div>
  )
}