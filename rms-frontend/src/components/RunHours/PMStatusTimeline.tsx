import React from 'react'

const checkpoints=[
    {value:5712, unit:"w", status:"✔"},
    { value: 5880, unit: "W", status: "✔" },
    { value: 6048, unit: "Q", status: "Q" },
    { value: 6216, unit: "W", status: "✔" },
    {value:5712, unit:"w", status:"✔"},
    { value: 5880, unit: "W", status: "✔" },
    { value: 6048, unit: "Q", status: "Q" },
    { value: 6216, unit: "W", status: "✔" },
    {value:5712, unit:"w", status:"✔"},
    { value: 5880, unit: "W", status: "✔" },
    { value: 6048, unit: "Q", status: "Q" },
    { value: 6216, unit: "W", status: "✔" },
]

const PMStatusTimeline = () => {
  return (
    <div className='mt-6'>
      <p className='text-sm text-gray-300 mb-2'>PM Status Timeline</p>
      <div className='overflow-x-auto'>

      <div className='border-t border-gray-500 relative h-16 flex items-start justify-between px-2'>
        {checkpoints.map((cp, index)=>(
            <div key={index} className='flex flex-col items-center space-y-1'>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold
                                ${cp.status==="✔" ? "bg-green-500 text-white"
                                                   : "bg-yellow-500 text-black"
                                }`}>
                    {cp.status}
                </div>
                <div className='text-xs text-white'>{cp.value}</div>
                <div className='text-xs text-gray-400'>{cp.unit}</div>
            </div>
        ))            
        }
      </div>
      </div>
    </div>
  )
}

export default PMStatusTimeline;
