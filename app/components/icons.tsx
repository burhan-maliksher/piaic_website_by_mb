"use client"
import Image from 'next/image'
import React from 'react'
import HandleMenu from './handlemenu'

export const MenuIcon=()=>{
    return(
    <span className='' onClick={()=>HandleMenu()} >
      <Image src={'./assets/custom_menu.svg'} alt={'icon'} width={40} height={60} />
    </span>
    )
}

export const PiaicLogo=()=>{
    return(
    <span className=''>
      <Image src={'./assets/piaicLogo.svg'} alt={'icon'} width={40} height={80} />
    </span>
    )
}