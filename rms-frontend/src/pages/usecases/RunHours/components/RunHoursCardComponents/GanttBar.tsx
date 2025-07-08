import React from "react";

const segments = [
  { color: "bg-green-500", label: "0", width: 112 },
  { color: "bg-green-500", label: "1125", width: 125 },
  { color: "bg-green-500", label: "1250", width: 125 },
  { color: "bg-green-500", label: "1375", width: 125 },
  { color: "bg-yellow-400", label: "1500", width: 125 },
  { color: "bg-red-500", label: "1625", width: 125 },
  { color: "bg-green-500", label: "1750", width: 125 },
  { color: "bg-green-500", label: "1875", width: 125 },
  { color: "bg-green-500", label: "2000", width: 125 },
];

const GanttBar = () => {
  return (
    <div className="mt-6">
      <p className="text-sm text-gray-300 mb-2">Gantt Chart</p>

      <div className="flex overflow-x-auto pb-2">
        <div className="min-w-[1000px] relative">
          {/* Segment bar */}
          <div className="flex h-4 rounded mb-1">
            {segments.map((seg, index) => (
              <div
                key={index}
                className={`${seg.color}`}
                style={{ width: `${seg.width}px` }}
              />
            ))}
          </div>

          {/* Label row */}
          <div className="flex text-xs text-gray-400">
            {segments.map((seg, index) => (
              <div
                key={index}
                style={{ width: `${seg.width}px` }}
                className="text-center"
              >
                {seg.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttBar;
