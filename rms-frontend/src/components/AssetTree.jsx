import React from 'react'

const AssetTree = () => {
  return (
    <div className='space-y-2'>
      <div className='p-2 border rounded shadow-sm'>
        <h3 className='font-medium'>Line 1</h3>
        <ul className='ml-4 list-disc text-sm'>
            <li>Motor A</li>
            <li>Pump B</li>
        </ul>
      </div>
      <div className='p-2 border rounded shadow-sm'>
        <h3 className='font-medium'>Line 2</h3>
        <ul className='ml-4 list-disc text-sm'>
        <li>Valve C</li>
      </ul>
      </div>
    </div>
  )
}

export default AssetTree
