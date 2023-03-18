import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div id="about" className='text-white p-6 sm:p-10 md:p-20 border-t-4 border-white'>
      <h1 className='leading-8 md:text-center text-xl md:text-3xl lg:text-4xl'>
        Presidential Initiative for Artificial Intelligence & Computing (PIAIC)
      </h1>
      <p className='leading-8 pt-10 '>
        The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, 
        and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial 
        revolution. We want Pakistan to become a global hub for AI, data science,
        cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
      </p>
      <div className='flex flex-col lg:flex-row mt-10 gap-4 justify-center '>
        <Image src={'/assets/Launching-site-image.jpg'} alt={'icon'} width={800} height={700} className={'w-600 h-800'} />
        <div className='leading-8 flex flex-col lg:justify-evenly gap-4 '>
            <h2 className='text-xl md:text-2xl'>
            President launching the PIAIC website
            </h2>
            <p>
            President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018.
            From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud),
            Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman
            S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud),
            Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani 
            (President Saylani Welfare Trust).
            </p>
        </div>
      </div>
    </div>
  )
}
