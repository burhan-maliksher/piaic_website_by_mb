import React from 'react'

export default function CourseCard(props: { name: string ,details:string}) {
  return (
    <div className='text-white'>
      <h1>{props.name} </h1>
      <p> {props.details}</p>
    </div>
  )
}
