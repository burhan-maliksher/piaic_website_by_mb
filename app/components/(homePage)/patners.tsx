// "use client"
import React from 'react'
import { Panacloud, Saylani } from '../icons'

export default function Patners() {
  return (
    <div  className=' bg-slate-700'>
     <div id="partner" className=' flex flex-col md:flex-row p-4 md:justify-evenly gap-10 md:gap-0 items-center'>
        <Panacloud/>
        <Saylani/>
      </div>
    </div>
  )
}
