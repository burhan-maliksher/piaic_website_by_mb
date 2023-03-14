"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { PiaicLogo } from './icons'

export default function Menu() {
    const [displayMenu,setDisplayMenu]=useState<'hidden'|'flex'>('hidden')
    const [menuColor,setMenuColor]=useState<''|'bg-cyan_cust_light'>('')
    const [menuZindex,setMenuZindex]=useState<'z-0'|'z-40'>('z-0')
    const [iconZindex,setIconZindex]=useState<'z-10'|'z-50'>('z-10')
    
    function ShowMenu(){
        setDisplayMenu("flex")
        setMenuColor('bg-cyan_cust_light')
        setMenuZindex('z-40')
        setIconZindex('z-50')
    }

    function CloseMenu(){
        setDisplayMenu("hidden")
        setMenuColor('')
        setMenuZindex('z-0')
        setIconZindex('z-10')
    }   

    return (
    <div className={`fixed w-screen h-screen ${menuZindex} ${menuColor}`}>
        <div className={`flex justify-between p-6 absolute  ${iconZindex} w-screen`}>
            <PiaicLogo/>
            {displayMenu=='hidden'&&
                <span onClick={ShowMenu} className=' cursor-pointer'>
                    <Image src={'./assets/custom_menu.svg'} alt={'icon'} width={40} height={60} />
                </span>
            }
            {displayMenu=='flex' && 
                <span onClick={CloseMenu} className='cursor-pointer'>
                    <Image src={'./assets/close.svg'} width={40} height={40} alt={"close icon"}/>
                </span>
            }
        </div>
        
        <div className={`${displayMenu} absolute   flex-col text-3xl -mt-20 pt-48   md:text-6xl text-center   bg-cyan_cust_light h-screen w-screen`}>
            
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>Home</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>About</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>Programs</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>How it works</Link>
            <Link href={''} onClick={CloseMenu} className={'m-2 md:m-4'}>WIT</Link>
        </div>
    </div>
  )
}
