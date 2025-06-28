import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-100 p-4 border-r border-gray-200'>
        <h2 className='text-lg font-semibold mb-4'>Use Case</h2>
      <ul className='space-y-2'>
        <Link to='/usecase/runhours'>Run-Hours</Link>
        <li className='hover:bg-gray-200 p-2 rounded cursor-pointer'>Run Hours</li>
        <li className='hover:bg-gray-200 p-2 rounded cursor-pointer'>CCP Aseptic</li>
      </ul>
    </div>
  )
}

export default Sidebar
