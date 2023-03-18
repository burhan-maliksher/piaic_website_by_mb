"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { Arrow, Qoute1, Qoute2 } from './icons'

export default function Programheading() {
  return (
      <div className='self-center'>
        <div className='flex gap-2 mt-12 '>
          <Qoute1/>
          <motion.h2 className='font-iceberg text-emerald-300 text-base lg:text-xl self-center drop-shadow-[10px_20px_4px_rgba(255,255,255,1)] shadow-white'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:5,duration:2,ease:"easeInOut"}}
          >Programs Avaliable</motion.h2>              
          <Qoute2/>
        </div>
        <motion.div className=' mt-16 ml-10 mb-4 rotate-45'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:5,duration:2,ease:"easeInOut",repeat:Infinity}}
        >
          <Arrow/>
        </motion.div>
      </div>
  )
}
