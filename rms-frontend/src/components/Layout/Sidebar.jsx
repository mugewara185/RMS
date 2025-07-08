import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='w-64 bg-blue-100 p-4 border-r border-gray-200'>
        {/* <h2 className='text-lg font-semibold mb-4'>Use Case</h2> */}
      <ul className='space-y-2 text-black'>
        {/* <Link to='/usecase/runhours'>Run-Hours</Link> */}
        <li className='hover:bg-gray-200 p-2 rounded cursor-pointer'>Run Hours</li>
        <li className='hover:bg-gray-200 p-2 rounded cursor-pointer'>CCP Aseptic</li>
      </ul>
      <Link to="/sandbox" className="text-xs text-yellow-400 hover:underline">
      🧪 Component Test</Link>

    </div>
  )
}

export default Sidebar
