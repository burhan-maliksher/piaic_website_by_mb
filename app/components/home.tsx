import React from 'react'
import Link from 'next/link'
import {MenuIcon, PiaicLogo} from './icons'

export default function Homediv() {
  return (
    <div className='flex flex-col text-center '>
      {/* home page first div */}
     <div className='h-72 flex flex-col justify-end  text-cyan_cust_dark bg-cyan_cust_light border-b-8 border-white '>
        <div className='flex flex-col justify-end  h-48'>
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
      <div className='h-72 text-2xl lg:text-5xl text-sky-900 bg-cyan_cust_dark '>
        <h2>Earn</h2>
        <h2>While you learn</h2>
      </div>
    </div>
  )
}

