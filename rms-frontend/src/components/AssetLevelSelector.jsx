import React from 'react'

const AssetLevelSelector = () => {
  return (
    <div className='flex space-x-4 mb-4'>
      <button className='px-4 py-2 bg-indigo-500 text-white rounded'>Group</button>
      <button className='px-4 py-2 bg-gray-200 text-black rounded'>Line</button>
      <button className='px-4 py-2 bg-gray-200 text-black rounded'>Area</button>
    </div>
  )
}

export default AssetLevelSelector
