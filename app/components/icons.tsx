import Image from 'next/image'
import React from 'react'


export const PiaicLogo=()=>{
    return(
    <span className=''>
      <Image src={'./assets/piaicLogo.svg'} alt={'icon'} width={40} height={80} />
    </span>
    )
}

export const President=()=>{
    return(
    <span className='h-48 w-48 '>
      <Image src={'/assets/president.png'} alt={'icon'} width={100} height={80} />
    </span>
    )
}