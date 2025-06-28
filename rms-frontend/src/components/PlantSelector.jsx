import React from 'react'

const PlantSelector = () => {
  return (
    <div className='mb-4'>
      <label className='block mb-1 font-medium'>Select Plant</label>
      <select className='w-full p-2 border rounded'>
        <option>Select a Plant</option>
        <option value="">Plant 1</option>
        <option value="">Plant 2</option>
      </select>
    </div>
  )
}

export default PlantSelector
