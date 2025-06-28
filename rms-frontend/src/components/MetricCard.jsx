import React from 'react'

const MetricCard = ({title="Battery", value="87%", unit="%"}) => {
  return (
    <div className='p-4 border rounded shadow-md w-40 bg-white'>
        <h4 className='text-sm font-medium'>{title}</h4>
        {title=='Connection'?
         (value =='Online'
        ? <p>.</p> : <p>..</p>)
        :<p className='text-2xl font-bold'>{value}</p>}
        {/* <p className='text-2xl font-bold'>{value}</p> */}
    
    </div>
  )
}

export default MetricCard
