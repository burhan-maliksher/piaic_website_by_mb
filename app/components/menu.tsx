"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { PiaicLogo } from './icons'

export default function Menu() {
    const [displayMenu,setDisplayMenu]=useState<'hidden'|'flex'>('hidden')
    
    function ShowMenu(){
        setDisplayMenu("flex")
    }

    function CloseMenu(){
        setDisplayMenu("hidden")
    }   

    return (
    <div>
        <div className='flex justify-between p-4 w-screen'>
            <PiaicLogo/>
            {displayMenu=='hidden'&&
                <span onClick={ShowMenu} className='cursor-pointer'>
                    <Image src={'./assets/custom_menu.svg'} alt={'icon'} width={40} height={60} />
                </span>
            }
            {displayMenu=='flex' && 
                <span onClick={CloseMenu} className='cursor-pointer'>
                    <Image src={'./assets/close.svg'} width={40} height={40} alt={"close icon"}/>
                </span>
            }
        </div>
        
        <div className={`${displayMenu}  flex-col text-3xl mt-4 md:mt-8  md:text-6xl text-center z-2 fixed bg-cyan_cust_light h-screen w-screen`}>
            
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>Home</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>About</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>Programs</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>How it works</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>WIT</Link>
        </div>
    </div>
  )
}
