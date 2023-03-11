"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function HandleMenu() {
    const [displayMenu,setDisplayMenu]=useState('hidden')
    return (
    <div className='flex flex-col text-center z-2 fixed bg-cyan_cust_light h-screen w-screen'>
        <Link href={''} className={'text-xl'}>Home</Link>
    </div>
  )
}
