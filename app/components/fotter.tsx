import React from 'react'
import { Whatsapp,Youtube,Twitter,Linkedin,Facebook} from './icons'

export default function Fotter() {
  return (
    // <div className='border-b-red border-8 min-h-96 max-h-96 flex flex-col bg-[url("/assets/eyes.jpg")] bg-cover bg-center '>
    <div id="contact" className='flex flex-col justify-center pt-10 bg-gray-900 '>
      <div className='w-48 h-28 self-center relative bg-gray-700 py-5 space-y-2 rounded-t-lg'>
        <div className='flex justify-center '>
          <Whatsapp/>
          <p className=' text-white self-center'>+92-308-2220203</p>
        </div>
        <div className='absolute z-10 ml-3 flex justify-center gap-1 '>
          <Twitter/>
          <Linkedin/>
          <Facebook/>
          <Youtube/>
        </div>
      </div>  
    </div>
  )
}
