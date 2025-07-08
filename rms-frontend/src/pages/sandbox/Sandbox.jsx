import React from 'react'
import { PmStatusTimelne } from '../../components/Playground/PmStatusTimelne'
import AreaGraph from './components/areaGraph'
const Sandbox = () => {
  const dummyCategories = [
    "2025-07-03T02:35:00Z",
    "2025-07-03T02:40:00Z",
    "2025-07-03T02:45:00Z",
    "2025-07-03T02:50:00Z",
    "2025-07-03T03:00:00Z",
    "2025-07-03T03:30:00Z",
    "2025-07-03T04:00:00Z",
    "2025-07-03T04:30:00Z",
  ];
  
  const dummyData = [
    {
      name: "Blower_L1",
      data: [10, 150, 150, 200, 300, 300, 400],
    },
  ];
  
  return (
    <div>Sandbox
        {/* <PmStatusTimelne/> */}
        <AreaGraph
          categories={dummyCategories}
          data={dummyData}
          lastValue={200}
          setGraphHeight={() => {}}
          dateDifference={1}/>
    </div>
  )
}

export default Sandbox