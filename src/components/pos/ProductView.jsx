import React from 'react'

export default function ProductView() {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between rounded-md p-2 md:p-4 border">
            <h2 className="text-lg md:text-3xl font-bold"> Product </h2>
            <button className="px-4 py-2 bg-[#032f30] rounded-md text-white">
              + Add Product
            </button>
        </div>
    </div>
  )
}
