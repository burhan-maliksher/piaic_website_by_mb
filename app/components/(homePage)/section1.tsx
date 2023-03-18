"use client"
import React from 'react'
import Link from 'next/link'
import { Blob,Punctuation } from '../icons'
import { motion } from 'framer-motion'

export default function Section1() {
  return (
     <div className='  h-96 flex flex-col justify-end  text-cyan_cust_dark  '>
        
        <div className=' relative  flex flex-col justify-end h-auto'>
          <div className='mt-20  flex flex-col md:flex-row  justify-center text-2xl  md:mt-24 md:mb-2 lg:text-4xl text-sky-700'>
            <h2 className='flex justify-center'>
              <Punctuation/>
              <motion.span
              initial={{opacity:0,x:"-20vw"}}
              animate={{opacity:1,x:0}}
              transition={{duration:3,ease:"easeInOut"}}
              >
                Earn&ensp;
              </motion.span>
            </h2>
            <motion.h2 className='flex justify-center'
              initial={{opacity:0,x:'20vw'}}
              animate={{opacity:1,x:0}}
              transition={{duration:3,ease:"easeInOut"}}
            >
              While you learn
            </motion.h2>
          </div>

          <div  className={`relative h-auto  lg:mt-0 flex flex-col align-center justify-center text-4xl lg:text-7xl  `}>
            
            <motion.p className='absolute z-10 h-24 lg:h-40 self-center '
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:2,duration:3}}
            >
              PIAIC
            </motion.p>
            <div className='absolute z-10 self-center '>
              <motion.button className='z-20 bg-sky-900 rounded-xl py-1 px-4 text-xs lg:text-base lg:py-2 lg:px-12  hover:bg-gradient-to-r from-lime-400 to-teal-400 text-white hover:text-black  cursor-pointer'
                initial={{ opacity:0 }}
                animate={{opacity:1}}
                transition={{delay:0.5, duration: 4 }}
                whileInView={{  y:[0,-10,-15,-10,-5,0],x:[0,-10,-15,10,15,0] ,transition:{repeat:Infinity,delay:0.2, duration: 2 ,ease:"easeInOut"}}}
              >
                <Link href={'https://portal.piaic.org/signup'} prefetch={false} target={'_blank'} className={'cursor-pointer'}>
                  Apply Now
                </Link>
              </motion.button>
            </div>
            <p className=' flex justify-center w-auto text-center'>
              <Blob/>
            </p>
          </div>
          

        </div>

      </div>
    
  )
}


  {/* home page second div */}
      {/* <div className='flex flex-col font-sans text-left md:flex-row pt-2 h-[450px] md:h-60  text-sky-900 bg-cyan_cust_dark '>
          <President/>
          <div className='mt-0 p-4  text-xs lg:text-lg '>
            <h1 className='font-bold text-lg md:text-4xl '>Presidential Initiative</h1>
            <h2 className='text-base md:text-3xl'>for Artificial Intelligence & Computing (PIAIC)</h2>
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, 
            and business by adopting latest, cutting-edge technologies. Experts are calling this
            the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science,
            cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
            </div>
      </div> */}