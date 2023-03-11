import React from 'react'
import Link from 'next/link'
import { President } from './icons'

export default function Homediv() {
  return (
    <div className='flex flex-col text-center overflow-hidden '>
      {/* home page first div */}
     <div className='h-72 flex flex-col justify-end  text-cyan_cust_dark bg-cyan_cust_light border-b-8 border-white '>
        
        <div className='flex flex-col justify-end  h-48'>
          <div className=' flex flex-col md:flex-row  justify-center text-2xl mt-10 md:mt-24 md:mb-2 lg:text-4xl text-sky-900'>
            <h2>Earn&ensp;</h2>
            <h2>While you learn</h2>
          </div>
          <h1 className='text-4xl lg:text-7xl  '>
            PIAIC
          </h1>
          <div className=''>
            <button className='bg-sky-900 rounded-xl py-1 px-4 text-xs lg:text-base lg:py-2 lg:px-12'>
              <Link href={'https://www.piaic.org/'} prefetch={false} target={'_blank'}>
                Apply Now
              </Link>
            </button>
            <div className=' flex flex-col text-sky-900  lg:flex-row lg:justify-center '>
              <button className='bg-lime-200/75 rounded-xl my-1 w-20 self-center lg:w-24 text-xs lg:text-base px-1 lg:mr-4 '>
                <Link href={'https://www.piaic.org/'} prefetch={false} target={'_blank'}>
                  How its work
                </Link>
              </button>
              <button className='bg-lime-200/75 rounded-xl my-1 w-20 self-center lg:w-14 text-xs lg:text-base px-1'>
                <Link href={'https://www.piaic.org/'} prefetch={false} target={'_blank'}>
                  WIT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* home page second div */}
      <div className='h-auto text-2xl lg:text-5xl text-sky-900 bg-cyan_cust_dark '>
        <div className='flex flex-col md:flex-row pt-2'>
          <President/>
          <p className='mt-0 p-4 font-sans text-left text-xs lg:text-lg '>
            <h1 className='font-bold text-lg md:text-4xl '>Presidential Initiative</h1>
            <h2 className='text-base md:text-3xl'>for Artificial Intelligence & Computing (PIAIC)</h2>
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, 
            and business by adopting latest, cutting-edge technologies. Experts are calling this
            the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science,
            cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
            </p>
        </div>
      </div>
    </div>
  )
}

