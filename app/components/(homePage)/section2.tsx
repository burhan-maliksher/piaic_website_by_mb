import React from 'react'
import CourseCard from '../courseCard'
import Programheading from '../programheading'

export default function Section2() {
  return (
    <div className='  flex flex-col   h-auto gap-10 '>
      <Programheading/>
      <CourseCard 
        id={1}
        name={'Web 3.0 (Blockchain) and Metaverse'} 
        details={'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.'}
      />
      <CourseCard
        id={2} 
        name={'Artificial Intelligence (AI) and Deep Learning'} 
        details={'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.'}
      />
      <CourseCard
        id={3} 
        name={'Cloud-Native Computing'} 
        details={'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.'}
      />
      <CourseCard
        id={4} 
        name={'Ambient Computing and IoT'} 
        details={'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. '}
      />
      <CourseCard 
        id={5}
        name={'Genomics and Bioinformatics'} 
        details={'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.'}
      />
      <CourseCard
        id={6} 
        name={'Network Programmability and Automation'} 
        details={'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.'}
      />

    </div>
  )
}
