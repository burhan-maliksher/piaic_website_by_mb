"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


export const PiaicLogo=()=>{
    return(
    <motion.span className='z-10'
    animate={{rotateY:360}}
    transition={{duration:2,repeat:Infinity}}
    
    >
      <Image src={'./assets/piaicLogo.svg'} alt={'icon'} width={40} height={80} />
    </motion.span>
    )
}

export const Punctuation =()=>{
  return(
  <motion.span className='z-10'
    initial={{x:"-100vh"}}
    animate={{x:0,rotateZ:360}}
    transition={{duration:4}}
  >
    <Image src={'./assets/hash.svg'} alt={'icon'} width={40} height={80} />
  </motion.span>
  )
}

export const Blob=()=>{
  return(
  <motion.span className=''
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:3,duration:2,ease:"easeInOut"}}>
     <Image src={'./assets/Blob.svg'} alt={'icon'} width={0} height={0} className={'w-36 md:w-48  lg:w-56'} />
  </motion.span>
  )
}



export const President=()=>{
    return(
    <span className='h-48 w-48 '>
      <Image src={'/assets/president.png'} alt={'icon'} width={100} height={80} />
    </span>
    )
}

export const P=()=>{
  return(
  <span className=' self-end hover:opacity-80  cursor-pointer'>
    <Image src={'./assets/p.svg'} alt={'icon'} width={200} height={80} />
  </span>
  )
}

export const I=()=>{
  return(
  <span className='  self-end mx-10 hover:opacity-80  cursor-pointer'>
    <Image src={'./assets/i.svg'} alt={'icon'} width={100} height={80} />
  </span>
  )
}

export const I2=()=>{
  return(
  <span className='self-end ml-10'>
    <Image src={'./assets/i2.svg'} alt={'icon'} width={100} height={80} />
  </span>
  )
}

export const I3=()=>{
  return(
  <span className='self-end mb-32 z-1 -ml-24 '>
    <Image src={'./assets/i3.svg'} alt={'icon'} width={100} height={80} />
  </span>
  )
}

export const A1=()=>{
  return(
  <span className='self-end hover:opacity-80  cursor-pointer'>
    <Image src={'./assets/a1.svg'} alt={'icon'} width={150} height={150} />
  </span>
  )
}

export const A2=()=>{
  return(
  <span className='self-end z-1 -ml-32 hover:opacity-80  cursor-pointer'>
    <Image src={'./assets/a2.svg'} alt={'icon'} width={300} height={80} />
  </span>
  )
}

export const C1=()=>{
  return(
  <span className='self-end ml-10 hover:opacity-80  cursor-pointer '>
    <Image src={'./assets/c1.svg'} alt={'icon'} width={300} height={80} />
  </span>
  )
}

export const C2=()=>{
  return(
  <span className='self-end mb-80 z-1 -ml-60 hover:opacity-80  cursor-pointer'>
    <Image src={'./assets/c2.svg'} alt={'icon'} width={250} height={80} />
  </span>
  )
}