import React from 'react';
import AreaGraph from './AreaGraph';
import { mockGraphData } from '../mockCubeData';

const DeviceCard = ({ device }) => {
  const dataObj = mockGraphData[device._id];
  if (!dataObj) return null;

  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-4">
      <h4 className="text-lg font-semibold mb-2">{device.device_name}</h4>
      <AreaGraph
        categories={dataObj.categories}
        data={dataObj.series}
        lastValue={dataObj.lastValue}
        dateDifference={1}
      />
    </div>
  );
};

export default DeviceCard;
