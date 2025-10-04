import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-2">
        <img src="../../public/undraw_page-eaten_b2rt.svg" alt="Not Found" className='w-64 object-cover'/>
        <h2 className="text-lg md:text-3xl font-bold">
          Not Found
        </h2>
      </div>
    </div>
  )
}
