"use client"
import { motion } from 'framer-motion'
import { Bracket, Underline } from './icons'

export default function CourseCard(props: {id:number, name: string ,details:string}) {
  
  return (
    <div id={`${props.id}`} className={`flex flex-col w-80vh space-x-6 space-y-5 w-100vh h-auto text-left text-white`}>
      <div className='flex flex-col lg:text-center justify-center items-center' >
        <motion.h1 className='text-left text-xs md:text-xl lg:text-4xl font-bold '
          whileInView={{scale:1.2}}
          transition={{delay:0.2,duration:0.5}}
        >
          {props.name} 
        </motion.h1>
        <Underline/>
      </div>
      <motion.div className='flex space-x-1 lg:px-10 lg:justify-left '
            whileInView={{scale:0.9}}
            transition={{delay:0.2,duration:0.6}}
      >
        <Bracket />
        <p className='text-emerald-300'> {props.details}</p>
      </motion.div>
    </div>
  )
}
