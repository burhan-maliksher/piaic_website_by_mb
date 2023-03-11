// "use client"
import React from 'react'
// import HandleMenu from './handlemenu'
import { MenuIcon, PiaicLogo } from './icons'

export default function Nav() {
  return (
    <div className='z-1 fixed '>
        <div className='flex justify-between p-4 w-screen'>
            <PiaicLogo/>
            <MenuIcon />
            {/* <HandleMenu/> */}
        </div>
    </div>
  )
}
