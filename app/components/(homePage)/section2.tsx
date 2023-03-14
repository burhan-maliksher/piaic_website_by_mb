import React from 'react'
// import { A1, A2, C1, C2, I, I2, I3, P } from '../icons'
import Link from 'next/link'
import CourseCard from '../courseCard'

export default function Section2() {
  return (
    <div className=' bg-gray-900 flex flex-col h-auto p-10 '>
      <CourseCard 
        name={'Artificial Intelligence (AI) and Deep Learning'} 
        details={'details'}
      />
      <CourseCard 
        name={'Artificial Intelligence (AI) and Deep Learning'} 
        details={'details'}
      />
      <CourseCard 
        name={'Artificial Intelligence (AI) and Deep Learning'} 
        details={'details'}
      />
      <CourseCard 
        name={'Artificial Intelligence (AI) and Deep Learning'} 
        details={'details'}
      />
      <CourseCard 
        name={'Artificial Intelligence (AI) and Deep Learning'} 
        details={'details'}
      />
      <CourseCard 
        name={'Artificial Intelligence (AI) and Deep Learning'} 
        details={'details'}
      />
    </div>
  )
}
