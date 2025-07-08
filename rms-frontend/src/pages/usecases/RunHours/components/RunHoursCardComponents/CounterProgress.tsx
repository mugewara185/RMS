import React from 'react'

const CounterProgress = ({current, total}) => {
    const percentage= (current/total)*100;
  return (
    <div className='space-y-1'>
      <div className='w-full bg-gray-700 rounded-full h-4 overlflow-hidden'>
      {/* <div> */}
        <div className={`h-full bg-yellow-400 font-medium w-[${percentage}%] transition-all duration-700`}>
             {/* style={{width:`${percentage}%`}}> */}
        </div>
      </div>
      <div className='text-sm text-yellow-300 font-medium'>
        {current}/{total}
      </div>
    </div>
  )
}

export default CounterProgress
