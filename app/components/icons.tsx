"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
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


export const Bracket=()=>{
  return(
  <div className=''>
    <Image src={'./assets/bracket.svg'} alt={'icon'} width={0} height={0} className='w-16 h-36 ' />
  </div>
  )
}

export const Underline=()=>{
  return(
  <motion.div className='  '
    whileInView={{scale:1.1}} 
    transition={{delay:0.2,duration:0.5}}
  >
    <Image src={'./assets/Underline 2.svg'} alt={'icon'} width={0} height={0} className='w-72 md:w-96 lg:w-[700px]' />
  </motion.div>
  )
}

export const Qoute1=()=>{
  return(
  <motion.span className=''
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:5,duration:2,ease:"easeInOut"}}
  >
    <Image src={'./assets/qoute1.svg'} alt={'icon'} width={0} height={0} className={'w-10 h-10'} />
  </motion.span>
  )
}
export const Qoute2=()=>{
  return(
  <motion.span className=''
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:5,duration:2,ease:"easeInOut"}}
  >
    <Image src={'./assets/qoute2.svg'} alt={'icon'} width={0} height={0} className={'w-10 h-10'} />
  </motion.span>
  )
}


export const Whatsapp=()=>{
  return(
  <span className=' hover:opacity-80  cursor-pointer'>
    <Image src={'./assets/whatsapp.svg'} alt={'icon'} width={0} height={0} className={'w-10 h-10'} />
  </span>
  )
}

export const Youtube=()=>{
  return(
  <span className=' hover:opacity-80  cursor-pointer'>
    <Link href={'https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg'} prefetch={false} target={'_blank'}>
      <Image src={'./assets/youtube.svg'} alt={'icon'} width={0} height={0} className={'w-10 h-10'} />
    </Link>
  </span>
  )
}

export const Twitter=()=>{
  return(
  <span className=' hover:opacity-80  cursor-pointer'>
    <Link href={'https://twitter.com/piaicofficial'} prefetch={false} target={'_blank'}>
      <Image src={'./assets/twitter.svg'} alt={'icon'} width={0} height={0} className={'w-10 h-10'} />
    </Link>
  </span>
  )
}

export const Linkedin=()=>{
  return(
  <span className=' hover:opacity-80  cursor-pointer'>
    <Link href={'https://www.linkedin.com/company/piaicofficial/'} prefetch={false} target={'_blank'}>
      <Image src={'./assets/linkedin.svg'} alt={'icon'} width={0} height={0} className={'w-10 h-10'} />
    </Link>
  </span>
  )
}

export const Facebook=()=>{
  return(
  <span className=' hover:opacity-80  cursor-pointer'>
    <Link href={'https://www.facebook.com/groups/piaic/'} prefetch={false} target={'_blank'}>
      <Image src={'./assets/facebook.svg'} alt={'icon'} width={0} height={0} className={'w-10 h-10'} />
    </Link>
  </span>
  )
}

export const Saylani=()=>{
  return(
  <motion.span className=' '
     whileInView={{opacity:[0,1],x:[100,0],transition:{repeat:0,delay:0.2, duration: 2 }}}
  >
      <Image src={'/assets/saylaniLogo.png'} alt={'icon'} width={200} height={170}  />
  </motion.span>
  )
}

export const Panacloud=()=>{
  return(
  <motion.span className=' '
  whileInView={{opacity:[0,1],x:[-100,0],transition:{repeat:0,delay:0.2, duration: 2 }}}
  
  >
      <Image src={'./assets/panacloudLogo.svg'} alt={'icon'} width={100} height={100} className={'w-30 h-10'} />
  </motion.span>
  )
}

export const Arrow=()=>{
  return(
  <span className='   cursor-pointer'>
      <Image src={'./assets/Arrow 11.svg'} alt={'icon'} width={100} height={100} className={'w-30 h-10'} />
  </span>
  )
}