import React, {useState} from 'react'
import ChartHours from './ChartHours';
import CounterProgress from './CounterProgress';
import GaugePM from './GaugePM';
import PMStatusTimeline from './PMStatusTimeline';
import GanttBar from './GanttBar';

const RunHoursCard = () => {
  const [isOpen, setIsOpen]= useState(true)

  return (
    <div className='bg-[#14162E] text-white rounded-xl shadow-xl p-6 w-full max-w-3xl mx-auto '>
      {/* Header  */}
      <div className='cursor-pointer flex items-center justify-between px-6 py-4 border border-gray-700 hover:bg-[#1c1f3f] rounded-t-xl'
      onClick={()=>setIsOpen(!isOpen)}>
        <div className='text-xl font-bold flex items-center space-x-2'>
        <span>⚙️</span>
        <h2>A53 L1 BlowMolder</h2>
        </div>
        <span className='text-yellow-400 text-lg'>{isOpen ? "▲": "▼" }</span>
      </div>


    {/* Collapsible body  */}
    { isOpen && ( 
        <div className='p-6 space-y-6'>
      {/* Hours Chart  */}
      <ChartHours/>

      {/* current hours and pm summary  */}
      <div className='text-sm space-y-2'>
        <div className='text-green-400 font-semibold'>Current Operating Hours: 11463</div>

        <div>
            <p className='text-gray-300'>Upcoming PM</p>
            <p className='text-white'>A53 L1 Week PM for 168 interval</p>
        </div>

        <div className='pt-2'>
            <p className='text-gray-300'>Counter Hours since last PM</p>
            <CounterProgress current={101} total={168}/>
        </div>
      </div>

      {/* Gauge + Last Reset  */}
      <div className='flex flex-col items-center space-y-2'>
        <p className='text-sm text-gray-300'>Last Counter Reset</p>
        <p className='text-white text-md'>05/27/2025 08:15:01 AM</p>
        <GaugePM />
      </div>

      {/* PM Status  */}
      <PMStatusTimeline/>

      <GanttBar/>
      </div>
    )}
    </div>
  );
}

export default RunHoursCard;
