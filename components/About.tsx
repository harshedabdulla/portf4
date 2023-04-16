import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    transition={{
        duration:1.5,
    }}
    whileInView={{
        opacity:1,
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        viewport={{
            once:true
        }}
        src='https://harshedabdulla.github.io/portf3/images/pic06.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base'>My name is Harshed, and I am a web developer with a strong passion for creating and designing web applications that not only look great, but are also functional and user-friendly. I have a natural curiosity and a love for problem-solving, which has driven me to constantly seek out new challenges and learn new technologies in the field of web development.

I am based in Kochi, Ernakulam and am always open to new opportunities and collaborations. If you have any coding problems or web development projects that you'd like to discuss, don't hesitate to reach out! I believe in the power of clean, efficient design and strive to get things done quickly and with attention to detail. I'm looking forward to connecting and working with others who share my passion for web development.</p>
        </div>
        </motion.div>
  )
}