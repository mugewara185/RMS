import React, { useState } from 'react';
import AreaGraph from '../../../sandbox/components/areaGraph';
import ChartHours2 from './RunHoursCardComponents/ChartHours2';
import CounterProgress from './RunHoursCardComponents/CounterProgress';
import GaugePM from './RunHoursCardComponents/GaugePM';
import PMStatusTimeline from './RunHoursCardComponents/PMStatusTimeline';
import GanttBar from './RunHoursCardComponents/GanttBar';
import { runHoursKpiConfig } from '../../../../configs/runHoursKpiConfig';
import useCubeQuery from '../../../../hooks/useCubeQuery';

const RunHoursCard: React.FC = () => {
  // These would come from props later
  const plantCode = 'A53';
  const assetTag = 'Blowmolder1';

  const [isOpen, setIsOpen] = useState(true);

  // Get KPI config
  const operatingHoursKpi = runHoursKpiConfig.operatingHours;

  // Run the query
  const cuberesult = useCubeQuery({
    plantCode,
    assetTag,
    suffix: operatingHoursKpi.suffix,
    queryType: operatingHoursKpi.queryType,
  });
  
  const { categories, series,
    lastValue, isLoading, error } = cuberesult;
    
    console.log('cube results:',cuberesult,'data:', series[0]?.data ?? []);

    return (
    <div className='bg-[#14162E] text-white rounded-xl shadow-xl p-6 w-full max-w-3xl mx-auto'>
      {/* Header */}
      <div
        className='cursor-pointer flex items-center justify-between px-6 py-4 border border-gray-700 hover:bg-[#1c1f3f] rounded-t-xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='text-xl font-bold flex items-center space-x-2'>
          <span>⚙️</span>
          <h2>{plantCode} L1 {assetTag}</h2>
        </div>
        <span className='text-yellow-400 text-lg'>{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Collapsible body */}
      {isOpen && (
        <div className='p-6 space-y-6'>
          {/* AreaGraph */}
          {isLoading ? (
            <div>Loading chart...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <AreaGraph
              categories={categories}
              // data={series[0]?.data ?? []}
              data={series}
              lastValue={lastValue}
              setGraphHeight={() => {}}
              dateDifference={1}
            />
          )}

          {/* KPI Summaries */}
          <div className='text-sm space-y-2'>
            <div className='text-green-400 font-semibold'>
              Current Operating Hours: {lastValue}
            </div>

            <div>
              <p className='text-gray-300'>Upcoming PM</p>
              <p className='text-white'>A53 L1 Week PM for 168 interval</p>
            </div>

            <div className='pt-2'>
              <p className='text-gray-300'>Counter Hours since last PM</p>
              <CounterProgress current={101} total={168} />
            </div>
          </div>

          {/* Gauge + Reset */}
          <div className='flex flex-col items-center space-y-2'>
            <p className='text-sm text-gray-300'>Last Counter Reset</p>
            <p className='text-white text-md'>05/27/2025 08:15:01 AM</p>
            <GaugePM />
          </div>

          {/* PM Status + Gantt */}
          <PMStatusTimeline />
          <GanttBar />
        </div>
      )}
    </div>
  );
};

export default RunHoursCard;
