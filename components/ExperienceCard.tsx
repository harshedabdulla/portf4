import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-4 hover:opacity-100 opacity-20 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={
            {
                y:-100,
                opacity:0,
            }
        }
        transition={{
            duration:1.2,
        }} 
        whileInView={{
            opacity:1,y:0,
        }}
        viewport={{
            once:true
        }}
        className='w-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
        src="https://images.yourstory.com/cs/images/companies/XenaIntelligence1-1663924243493.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" 
        alt="xena intelligence" />
         <div className="px-0 md:px-10">
            <h4 className='text-4xl font-light'>Student Intern</h4>
            <p className='font-bold text-2xl mt-1'>Xena Intelligence</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/187_Js-1024.png" alt="" />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/187_Js-1024.png" alt="" />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/187_Js-1024.png" alt="" />
            </div>
            
            <p className='uppercase py-3 text-gray-500'>Started work...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
               
            </ul>
        </div>
    </article>
  )
}