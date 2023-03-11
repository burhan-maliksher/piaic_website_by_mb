import Link from 'next/link'
import React from 'react'

function Button() {
  return (
    <button className='bg-sky-900 rounded-3xl py-4 px-8'>
      <Link href={''} prefetch={false} target={'_blank'}>
        Apply Now
      </Link>
    </button>
  )
}

export default Button
