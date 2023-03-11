import Image from 'next/image'
import React from 'react'


export const PiaicLogo=()=>{
    return(
    <span className=''>
      <Image src={'./assets/piaicLogo.svg'} alt={'icon'} width={40} height={80} />
    </span>
    )
}